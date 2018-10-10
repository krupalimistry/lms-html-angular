<?php

class EditProfile_model extends CI_Model
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
		
	public function get_userdata($user_id=Null)
	{
		try{
	    if($user_id)
	    {		  
		    $this->db->select('us.UserId,us.ParentId,us.RoleId,us.FirstName,us.LastName,us.UserName,us.EmailAddress,us.Address1,
			us.Address2,tc.CountryId,us.StateId,us.City,us.ZipCode,us.PhoneNumber,us.Corporate');
			
			$this->db->join('tblmststate tc', 'us.StateId = tc.StateId', 'left');
			$this->db->where('UserId',$user_id);
			$result = $this->db->get('tbluser us');
			$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
			$user_data= array();
			foreach($result->result() as $row)
			{
				$user_data=$row;				
			}
		 	return $user_data;		 
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

	public function get_companydata($user_id=Null)
	{
		try{
	    if($user_id)
	    {		  
		    $this->db->select('CompanyId,ParentId,UserId,CompanyName,CompanyLogo,Favicon,CompanyEmail,Website,WorkspaceURL,ThemeCode,PhoneNo,Address,IsActive');
			$this->db->where('UserId',$user_id);
			$result = $this->db->get('tblcompany');
			$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
			$company_data= array();
			foreach($result->result() as $row)
			{
				$company_data=$row;				
			}
		 	return $company_data;		 
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

	public function edit_profile($post_user) {
		try{
		if($post_user) 
		{

			if($post_user['RoleId']==4){
				$this->db->select('EmailAddress');
				$this->db->from('tbluser');
				$this->db->where('EmailAddress',trim($post_user['EmailAddress']));
				$this->db->where('ParentId',trim($post_user['ParentId']));
				$this->db->where('UserId!=',trim($post_user['UserId']));
				$this->db->limit(1);
				$query = $this->db->get();
				$db_error = $this->db->error();
					if (!empty($db_error) && !empty($db_error['code'])) { 
						throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
						return false; // unreachable return statement !!!
					}
				if ($query->num_rows() == 1) {
					return false;
				} 
			}
			if(isset($post_user['Address1']) && !empty($post_user['Address1'])){
				$Address1 = $post_user['Address1'];
			}	else {
				$Address1 = '';
			}
			if(isset($post_user['Address2']) && !empty($post_user['Address2'])){
				$Address2 = $post_user['Address2'];
			}	else {
				$Address2 = '';
			}
			if(isset($post_user['StateId']) && !empty($post_user['StateId'])){
				$StateId = $post_user['StateId'];
			}	else {
				$StateId = '';
			}
			if(isset($post_user['City']) && !empty($post_user['City'])){
				$City = $post_user['City'];
			}	else {
				$City = '';
			}
			if(isset($post_user['ZipCode']) && !empty($post_user['ZipCode'])){
				$ZipCode = $post_user['ZipCode'];
			}	else {
				$ZipCode = '';
			}
			if(isset($post_user['PhoneNumber']) && !empty($post_user['PhoneNumber'])){
				$PhoneNumber = $post_user['PhoneNumber'];
			}	else {
				$PhoneNumber = '';
			}
			$user_data = array(
				"FirstName"=>$post_user['FirstName'],
				"LastName"=>$post_user['LastName'],
				"EmailAddress"=>$post_user['EmailAddress'],
				"Address1"=>$Address1,
				"Address2"=>$Address2,
				"StateId"=>$StateId,
				"City"=>$City,
				"ZipCode"=>$ZipCode,
				"PhoneNumber"=>$PhoneNumber,
				'UpdatedOn' => date('y-m-d H:i:s')
			);			
			$this->db->where('UserId',$post_user['UserId']);
			$res = $this->db->update('tbluser',$user_data);
			$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
			if($res) 
			{
				return true;
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

	public function updateCompany($company_data)
	{
		try{
			if(isset($company_data['Website']) && !empty($company_data['Website'])){
				$Website = $company_data['Website'];
			}	else {
				$Website = '';
			}
			if(isset($company_data['ThemeCode']) && !empty($company_data['ThemeCode'])){
				$ThemeCode = $company_data['ThemeCode'];
			}	else {
				$ThemeCode = '';
			}
		if($company_data['fileToUpload']){
			if($company_data['Faviconicon']){
				$company_details=array(
					"CompanyName"=>$company_data['CompanyName'],
					//"CompanyEmail"=>$company_data['CompanyEmail'],
					//"Address"=>$company_data['Address'],
					"Website"=>$Website,
					"CompanyLogo"=>$company_data['fileToUpload'],
					"Favicon"=>$company_data['Faviconicon'],
					//"PhoneNo"=>$company_data['PhoneNo'],
					"ThemeCode"=>$company_data['ThemeCode'],
					"UpdatedBy" =>$company_data['UpdatedBy'],
					'UpdatedOn' => date('y-m-d H:i:s'),
				);
			} else {
				$company_details=array(
					"CompanyName"=>$company_data['CompanyName'],
					//"CompanyEmail"=>$company_data['CompanyEmail'],
					//"Address"=>$company_data['Address'],
					"Website"=>$company_data['Website'],
					"CompanyLogo"=>$company_data['fileToUpload'],
					//"PhoneNo"=>$company_data['PhoneNo'],
					"ThemeCode"=>$company_data['ThemeCode'],
					"UpdatedBy" =>$company_data['UpdatedBy'],
					'UpdatedOn' => date('y-m-d H:i:s'),
				);
			}
		} else if($company_data['Faviconicon']){
			$company_details=array(
				"CompanyName"=>$company_data['CompanyName'],
				//"CompanyEmail"=>$company_data['CompanyEmail'],
				//"Address"=>$company_data['Address'],
				"Website"=>$company_data['Website'],
				"Favicon"=>$company_data['Faviconicon'],
				//"PhoneNo"=>$company_data['PhoneNo'],
				"ThemeCode"=>$company_data['ThemeCode'],
				"UpdatedBy" =>$company_data['UpdatedBy'],
				'UpdatedOn' => date('y-m-d H:i:s'),
			);
		} else {
			$company_details=array(
				"CompanyName"=>$company_data['CompanyName'],
				//"CompanyEmail"=>$company_data['CompanyEmail'],
				//"Address"=>$company_data['Address'],
				"Website"=>$company_data['Website'],
				//"PhoneNo"=>$company_data['PhoneNo'],
				"ThemeCode"=>$company_data['ThemeCode'],
				"UpdatedBy" =>$company_data['UpdatedBy'],
				'UpdatedOn' => date('y-m-d H:i:s'),
			);
		}
		
		$this->db->where('CompanyId',$company_data['CompanyId']);	
		$res = $this->db->update('tblcompany',$company_details);
		$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
		if($res)
		{
			return true;
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