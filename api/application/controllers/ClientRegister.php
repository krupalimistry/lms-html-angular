<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use \Firebase\JWT\JWT;

class ClientRegister extends CI_Controller 
{	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('ClientRegister_model');
		include APPPATH . 'vendor/firebase/php-jwt/src/JWT.php';
	}
	
	public function getAllData($id = NULL)
	{
		if(!empty($id)) {
			$data['user']=$this->ClientRegister_model->get_userdata($id);
			$data['country']=$this->ClientRegister_model->getlist_country();
			if($data['user']){
				echo json_encode($data);
			} else {
				echo json_encode('wrong code');
			}
			
		}
		
	}

	public function getAllCountry() {
		
		$data=$this->ClientRegister_model->getlist_country();
		echo json_encode($data);
				
	}

    // List all state
	public function getAllState()
	{
		$data=$this->ClientRegister_model->getlist_state();		
		echo json_encode($data);
	}

	public function getStateList($country_id = NULL) {
		
		if(!empty($country_id)) {
			
			$result = [];
			$result = $this->ClientRegister_model->getStateList($country_id);			
			echo json_encode($result);				
		}			
	}

	public function checkUsernameUrl()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);	

		if ($post_user) 
		{
			$result = $this->ClientRegister_model->checkUsernameUrl($post_user); 	
			if($result=='true')
			{	
				echo json_encode('success');	
			} elseif($result=='url dublicate') {
				echo json_encode('url dublicate');	
			} elseif($result=='username dublicate'){
				echo json_encode('username dublicate');
			} elseif($result=='both dublicate'){
				echo json_encode('both dublicate');
			}
		}	
	}	

	public function updateClient()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);	

		if ($post_user) 
			{
				$result = $this->ClientRegister_model->updateClient($post_user); 
					
				if($result)
				{
					$userId=$result['UserId'];
					$userId_backup=$userId;
	
					$EmailToken = 'Client Registration';
					
					$this->db->select('Value');
					$this->db->where('Key','EmailFrom');
					$smtp1 = $this->db->get('tblmstconfiguration');	
					foreach($smtp1->result() as $row) {
						$smtpEmail = $row->Value;
					}
					$this->db->select('Value');
					$this->db->where('Key','EmailPassword');
					$smtp2 = $this->db->get('tblmstconfiguration');	
					foreach($smtp2->result() as $row) {
						$smtpPassword = $row->Value;
					}
			
					// $config['protocol']='smtp';
					// $config['smtp_host']='ssl://smtp.googlemail.com';
					// $config['smtp_port']='465';
					// $config['smtp_user']='myopeneyes3937@gmail.com';
					// $config['smtp_pass']='W3lc0m3@2018';
			
					$config['protocol']='mail';
					$config['smtp_host']='vps40446.inmotionhosting.com';
					$config['smtp_port']='587';
					$config['smtp_user']=$smtpEmail;
					$config['smtp_pass']=$smtpPassword;
					
					$config['charset']='utf-8';
					$config['newline']="\r\n";
					$config['mailtype'] = 'html';							
					$this->email->initialize($config);
			
					$query = $this->db->query("SELECT et.To,et.Subject,et.EmailBody,et.BccEmail,(SELECT GROUP_CONCAT(UserId SEPARATOR ',') FROM tbluser WHERE RoleId = et.To && ISActive = 1 && StatusId = 0) AS totalTo,(SELECT GROUP_CONCAT(EmailAddress SEPARATOR ',') FROM tbluser WHERE RoleId = et.Cc && ISActive = 1 && StatusId = 0) AS totalcc,(SELECT GROUP_CONCAT(EmailAddress SEPARATOR ',') FROM tbluser WHERE RoleId = et.Bcc && ISActive = 1 && StatusId = 0) AS totalbcc FROM tblemailtemplate AS et LEFT JOIN tblmsttoken as token ON token.TokenId=et.TokenId WHERE token.TokenName = '".$EmailToken."' && et.IsActive = 1");
					foreach($query->result() as $row){ 
						if($row->To==4){
							$queryTo = $this->db->query('SELECT EmailAddress FROM tbluser where UserId = '.$userId); 
							$rowTo = $queryTo->result();
							$query1 = $this->db->query('SELECT p.PlaceholderId,p.PlaceholderName,t.TableName,c.ColumnName FROM tblmstplaceholder AS p LEFT JOIN tblmsttablecolumn AS c ON c.ColumnId = p.ColumnId LEFT JOIN tblmsttable AS t ON t.TableId = c.TableId WHERE p.IsActive = 1');
							$body = $row->EmailBody;
							foreach($query1->result() as $row1){			
								$query2 = $this->db->query('SELECT '.$row1->ColumnName.' AS ColumnName FROM '.$row1->TableName.' AS tn LEFT JOIN tblmstuserrole AS role ON tn.RoleId = role.RoleId LEFT JOIN tblmststate AS st ON tn.StateId = st.StateId LEFT JOIN tblmstcountry AS con ON st.CountryId = con.CountryId LEFT JOIN tblcompany AS com ON tn.UserId = com.UserId WHERE tn.UserId = '.$userId);
								$result2 = $query2->result();
								$body = str_replace("{ ".$row1->PlaceholderName." }",$result2[0]->ColumnName,$body);					
							} 
							if($row->BccEmail!=''){
								$bcc = $row->BccEmail.','.$row->totalbcc;
							} else {
								$bcc = $row->totalbcc;
							}

							$this->db->select('c.WorkspaceURL,c.CompanyName,c.CompanyLogo');
							$this->db->join('tbluser u', 'u.ParentId = c.UserId', 'inner');
							$this->db->where('u.UserId',$userId);
							$smtp2 = $this->db->get('tblcompany c');	
							foreach($smtp2->result() as $row2) {
								$WorkspaceURL = $row2->WorkspaceURL;
								$CompanyName = $row2->CompanyName;
								$CompanyLogo = $row2->CompanyLogo;
							}							
							if($CompanyLogo!=NULL){
								$body = str_replace("{logo_url}",''.BASE_URL.'/assets/company/'.$CompanyLogo,$body);
							} else {
								$body = str_replace("{logo_url}",''.BASE_URL.'/assets/images/template_logo.png',$body);
							}
							$body = str_replace("{login_link}",''.BASE_URL.'/'.$WorkspaceURL.'/login',$body);	
	
							$this->email->from($smtpEmail, 'Learn Feedback');
							$this->email->to($rowTo[0]->EmailAddress);		
							$this->email->subject($row->Subject);
							$this->email->cc($row->totalcc);
							$this->email->bcc($bcc);
							$this->email->message($body);
							if($this->email->send())
							{	
								$email_log = array(
									'From' => trim($smtpEmail),
									'Cc' => trim($row->totalcc),
									'Bcc' => trim($bcc),
									'To' => trim($rowTo[0]->EmailAddress),
									'Subject' => trim($row->Subject),
									'MessageBody' => trim($body),
								);
								
								$res = $this->db->insert('tblemaillog',$email_log);
								$log_data = array(
									'UserId' => trim($result['UserId']),
									'Module' => 'Client-Registration',
									'Activity' =>'Add'		
								);
								$log = $this->db->insert('tblactivitylog',$log_data);

								// $token = array(
								// 	"UserId" => $result['UserId'],
								// 	"RoleId" => $result['RoleId'],
								// 	"EmailAddress" => $result['EmailAddress'],
								// 	"FirstName" => $result['FirstName'],
								// 	"LastName" => $result['LastName'],
								// );
		
								// $jwt = JWT::encode($token, "MyGeneratedKey","HS256");
								// $output['token'] = $jwt;
								// echo json_encode($output);	
								
							}else
							{
								//echo json_encode("Fail");
							}
						} else {
							$userId_ar = explode(',', $row->totalTo);			 
							foreach($userId_ar as $userId){
								$queryTo = $this->db->query('SELECT EmailAddress FROM tbluser where UserId = '.$userId); 
								$rowTo = $queryTo->result();
								$query1 = $this->db->query('SELECT p.PlaceholderId,p.PlaceholderName,t.TableName,c.ColumnName FROM tblmstplaceholder AS p LEFT JOIN tblmsttablecolumn AS c ON c.ColumnId = p.ColumnId LEFT JOIN tblmsttable AS t ON t.TableId = c.TableId WHERE p.IsActive = 1');
								$body = $row->EmailBody;
								foreach($query1->result() as $row1){			
									$query2 = $this->db->query('SELECT '.$row1->ColumnName.' AS ColumnName FROM '.$row1->TableName.' AS tn LEFT JOIN tblmstuserrole AS role ON tn.RoleId = role.RoleId LEFT JOIN tblmststate AS st ON tn.StateId = st.StateId LEFT JOIN tblmstcountry AS con ON st.CountryId = con.CountryId LEFT JOIN tblcompany AS com ON tn.UserId = com.UserId WHERE tn.UserId = '.$userId_backup);
									$result2 = $query2->result();
									$body = str_replace("{ ".$row1->PlaceholderName." }",$result2[0]->ColumnName,$body);					
								} 
								$company_data=$post_user['CompanyEntity'];
								$name=$company_data['CompanyName'];

								$row->Subject = str_replace("{company_name}",$name,$row->Subject);
								$body = str_replace("{company_name}",$name,$body);
								$body = str_replace("{login_link}",''.BASE_URL.'/client-invitelist/',$body);
								$body = str_replace("{logo_url}",''.BASE_URL.'/assets/images/template_logo.png',$body);

								$this->email->from($smtpEmail, 'LFB Admin');
								$this->email->to($rowTo[0]->EmailAddress);		
								$this->email->subject($row->Subject);
								$this->email->cc($row->totalcc);
								$this->email->bcc($row->BccEmail.','.$row->totalbcc);
								$this->email->message($body);
								if($this->email->send())
								{
									//echo 'success';
								}else
								{
									//echo 'fail';
								}
							}
						}
					}
					$token = array(
						"UserId" => $result['UserId'],
						"RoleId" => $result['RoleId'],
						"EmailAddress" => $result['EmailAddress'],
						"FirstName" => $result['FirstName'],
						"LastName" => $result['LastName'],
						"UserName" => $result['UserName']
					);

					$jwt = JWT::encode($token, "MyGeneratedKey","HS256");
					$output['token'] = $jwt;
					echo json_encode($output);	
				}
				else
				{
					return $this->output
				->set_status_header(404)
				->set_output(json_encode(array(
						'text' => 'Registration Failed!!!',
						'type' => 'danger'
				)));
				}
			}
					
	}

	public function addClient()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);	

		if ($post_user) 
			{
				$chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				$res = "";
				for ($i = 0; $i < 6; $i++) {
					$res .= $chars[mt_rand(0, strlen($chars)-1)];
				}			
				$post_user['InvitationCode']= $res;

				$result = $this->ClientRegister_model->addClient($post_user); 
					
				if($result)
				{
					$data['UserId']=$result;
					$data['InvitationCode']=$post_user['InvitationCode'];

					$userId=$result;
					$userId_backup=$userId;
	
					$EmailToken = 'Activate Client Account';
					
					$this->db->select('Value');
					$this->db->where('Key','EmailFrom');
					$smtp1 = $this->db->get('tblmstconfiguration');	
					foreach($smtp1->result() as $row) {
						$smtpEmail = $row->Value;
					}
					$this->db->select('Value');
					$this->db->where('Key','EmailPassword');
					$smtp2 = $this->db->get('tblmstconfiguration');	
					foreach($smtp2->result() as $row) {
						$smtpPassword = $row->Value;
					}
			
					// $config['protocol']='smtp';
					// $config['smtp_host']='ssl://smtp.googlemail.com';
					// $config['smtp_port']='465';
					// $config['smtp_user']='myopeneyes3937@gmail.com';
					// $config['smtp_pass']='W3lc0m3@2018';
			
					$config['protocol']='mail';
					$config['smtp_host']='vps40446.inmotionhosting.com';
					$config['smtp_port']='587';
					$config['smtp_user']=$smtpEmail;
					$config['smtp_pass']=$smtpPassword;
					
					$config['charset']='utf-8';
					$config['newline']="\r\n";
					$config['mailtype'] = 'html';							
					$this->email->initialize($config);
			
					$query = $this->db->query("SELECT et.To,et.Subject,et.EmailBody,et.BccEmail,(SELECT GROUP_CONCAT(UserId SEPARATOR ',') FROM tbluser WHERE RoleId = et.To && ISActive = 0 && StatusId = 0) AS totalTo,(SELECT GROUP_CONCAT(EmailAddress SEPARATOR ',') FROM tbluser WHERE RoleId = et.Cc && ISActive = 0 && StatusId = 0) AS totalcc,(SELECT GROUP_CONCAT(EmailAddress SEPARATOR ',') FROM tbluser WHERE RoleId = et.Bcc && ISActive = 0 && StatusId = 0) AS totalbcc FROM tblemailtemplate AS et LEFT JOIN tblmsttoken as token ON token.TokenId=et.TokenId WHERE token.TokenName = '".$EmailToken."' && et.IsActive = 1");
					foreach($query->result() as $row){ 
						if($row->To==3){
							$userId_ar = explode(',', $row->totalTo);			 
							foreach($userId_ar as $userId){
								if($userId==$userId_backup){
								$queryTo = $this->db->query('SELECT EmailAddress FROM tbluser where UserId = '.$userId); 
								$rowTo = $queryTo->result();
								$query1 = $this->db->query('SELECT p.PlaceholderId,p.PlaceholderName,t.TableName,c.ColumnName FROM tblmstplaceholder AS p LEFT JOIN tblmsttablecolumn AS c ON c.ColumnId = p.ColumnId LEFT JOIN tblmsttable AS t ON t.TableId = c.TableId WHERE p.IsActive = 1');
								$body = $row->EmailBody;
								foreach($query1->result() as $row1){			
									$query2 = $this->db->query('SELECT '.$row1->ColumnName.' AS ColumnName FROM '.$row1->TableName.' AS tn LEFT JOIN tblmstuserrole AS role ON tn.RoleId = role.RoleId LEFT JOIN tblmststate AS st ON tn.StateId = st.StateId LEFT JOIN tblmstcountry AS con ON st.CountryId = con.CountryId LEFT JOIN tblcompany AS com ON tn.UserId = com.UserId WHERE tn.UserId = '.$userId_backup);
									$result2 = $query2->result();
									$body = str_replace("{ ".$row1->PlaceholderName." }",$result2[0]->ColumnName,$body);					
								} 
								
								$body = str_replace("{logo_url}",''.BASE_URL.'/assets/images/template_logo.png',$body);
								$body = str_replace("{action_url}",''.BASE_URL.'/activate-account/'.JWT::encode($data,"MyGeneratedKey","HS256").'',$body);

								if($row->BccEmail!=''){
									$bcc = $row->BccEmail.','.$row->totalbcc;
								} else {
									$bcc = $row->totalbcc;
								}
								
								$this->email->from($smtpEmail, 'LFB Admin');
								$this->email->to($rowTo[0]->EmailAddress);		
								$this->email->subject($row->Subject);
								$this->email->cc($row->totalcc);
								$this->email->bcc($row->BccEmail.','.$row->totalbcc);
								$this->email->message($body);
								if($this->email->send())
								{
									$email_log = array(
									'From' => trim($smtpEmail),
									'Cc' => trim($row->totalcc),
									'Bcc' => trim($bcc),
									'To' => trim($rowTo[0]->EmailAddress),
									'Subject' => trim($row->Subject),
									'MessageBody' => trim($body),
									);
									
									$res = $this->db->insert('tblemaillog',$email_log);
									$log_data = array(
										'UserId' => trim($result),
										'Module' => 'Client-Registration',
										'Activity' =>'Add'		
									);
									$log = $this->db->insert('tblactivitylog',$log_data);
								}else
								{
									//echo 'fail';
								}
							}
						} 
						
					}
					}
					echo json_encode('success');
				}
				else
				{
					return $this->output
				->set_status_header(404)
				->set_output(json_encode(array(
						'text' => 'Registration Failed!!!',
						'type' => 'danger'
				)));
				}
		}
	}

	public function checkActivationLink()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);	

		if ($post_user) 
		{
			$result = $this->ClientRegister_model->checkActivationLink($post_user); 	
			if($result)
			{	
				echo json_encode('success');	
			} else {
				echo json_encode('fail');	
			} 
		}	
	}	

	public function activateCLinet($UserId = NULL)
	{
		if(!empty($UserId)) {
			$result = $this->ClientRegister_model->activateCLinet($UserId); 	
			if($result)
			{	
				echo json_encode('success');	
			} 		
		}		
	}
	
}