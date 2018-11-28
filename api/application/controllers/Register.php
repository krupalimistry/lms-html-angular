<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use \Firebase\JWT\JWT;

class Register extends CI_Controller 
{	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Register_model');
		include APPPATH . 'vendor/firebase/php-jwt/src/JWT.php';
	}
	
	public function admin_Register()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);
					
		if ($post_user) 
		{			
			$result = $this->Register_model->admin_Register($post_user);
			if($result)
			{
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
				
				$config['protocol']='smtp';
				$config['smtp_host']='ssl://smtp.googlemail.com';
				$config['smtp_port']='465';
				$config['smtp_user']='myopeneyes3937@gmail.com';
				$config['smtp_pass']='W3lc0m3@2018';	

				/* $config['protocol']='mail';
				$config['smtp_host']='vps40446.inmotionhosting.com';
				$config['smtp_port']='587';
				$config['smtp_user']=$smtpEmail;
				$config['smtp_pass']=$smtpPassword; */
				
				$config['charset']='utf-8';
				$config['newline']="\r\n";
				$config['mailtype'] = 'html';							
				$this->email->initialize($config);

				$Subject = 'LMS - Thank you for registration';
				$body = '<table border="0" cellpadding="0" cellspacing="0" style="border:1px solid #333333; color:#000000; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto; width:600px">
				<tbody>
					<tr>
						<td style="background: var(--theme-color); border-bottom:1px solid #333333; padding:10px 10px 5px 10px;width: 35%;margin:0 auto;"><img alt="Learning Management System" src="'.BASE_URL.'/assets/images/logo-email.png" width="200px" /></td>
					</tr>
					<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center">
						<p style="color:#000; font-size: 25px; line-height: 25px; font-weight: bold;padding: 0; margin: 0 0 10px;"><strong>Thank You for Registration </strong><strong></strong></p>
			
						<p style="color:#000; font-size: 18px; line-height: 18px; font-weight: bold; padding: 0; margin: 0 0 10px;">We&rsquo;re so happy you&rsquo;ve joined us.</p>
			
						<p style="color:#000; font-size: 14px; line-height:20px; padding: 0; margin: 0 0;">Use the button below to login your account and get started:</p>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:0; text-align:center; vertical-align:middle">
						<table border="0" cellpadding="0" cellspacing="0" style="border:0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto">
							<tbody>
								<tr>
									<td style="background-color:var(--theme-color); background:var(--theme-color); border-radius:4px; border-width:0; clear:both; color:#ffffff; font-size:14px; line-height:13px; opacity:1; padding:10px; text-align:center; text-decoration:none; width:130px"><a href="{login_link}" style="color:#fff; text-decoration:none;">Get Started</a></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center; vertical-align:middle">			
						<p style="color:#777; font-size: 14px; line-height:20px; padding: 0; margin: 0 0 25px;">If you have any questions, you can reply to this email and it will go right to them. Alternatively, feel free to contact our customer success team anytime.</p>
			
						<p style="color:#777; font-size: 12px; line-height:20px; padding: 0; margin: 0 0 10px; text-align: left;">If you&rsquo;re having trouble with the button above, copy and paste the URL below into your web browser. <a href="{login_link}" style="cursor:pointer;">click here</a></p>
						</td>
					</tr>
					<tr>
						<td style="background-color:var(--option-color); background:var(--option-color); border-top:1px solid #cccccc; color:#ffffff; font-size:13px; padding:7px; text-align:center">Copyright &copy; 2018 Learning Management System</td>
					</tr>
				</tbody>
			</table>';

			$body = str_replace("{login_link}",''.BASE_URL.'/login',$body);

				$this->email->from($smtpEmail, 'LMS');
				$this->email->to($post_user['EmailAddress']);		
				$this->email->subject($Subject);
				$this->email->message($body);
				if($this->email->send())
				{
					echo json_encode('success');
				}	
			} else {
				echo json_encode('email dublicate');	
			}	
		}
	}

	public function instructor_Register()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);
					
		if ($post_user) 
		{			
			$result = $this->Register_model->instructor_Register($post_user);
			if($result)
			{
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

				$Subject = 'LMS - Thank you for registration';
				$body = '<table border="0" cellpadding="0" cellspacing="0" style="border:1px solid #333333; color:#000000; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto; width:600px">
				<tbody>
					<tr>
						<td style="background: var(--theme-color); border-bottom:1px solid #333333; padding:10px 10px 5px 10px;width: 35%;margin:0 auto;"><img alt="Learning Management System" src="'.BASE_URL.'/assets/images/logo-email.png" width="200px" /></td>
					</tr>
					<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center">
						<p style="color:#000; font-size: 25px; line-height: 25px; font-weight: bold;padding: 0; margin: 0 0 10px;"><strong>Thank You for Registration </strong><strong></strong></p>
			
						<p style="color:#000; font-size: 18px; line-height: 18px; font-weight: bold; padding: 0; margin: 0 0 10px;">We&rsquo;re so happy you&rsquo;ve joined us.</p>
			
						<p style="color:#000; font-size: 14px; line-height:20px; padding: 0; margin: 0 0;">Use the button below to login your account and get started:</p>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:0; text-align:center; vertical-align:middle">
						<table border="0" cellpadding="0" cellspacing="0" style="border:0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto">
							<tbody>
								<tr>
									<td style="background-color:var(--theme-color); background:var(--theme-color); border-radius:4px; border-width:0; clear:both; color:#ffffff; font-size:14px; line-height:13px; opacity:1; padding:10px; text-align:center; text-decoration:none; width:130px"><a href="{login_link}" style="color:#fff; text-decoration:none;">Get Started</a></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center; vertical-align:middle">			
						<p style="color:#777; font-size: 14px; line-height:20px; padding: 0; margin: 0 0 25px;">If you have any questions, you can reply to this email and it will go right to them. Alternatively, feel free to contact our customer success team anytime.</p>
			
						<p style="color:#777; font-size: 12px; line-height:20px; padding: 0; margin: 0 0 10px; text-align: left;">If you&rsquo;re having trouble with the button above, copy and paste the URL below into your web browser. <a href="{login_link}" style="cursor:pointer;">click here</a></p>
						</td>
					</tr>
					<tr>
						<td style="background-color:var(--option-color); background:var(--option-color); border-top:1px solid #cccccc; color:#ffffff; font-size:13px; padding:7px; text-align:center">Copyright &copy; 2018 Learning Management System</td>
					</tr>
				</tbody>
			</table>';

			$body = str_replace("{login_link}",''.BASE_URL.'/login',$body);

				$this->email->from($smtpEmail, 'LMS');
				$this->email->to($post_user['EmailAddress']);		
				$this->email->subject($Subject);
				$this->email->message($body);
				if($this->email->send())
				{
					echo json_encode('success');
				}	
			} else {
				echo json_encode('email dublicate');	
			}	
		}
	}

	public function learner_Register()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);
					
		if ($post_user) 
		{			
			$result = $this->Register_model->learner_Register($post_user);
			if($result)
			{
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

				$Subject = 'LMS - Thank you for registration';
				$body = '<table border="0" cellpadding="0" cellspacing="0" style="border:1px solid #333333; color:#000000; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto; width:600px">
				<tbody>
					<tr>
						<td style="background: var(--theme-color); border-bottom:1px solid #333333; padding:10px 10px 5px 10px;width: 35%;margin:0 auto;"><img alt="Learning Management System" src="'.BASE_URL.'/assets/images/logo-email.png" width="200px" /></td>
					</tr>
					<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center">
						<p style="color:#000; font-size: 25px; line-height: 25px; font-weight: bold;padding: 0; margin: 0 0 10px;"><strong>Thank You for Registration </strong><strong></strong></p>
			
						<p style="color:#000; font-size: 18px; line-height: 18px; font-weight: bold; padding: 0; margin: 0 0 10px;">We&rsquo;re so happy you&rsquo;ve joined us.</p>
			
						<p style="color:#000; font-size: 14px; line-height:20px; padding: 0; margin: 0 0;">Use the button below to login your account and get started:</p>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:0; text-align:center; vertical-align:middle">
						<table border="0" cellpadding="0" cellspacing="0" style="border:0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto">
							<tbody>
								<tr>
									<td style="background-color:var(--theme-color); background:var(--theme-color); border-radius:4px; border-width:0; clear:both; color:#ffffff; font-size:14px; line-height:13px; opacity:1; padding:10px; text-align:center; text-decoration:none; width:130px"><a href="{login_link}" style="color:#fff; text-decoration:none;">Get Started</a></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center; vertical-align:middle">			
						<p style="color:#777; font-size: 14px; line-height:20px; padding: 0; margin: 0 0 25px;">If you have any questions, you can reply to this email and it will go right to them. Alternatively, feel free to contact our customer success team anytime.</p>
			
						<p style="color:#777; font-size: 12px; line-height:20px; padding: 0; margin: 0 0 10px; text-align: left;">If you&rsquo;re having trouble with the button above, copy and paste the URL below into your web browser. <a href="{login_link}" style="cursor:pointer;">click here</a></p>
						</td>
					</tr>
					<tr>
						<td style="background-color:var(--option-color); background:var(--option-color); border-top:1px solid #cccccc; color:#ffffff; font-size:13px; padding:7px; text-align:center">Copyright &copy; 2018 Learning Management System</td>
					</tr>
				</tbody>
			</table>';

			$body = str_replace("{login_link}",''.BASE_URL.'/login',$body);

				$this->email->from($smtpEmail, 'LMS');
				$this->email->to($post_user['EmailAddress']);		
				$this->email->subject($Subject);
				$this->email->message($body);
				if($this->email->send())
				{
					echo json_encode('success');
				}	
			} else {
				echo json_encode('email dublicate');	
			}	
		}
	}

	public function getlist_EducationLevel() {
		
		$data=$this->Register_model->getlist_EducationLevel();		
		echo json_encode($data);
				
	}

	public function uploadFile()
	{
		if($_FILES){
			if(isset($_FILES['Certificate']) && !empty($_FILES['Certificate'])){
				move_uploaded_file($_FILES["Certificate"]["tmp_name"], "../src/assets/certificate/".$_FILES["Certificate"]["name"]);
			}
			echo json_encode('success');
		}
	}

}
