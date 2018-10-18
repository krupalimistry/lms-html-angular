<?php

class Course_model extends CI_Model {

	public function PurchaseCourse($PurchaseEntity)
	{	
		try{
			if($PurchaseEntity)
			{
				$purchase_data=array(
					"LernerId"=>$PurchaseEntity['LernerId'],
					"InstracterId"=>$PurchaseEntity['InstracterId'],
                    "CourseId"=>$PurchaseEntity['CourseId'],
                    "TotalAmount"=>$PurchaseEntity['TotalAmount'],
                    "PaidAmount"=>$PurchaseEntity['TotalAmount'],
                    "CreatedBy"=>$PurchaseEntity['LernerId'],
                    "UpdatedBy"=>$PurchaseEntity['LernerId'],
				);	
				$res=$this->db->insert('tblcoursepayment',$purchase_data);
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
    
}
