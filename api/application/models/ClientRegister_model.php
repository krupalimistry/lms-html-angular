<?php

class ClientRegister_model extends CI_Model
{
	public function getlist_country() {
		try{
		$this->db->select('CountryId,CountryName');
		$this->db->where('IsActive="1"');
		$this->db->order_by('CountryName','asc');
		$result = $this->db->get('tblmstcountry');
		$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
		$res = array();
		if($result->result()) {
			$res = $result->result();
		}
		return $res;
	}
	catch(Exception $e){
		trigger_error($e->getMessage(), E_USER_ERROR);
		return false;
	}	
	}

	public function get_userdata($id = NULL){
		try{
		if(!empty($id)) {
			$res = array();
			$this->db->select('UserId,RoleId,EmailAddress,FirstName,LastName,PhoneNumber');
			$this->db->where('StatusId="1"');
			$this->db->where('InvitationCode',$id);
			$result = $this->db->get('tbluser');
			$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
			if ($result->num_rows() == 1) {
				//$res = array();
				foreach($result->result() as $row) {
					$res['user'] = $row;
					$this->db->select('CompanyId,ParentId,UserId,CompanyName,CompanyEmail,Website,WorkspaceURL');
					$this->db->where('UserId',$row->UserId);
					$result1 = $this->db->get('tblcompany');
					$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
					if ($result1->num_rows() == 1) {
						foreach($result1->result() as $row1) {
							$res['company'] = $row1;
						}
					}
				}
			}
				return $res;
			} else {
				return false;
			}
		}
		catch(Exception $e){
			trigger_error($e->getMessage(), E_USER_ERROR);
			return false;
		}	

	}

	//List state
	public function getlist_state()
	{
		try{
		$this->db->select('StateId,StateName');
		$this->db->order_by('StateName','asc');
		$result=$this->db->get('tblmststate');
		$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
		$res=array();
		if($result->result())
		{
			$res=$result->result();
		}
		return $res;
	}
	catch(Exception $e){
		trigger_error($e->getMessage(), E_USER_ERROR);
		return false;
	}
	}
	public function getStateList($country_id = NULL) {
		try{
		if($country_id) {
			
			$this->db->select('StateId,StateName');
			$this->db->order_by('StateName','asc');
			$this->db->where('IsActive="1"');
			$this->db->where('CountryId',$country_id);

			$result = $this->db->get('tblmststate');
			$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
			$res = array();
			if($result->result()) {
				$res = $result->result();
			}
			return $res;
			
		} else {
			return false;
		}
	}
	catch(Exception $e){
		trigger_error($e->getMessage(), E_USER_ERROR);
		return false;
	}
	}


	public function checkUsernameUrl($post_user) {
		try{
		if($post_user) {
			$this->db->select('UserName');
			$this->db->from('tbluser');
			$this->db->where('UserName',trim($post_user['UserName']));
			$this->db->limit(1);
			$query = $this->db->get();
			$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}

			$this->db->select('WorkspaceURL');
			$this->db->from('tblcompany');
			$this->db->where('WorkspaceURL',trim($post_user['WorkspaceURL']));
			$this->db->limit(1);
			$query1 = $this->db->get();

			$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}

			if ($query->num_rows() > 0 && $query1->num_rows() == 0) {
				return 'username dublicate';
			} 
			elseif($query1->num_rows() > 0 && $query->num_rows() == 0) 
			{
				return 'url dublicate';
			} elseif($query1->num_rows() > 0 && $query->num_rows() > 0) 
			{
				return 'both dublicate';
			} else 
			{
				return 'true';
			}	
		} else {
			return false;
		}
	}
	catch(Exception $e){
		trigger_error($e->getMessage(), E_USER_ERROR);
		return false;
	}
	}


	public function updateClient($post_user)
	{	
		try{
		if($post_user)
		{	
			$client_data=$post_user['RegisterEntity'];
			$company_data=$post_user['CompanyEntity'];

			if(isset($client_data['Address1']) && !empty($client_data['Address1'])){
				$Address1 = $client_data['Address1'];
			}	else {
				$Address1 = '';
			}
			if(isset($client_data['StateId']) && !empty($client_data['StateId'])){
				$StateId = $client_data['StateId'];
			}	else {
				$StateId = '';
			}
			if(isset($client_data['City']) && !empty($client_data['City'])){
				$City = $client_data['City'];
			}	else {
				$City = '';
			}
			if(isset($client_data['PhoneNumber']) && !empty($client_data['PhoneNumber'])){
				$PhoneNumber = $client_data['PhoneNumber'];
			}	else {
				$PhoneNumber = '';
			}
			$personal_data=array(
					"FirstName"=>$client_data['FirstName'],
					"LastName"=>$client_data['LastName'],
					"UserName"=>$client_data['UserName'],
					"Password"=>md5($client_data['Password']),
					"Address1"=>$Address1,
					//"Address2"=>$Address2,
					"StateId"=>$StateId,
					"City"=>$City,
					//"ZipCode"=>$client_data['ZipCode'],
					"PhoneNumber"=>$PhoneNumber,
					"StatusId"=>0,
					"InvitationCode"=>"",
					"CreatedBy" =>$client_data['UserId'],
					"UpdatedBy" =>$client_data['UserId'],
					'UpdatedOn' => date('y-m-d H:i:s'),
				);	
				
				$this->db->where('UserId',$client_data['UserId']);
				$res = $this->db->update('tbluser',$personal_data);
				$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
					if($res)
					{
						// if(isset($client_data['fileToUpload']) && !empty($client_data['fileToUpload'])){
						// 	$fileToUpload = $client_data['fileToUpload'];
						// }	else {
						// 	$fileToUpload = '';
						// }
						// if(isset($client_data['Faviconicon']) && !empty($client_data['Faviconicon'])){
						// 	$Faviconicon = $client_data['Faviconicon'];
						// }	else {
						// 	$Faviconicon = '';
						// }
						if(isset($company_data['ThemeCode']) && !empty($company_data['ThemeCode'])){
							$ThemeCode = $company_data['ThemeCode'];
						}	else {
							$ThemeCode = '';
						}
						if($company_data['fileToUpload']){
							if($company_data['Faviconicon']){
								$company_details=array(
									"UserId"=>$client_data['UserId'],
									"CompanyName"=>$company_data['CompanyName'],
									"WorkspaceURL"=>$company_data['WorkspaceURL'],
									//"CompanyEmail"=>$company_data['CEmailAddress'],
									//"Address"=>$company_data['Address'],
									//"Website"=>$company_data['URL'],
									"CompanyLogo"=>$company_data['fileToUpload'],
									"Favicon"=>$company_data['Faviconicon'],
									//"PhoneNo"=>$company_data['ContactNumber'],
									"ThemeCode"=>$ThemeCode,
									"CreatedBy" =>$client_data['UserId'],
									"UpdatedBy" =>$client_data['UserId'],
									'UpdatedOn' => date('y-m-d H:i:s'),
								);	
							} else {
								$company_details=array(
									"UserId"=>$client_data['UserId'],
									"CompanyName"=>$company_data['CompanyName'],
									"WorkspaceURL"=>$company_data['WorkspaceURL'],
									//"CompanyEmail"=>$company_data['CEmailAddress'],
									//"Address"=>$company_data['Address'],
									//"Website"=>$company_data['URL'],
									"CompanyLogo"=>$company_data['fileToUpload'],
									//"PhoneNo"=>$company_data['ContactNumber'],
									"ThemeCode"=>$ThemeCode,
									"CreatedBy" =>$client_data['UserId'],
									"UpdatedBy" =>$client_data['UserId'],
									'UpdatedOn' => date('y-m-d H:i:s'),
								);	
							}
						} else if($company_data['Faviconicon']){
							$company_details=array(
								"UserId"=>$client_data['UserId'],
								"CompanyName"=>$company_data['CompanyName'],
								"WorkspaceURL"=>$company_data['WorkspaceURL'],
								//"CompanyEmail"=>$company_data['CEmailAddress'],
								//"Address"=>$company_data['Address'],
								//"Website"=>$company_data['URL'],
								"Favicon"=>$company_data['Faviconicon'],
								//"PhoneNo"=>$company_data['ContactNumber'],
								"ThemeCode"=>$ThemeCode,
								"CreatedBy" =>$client_data['UserId'],
								"UpdatedBy" =>$client_data['UserId'],
								'UpdatedOn' => date('y-m-d H:i:s'),
							);	
						} else {
							$company_details=array(
								"UserId"=>$client_data['UserId'],
								"CompanyName"=>$company_data['CompanyName'],
								"WorkspaceURL"=>$company_data['WorkspaceURL'],
								//"CompanyEmail"=>$company_data['CEmailAddress'],
								//"Address"=>$company_data['Address'],
								//"Website"=>$company_data['URL'],
								//"PhoneNo"=>$company_data['ContactNumber'],
								"ThemeCode"=>$ThemeCode,
								"CreatedBy" =>$client_data['UserId'],
								"UpdatedBy" =>$client_data['UserId'],
								'UpdatedOn' => date('y-m-d H:i:s'),
							);	
						}
						$this->db->where('CompanyId',$company_data['CompanyId']);
						$res1 = $this->db->update('tblcompany',$company_details);
						$db_error = $this->db->error();
						if (!empty($db_error) && !empty($db_error['code'])) { 
							throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
							return false; // unreachable return statement !!!
						}
						if($res1)
						{
							return $client_data;
						}
						else{
							return false;
						}
						
					}
					else
					{
						return false;
					}
				
				}
				else
				{
						return false;
				}
			}
			catch(Exception $e){
				trigger_error($e->getMessage(), E_USER_ERROR);
				return false;
			}
		}

	public function addClient($post_user)
	{	
		try{
		if($post_user)
		{	
			$client_data=$post_user['RegisterEntity'];
			$company_data=$post_user['CompanyEntity'];

			if(isset($client_data['Address1']) && !empty($client_data['Address1'])){
				$Address1 = $client_data['Address1'];
			}	else {
				$Address1 = '';
			}
			if(isset($client_data['StateId']) && !empty($client_data['StateId'])){
				$StateId = $client_data['StateId'];
			}	else {
				$StateId = '';
			}
			if(isset($client_data['City']) && !empty($client_data['City'])){
				$City = $client_data['City'];
			}	else {
				$City = '';
			}
			if(isset($client_data['PhoneNumber']) && !empty($client_data['PhoneNumber'])){
				$PhoneNumber = $client_data['PhoneNumber'];
			}	else {
				$PhoneNumber = '';
			}
			$personal_data=array(
					"FirstName"=>trim($client_data['FirstName']),
					"LastName"=>trim($client_data['LastName']),
					"UserName"=>trim($client_data['UserName']),
					"Password"=>md5($client_data['Password']),
					'RoleId' =>  3,	
					'EmailAddress' =>  trim($client_data['EmailAddress']),
					"Address1"=>$Address1,
					//"Address2"=>$Address2,
					"StateId"=>$StateId,
					"City"=>$City,
					//"ZipCode"=>$client_data['ZipCode'],
					"PhoneNumber"=>$PhoneNumber,
					"StatusId"=>0,
					"InvitationCode"=>$post_user['InvitationCode'],
					"Corporate"=>$client_data['Corporate'],
					"IsActive"=>0,
					//"CreatedBy" =>$client_data['UserId'],
					//"UpdatedBy" =>$client_data['UserId'],
					'UpdatedOn' => date('y-m-d H:i:s'),
				);	
				
				$res = $this->db->insert('tbluser',$personal_data);
				$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
					if($res)
					{
						$userid = $this->db->insert_id();
						if(isset($company_data['ThemeCode']) && !empty($company_data['ThemeCode'])){
							$ThemeCode = $company_data['ThemeCode'];
						}	else {
							$ThemeCode = '';
						}
						if($company_data['fileToUpload']){
							if($company_data['Faviconicon']){
								$company_details=array(
									"UserId"=>$userid,
									"CompanyName"=>$company_data['CompanyName'],
									"WorkspaceURL"=>$company_data['WorkspaceURL'],
									//"CompanyEmail"=>$company_data['CEmailAddress'],
									//"Address"=>$company_data['Address'],
									//"Website"=>$company_data['URL'],
									"CompanyLogo"=>$company_data['fileToUpload'],
									"Favicon"=>$company_data['Faviconicon'],
									//"PhoneNo"=>$company_data['ContactNumber'],
									"ThemeCode"=>$ThemeCode,
									"CreatedBy" =>$userid,
									"UpdatedBy" =>$userid,
									'UpdatedOn' => date('y-m-d H:i:s'),
								);	
							} else {
								$company_details=array(
									"UserId"=>$userid,
									"CompanyName"=>$company_data['CompanyName'],
									"WorkspaceURL"=>$company_data['WorkspaceURL'],
									//"CompanyEmail"=>$company_data['CEmailAddress'],
									//"Address"=>$company_data['Address'],
									//"Website"=>$company_data['URL'],
									"CompanyLogo"=>$company_data['fileToUpload'],
									//"PhoneNo"=>$company_data['ContactNumber'],
									"ThemeCode"=>$ThemeCode,
									"CreatedBy" =>$userid,
									"UpdatedBy" =>$userid,
									'UpdatedOn' => date('y-m-d H:i:s'),
								);	
							}
						} else if($company_data['Faviconicon']){
							$company_details=array(
								"UserId"=>$userid,
								"CompanyName"=>$company_data['CompanyName'],
								"WorkspaceURL"=>$company_data['WorkspaceURL'],
								//"CompanyEmail"=>$company_data['CEmailAddress'],
								//"Address"=>$company_data['Address'],
								//"Website"=>$company_data['URL'],
								"Favicon"=>$company_data['Faviconicon'],
								//"PhoneNo"=>$company_data['ContactNumber'],
								"ThemeCode"=>$ThemeCode,
								"CreatedBy" =>$userid,
								"UpdatedBy" =>$userid,
								'UpdatedOn' => date('y-m-d H:i:s'),
							);	
						} else {
							$company_details=array(
								"UserId"=>$userid,
								"CompanyName"=>$company_data['CompanyName'],
								"WorkspaceURL"=>$company_data['WorkspaceURL'],
								//"CompanyEmail"=>$company_data['CEmailAddress'],
								//"Address"=>$company_data['Address'],
								//"Website"=>$company_data['URL'],
								//"PhoneNo"=>$company_data['ContactNumber'],
								"ThemeCode"=>$ThemeCode,
								"CreatedBy" =>$userid,
								"UpdatedBy" =>$userid,
								'UpdatedOn' => date('y-m-d H:i:s'),
							);	
						}
						$res1 = $this->db->insert('tblcompany',$company_details);
						$db_error = $this->db->error();
						if (!empty($db_error) && !empty($db_error['code'])) { 
							throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
							return false; // unreachable return statement !!!
						}
						if($res1)
						{
							return $userid;
						}
						else{
							return false;
						}
						
					}
					else
					{
						return false;
					}
				
				}
				else
				{
						return false;
				}
			}
			catch(Exception $e){
				trigger_error($e->getMessage(), E_USER_ERROR);
				return false;
			}
		}

		public function checkActivationLink($post_user) {
			try{
				if($post_user) {
					$this->db->select('UserId');
					$this->db->from('tbluser');
					$this->db->where('IsActive',0);
					$this->db->where('RoleId',3);
					$this->db->where('InvitationCode',trim($post_user['InvitationCode']));
					$this->db->where('UserId',trim($post_user['UserId']));
					$this->db->limit(1);
					$query = $this->db->get();
					$db_error = $this->db->error();
						if (!empty($db_error) && !empty($db_error['code'])) { 
							throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
							return false; // unreachable return statement !!!
						}
		
					if ($query->num_rows() == 1) {
						return true;
					} else 
					{
						return false;
					}	
				} else {
					return false;
				}
			}
			catch(Exception $e){
				trigger_error($e->getMessage(), E_USER_ERROR);
				return false;
			}
		}

		public function activateCLinet($UserId = NULL) {
			try{
				if($UserId) {
					
					$post_user=array(
						"IsActive"=>1,
						"InvitationCode"=>"",
						'UpdatedOn' => date('y-m-d H:i:s'),
					);
					$this->db->where('UserId',$UserId);
					$result = $this->db->update('tbluser',$post_user);

					$db_error = $this->db->error();
							if (!empty($db_error) && !empty($db_error['code'])) { 
								throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
								return false; // unreachable return statement !!!
							}
					if($result) {
						return true;
					} else {
						return false;
					}
					
					
				} else {
					return false;
				}
			}
			catch(Exception $e){
				trigger_error($e->getMessage(), E_USER_ERROR);
				return false;
			}
		}
	
}