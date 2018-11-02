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
				$this->db->select('Value');
				$this->db->where('Key','EmailFrom');
				$smtp1 = $this->db->get('tblmstconfiguration');	
				foreach($smtp1->result() as $row) {
					$smtpEmail = $row->Value;
				}
				$this->db->select('Value');
				$this->db->where('Key','EmailPassword');
				$smtp2 = $this->db->get('tblmstconfiguration');	
				foreach($smtp2->result() as $row) {
					$smtpPassword = $row->Value;
				}
				
				$config['protocol']='smtp';
				$config['smtp_host']='ssl://smtp.googlemail.com';
				$config['smtp_port']='465';
				$config['smtp_user']='myopeneyes3937@gmail.com';
				$config['smtp_pass']='W3lc0m3@2018';	

				// $config['protocol']='mail';
				// $config['smtp_host']='vps40446.inmotionhosting.com';
				// $config['smtp_port']='587';
				// $config['smtp_user']=$smtpEmail;
				// $config['smtp_pass']=$smtpPassword;
				
				$config['charset']='utf-8';
				$config['newline']="\r\n";
				$config['mailtype'] = 'html';							
				$this->email->initialize($config);

				$Subject = 'LMS - Payment successfully';
				$body = '<table border="0" cellpadding="0" cellspacing="0" style="border:1px solid #333333; color:#000000; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto; width:600px">
				<tbody>
					<tr>
						<td style="background-color:#f3f3f3; background:#f3f3f3; border-bottom:1px solid #333333; padding:10px 10px 5px 10px"><img alt="Learn Feedback" src="'.BASE_URL.'/assets/images/logo.png" /></td>
					</tr>
					<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center">
						<p style="color:#000; font-size: 25px; line-height: 25px; font-weight: bold;padding: 0; margin: 0 0 10px;"><strong>Payment Succesfully </strong><strong></strong></p>
			
						<p style="color:#000; font-size: 18px; line-height: 18px; font-weight: bold; padding: 0; margin: 0 0 10px;">We&rsquo;re so happy you&rsquo;ve joined us.</p>
			
						<p style="color:#000; font-size: 14px; line-height:20px; padding: 0; margin: 0 0;">Use the button below to login your account and get started:</p>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:0; text-align:center; vertical-align:middle">
						<table border="0" cellpadding="0" cellspacing="0" style="border:0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:22px; margin:0 auto">
							<tbody>
								<tr>
									<td style="background-color:#b11016; background:#b11016; border-radius:4px; border-width:0; clear:both; color:#ffffff; font-size:14px; line-height:13px; opacity:1; padding:10px; text-align:center; text-decoration:none; width:130px"><a href="{login_link}" style="color:#fff; text-decoration:none;">Get Started</a></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
						<tr>
						<td style="border-width:0; padding:20px 10px 10px 10px; text-align:center; vertical-align:middle">			
						<p style="color:#777; font-size: 14px; line-height:20px; padding: 0; margin: 0 0 25px;">If you have any questions, you can reply to this email and it will go right to them. Alternatively, feel free to contact our customer success team anytime.</p>
			
						<p style="color:#777; font-size: 12px; line-height:20px; padding: 0; margin: 0 0 10px; text-align: left;">If you&rsquo;re having trouble with the button above, copy and paste the URL below into your web browser. <a href="{login_link}" style="cursor:pointer;">click here</a></p>
						</td>
					</tr>
					<tr>
						<td style="background-color:#222222; background:#222222; border-top:1px solid #cccccc; color:#ffffff; font-size:13px; padding:7px; text-align:center">Copyright &copy; 2018 Learning Management System</td>
					</tr>
				</tbody>
			</table>';

			$body = str_replace("{login_link}",''.BASE_URL.'/login',$body);

				$this->email->from($smtpEmail, 'LMS');
				$this->email->to($PurchaseEntity['EmailAddress']);		
				$this->email->subject($Subject);
				$this->email->message($body);
				if($this->email->send())
				{
					echo json_encode('success');
				}	
			}
		}
	}

	
	
}