<?php

class Login_model extends CI_Model {

	public function check_login($data) {
		try{
			$this->db->select('u.UserId,u.RoleId,u.FirstName,u.LastName,u.EmailAddress');
			$this->db->from('tbluser u');
			$this->db->where('u.EmailAddress',trim($data['EmailAddress']));
			$this->db->where('u.Password',md5(trim($data['Password'])));
			$this->db->where('u.IsActive',1);
			$this->db->limit(1);
			$query = $this->db->get();
			$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
			$res=$query->result();
			if ($query->num_rows() > 0) {
				return $query->result();			
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
