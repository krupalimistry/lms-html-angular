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
				$token = array(
					"UserId" => $result,
					"RoleId" => 2,
					"EmailAddress" => $post_user['EmailAddress'],
					"FirstName" => $post_user['FirstName'],
					"LastName" => $post_user['LastName']
				);
				$jwt = JWT::encode($token, "MyGeneratedKey","HS256");
				$output['token'] = $jwt;
				echo json_encode($output);	
			} else {
				echo json_encode('no');	
			}	
		}
	}

}
