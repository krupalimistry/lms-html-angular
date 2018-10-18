<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Course extends CI_Controller {

	public function __construct() {
	
		parent::__construct();
		$this->load->model('Course_model');
		
	}

	public function PurchaseCourse()
	{
		$PurchaseEntity = json_decode(trim(file_get_contents('php://input')), true);
					
		if ($PurchaseEntity) 
		{			
			$result = $this->Course_model->PurchaseCourse($PurchaseEntity);
			if($result){
				echo json_encode('success');	
			}
		}
	}

	
	
}