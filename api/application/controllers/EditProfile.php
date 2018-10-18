<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use \Firebase\JWT\JWT;

class EditProfile extends CI_Controller 
{	
	public function __construct()
	{
		parent::__construct();
		include APPPATH . 'vendor/firebase/php-jwt/src/JWT.php';
		$this->load->model('EditProfile_model');
	}

	public function getStateList($country_id = NULL) {
		
		if(!empty($country_id)) {			
			$result = [];
			$result = $this->EditProfile_model->getStateList($country_id);			
			echo json_encode($result);				
		}			
	}
	
	public function editprofile()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);					
		if ($post_user) 
		{			
			$result = $this->EditProfile_model->edit_profile($post_user);
			if($result){
				$token = array(
					"UserId" => $post_user['UserId'],
					"RoleId" => $post_user['RoleId'],
					"ParentId" => $post_user['ParentId'],
					"EmailAddress" => $post_user['EmailAddress'],
					"FirstName" => $post_user['FirstName'],
					"LastName" => $post_user['LastName']
				);

				$jwt = JWT::encode($token, "MyGeneratedKey","HS256");
				$output['token'] = $jwt;
				echo json_encode($output);
			}
			else
			{
				echo json_encode('email duplicate');
			}					
		}
	}

	public function updateEducationDetails()
	{
		$post_user = json_decode(trim(file_get_contents('php://input')), true);					
		if ($post_user) 
		{			
			$result = $this->EditProfile_model->updateEducationDetails($post_user);
			if($result){
				echo json_encode('success');
			}				
		}
	}

	public function getProfileById($user_id=null)
	{			
		if(!empty($user_id))
		{
			$data=[];
			$this->load->model('Register_model');
			$data['user']=$this->EditProfile_model->get_userdata($user_id);
			$data['country']=$this->EditProfile_model->getlist_country(); 
			$data['educationLevel']=$this->Register_model->getlist_EducationLevel();
			if($data['user'] && $data['user']->CompanyId > 0){
				$data['company']=$this->EditProfile_model->get_companydata($data['user']->CompanyId);
			}
			if($data['user'] && $data['user']->CountryId > 0){
				$data['state']=$this->EditProfile_model->getStateList($data['user']->CountryId);
			}			
			echo json_encode($data);
		}
	}

	public function updateCompany()
	{
		$post_company = json_decode(trim(file_get_contents('php://input')), true);
		if ($post_company) 
		{			
			$result = $this->EditProfile_model->updateCompany($post_company);
			if($result){
				echo json_encode('success');
			}
			else
			{
				echo json_encode('error');
			}					
		}
	}

	public function changePassword()
	{								
		$post_pass = json_decode(trim(file_get_contents('php://input')), true);		
		if ($post_pass)
		{					
			$result = $this->EditProfile_model->change_password($post_pass);
			if($result){
				echo json_encode('success');
			}
			else
			{
				echo json_encode('wrong current password');
			}									
		}		
	}

}
