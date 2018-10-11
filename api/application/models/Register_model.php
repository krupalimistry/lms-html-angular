<?php

class Register_model extends CI_Model
{
	
	public function admin_Register($post_user)
	{	
		try{
			if($post_user)
			{	
				if(isset($post_user['PhoneNumberl']) && !empty($post_user['PhoneNumberl'])){
					$phone1 = $post_user['PhoneNumberl'];
				}	else {
					$phone1 = '';
				}
				if(isset($post_user['Address2']) && !empty($post_user['Address2'])){
					$Address2 = $post_user['Address2'];
				}	else {
					$Address2 = '';
				}

				$user_data=array(
					"RoleId"=>$RoleId,
					"CompanyId"=>$post_user['CompanyId'],
					"FirstName"=>$post_user['FirstName'],
					"LastName"=>$post_user['LastName'],
					"Title"=>$post_user['Title'],
					"EmailAddress"=>$post_user['EmailAddress'],
					"Password"=>md5($post_user['Password']),
					"Address1"=>$post_user['Address1'],
					"Address2"=>$Address2,
					"CountryId"=>$post_user['CountryId'],
					"StateId"=>$post_user['StateId'],
					"City"=>$post_user['City'],
					"ZipCode"=>$post_user['ZipCode'],
					"PhoneNumber"=>$post_user['PhoneNumber'],
					"PhoneNumberl"=>$phone1,
					"CreatedBy" =>1,
					"UpdatedBy" =>1,
					'UpdatedOn' => date('y-m-d H:i:s'),
					'VCode' => '',
				);	
				$res=$this->db->insert('tbluser',$user_data);
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
				if($res)
				{
					return $this->db->insert_id();
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
	
}