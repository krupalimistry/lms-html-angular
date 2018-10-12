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
				$config['protocol']='smtp';
				$config['smtp_host']='ssl://smtp.googlemail.com';
				$config['smtp_port']='465';
				$config['smtp_user']='myopeneyes3937@gmail.com';
				$config['smtp_pass']='W3lc0m3@2018';	
				
				$config['charset']='utf-8';
				$config['newline']="\r\n";
				$config['mailtype'] = 'html';							
				$this->email->initialize($config);

				$Subject = 'registartion';
				$body = 'hello vidhi';

				$this->email->from('myopeneyes3937@gmail.com', 'LMS');
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
				$config['protocol']='smtp';
				$config['smtp_host']='ssl://smtp.googlemail.com';
				$config['smtp_port']='465';
				$config['smtp_user']='myopeneyes3937@gmail.com';
				$config['smtp_pass']='W3lc0m3@2018';	
				
				$config['charset']='utf-8';
				$config['newline']="\r\n";
				$config['mailtype'] = 'html';							
				$this->email->initialize($config);

				$Subject = 'registartion';
				$body = 'hello vidhi';

				$this->email->from('myopeneyes3937@gmail.com', 'LMS');
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
				$config['protocol']='smtp';
				$config['smtp_host']='ssl://smtp.googlemail.com';
				$config['smtp_port']='465';
				$config['smtp_user']='myopeneyes3937@gmail.com';
				$config['smtp_pass']='W3lc0m3@2018';	
				
				$config['charset']='utf-8';
				$config['newline']="\r\n";
				$config['mailtype'] = 'html';							
				$this->email->initialize($config);

				$Subject = 'registartion';
				$body = 'hello vidhi';

				$this->email->from('myopeneyes3937@gmail.com', 'LMS');
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
