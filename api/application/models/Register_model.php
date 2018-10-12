<?php

class Register_model extends CI_Model
{
	
	public function admin_Register($post_user)
	{	
		try{
			if($post_user)
			{	
				$this->db->select('EmailAddress');
				$this->db->from('tbluser');
				$this->db->where('EmailAddress',trim($post_user['EmailAddress']));
				$this->db->limit(1);
				$query = $this->db->get();
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
				if($query->num_rows() > 0){
					return false;
				}

				$company_data=array(
					"CompanyName"=>$post_user['CompanyName'],
					"Industry"=>$post_user['Industry'],
					"Website"=>$post_user['Website'],
				);	
				$res=$this->db->insert('tblcompany',$company_data);
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
				if($res)
				{
					$user_data=array(
						"RoleId"=>2,
						"CompanyId"=>$this->db->insert_id(),
						"FirstName"=>$post_user['FirstName'],
						"LastName"=>$post_user['LastName'],
						"PhoneNumber"=>$post_user['PhoneNumber'],
						"EmailAddress"=>$post_user['EmailAddress'],
						"Password"=>md5($post_user['Password']),
						'Status'=>0,
						"CreatedBy" =>1,
						"UpdatedBy" =>1,
						'UpdatedOn' => date('y-m-d H:i:s'),
					);	
					$res1=$this->db->insert('tbluser',$user_data);
					$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
					if($res1)
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

	public function instructor_Register($post_user)
	{	
		try{
			if($post_user)
			{	
				$this->db->select('EmailAddress');
				$this->db->from('tbluser');
				$this->db->where('EmailAddress',trim($post_user['EmailAddress']));
				$this->db->limit(1);
				$query = $this->db->get();
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
				if($query->num_rows() > 0){
					return false;
				}

				$user_data=array(
					"RoleId"=>3,
					"FirstName"=>$post_user['FirstName'],
					"LastName"=>$post_user['LastName'],
					"PhoneNumber"=>$post_user['PhoneNumber'],
					"EmailAddress"=>$post_user['EmailAddress'],
					"Password"=>md5($post_user['Password']),
					"EducationLevelId"=>$post_user['EducationLevelId'],
					"Field"=>$post_user['Field'],
					//"Certificate"=>$post_user['Certificate'],
					'Status'=>0,
					"CreatedBy" =>1,
					"UpdatedBy" =>1,
					'UpdatedOn' => date('y-m-d H:i:s'),
				);	
				$res1=$this->db->insert('tbluser',$user_data);
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
				if($res1)
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

	public function learner_Register($post_user)
	{	
		try{
			if($post_user)
			{	
				$this->db->select('EmailAddress');
				$this->db->from('tbluser');
				$this->db->where('EmailAddress',trim($post_user['EmailAddress']));
				$this->db->limit(1);
				$query = $this->db->get();
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
				if($query->num_rows() > 0){
					return false;
				}

				$user_data=array(
					"RoleId"=>4,
					"FirstName"=>$post_user['FirstName'],
					"LastName"=>$post_user['LastName'],
					"PhoneNumber"=>$post_user['PhoneNumber'],
					"EmailAddress"=>$post_user['EmailAddress'],
					"Password"=>md5($post_user['Password']),
					"EducationLevelId"=>$post_user['EducationLevelId'],
					"Skills"=>$post_user['Skills'],
					'Status'=>0,
					"CreatedBy" =>1,
					"UpdatedBy" =>1,
					'UpdatedOn' => date('y-m-d H:i:s'),
				);	
				$res1=$this->db->insert('tbluser',$user_data);
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
				if($res1)
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

	public function getlist_EducationLevel() {
		try{
			$this->db->select('el.EducationLevelId,el.Education');
			$this->db->where('el.IsActive',1);
			$result = $this->db->get('tblmsteducationlevel as el');
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
	
}