<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 
class JiraRest extends CI_Controller {
//-------------------------------------------------------------------------------------------------
  public function index() {
	  	echo "for creating issue use this method :createJiraBug <br />for Updating issue use this method :updateJiraBug <br /> for Deleting issue use this method :deleteJiraBug <br /> ";exit;
  }
  //-------------------------------------------------------------------------------------------------
/*This method will create issue in jira*/  
	public function createJiraBug() {
		$post_data = json_decode(trim(file_get_contents('php://input')), true);	
		if ($post_data) {

			ini_set('error_reporting', E_STRICT);
			$config = array();
			$this->load->helper('jira_helper');
			$config['username'] = 'vidhi.bathani@theopeneyes.in';
			$config['password'] = 'vidhi@026';
			$config['port'] = 443;
			$config['host'] = 'theopeneyes.atlassian.net';
			$newbug = new Jira($config);
			$data = (object)array();
			$data->fields->project = (object)array();
			$data->fields->issuetype = (object)array();
			$data->fields->project->key = "LMS";
			$data->fields->issuetype->name = 'Improvement';
			$data->fields->summary = trim("Ex. Feedback - ".$post_data['Summary']);
			$data->fields->description = trim($post_data['Description']);
			$newbug = new Jira($config);
			$result = (array) $newbug->createIssue($data);
			echo json_encode($result['data']);	
			//echo '<pre>' . print_r($result, true) . '</pre>';exit;
		} else
		{
			echo json_encode('error');	
		}
    }
//-------------------------------------------------------------------------------------------------	
/*This method will create issue in jira*/  
public function attachmnetJiraBug($iCount=null,$key=null) {
	if(!empty($iCount)){
		// if(isset($_FILES['logo']) && !empty($_FILES['logo'])){
		// 	move_uploaded_file($_FILES["logo"]["tmp_name"], "../src/assets/company/".$_FILES["logo"]["name"]);
		// }
	// $post_data = json_decode(trim(file_get_contents('php://input')), true);	
	// if ($post_data) {

		ini_set('error_reporting', E_STRICT);
		$config = array();
		$this->load->helper('jira_helper');
		$config['username'] = 'vidhi.bathani@theopeneyes.in';
		$config['password'] = 'vidhi@026';
		$config['port'] = 443;
		$config['host'] = 'theopeneyes.atlassian.net';
		$newbug = new Jira($config);
		// $data = (object)array();
		// $data->fields->project = (object)array();
		// $data->fields->issuetype = (object)array();
		// $data->fields->project->key = "LMS";
		// $data->fields->issuetype->name = 'Improvement';
		// $data->fields->summary = trim("Ex. Feedback - ".$post_data['Summary']);
		// $data->fields->description = trim($post_data['Description']);
		$newbug = new Jira($config);
		if($_FILES){
			for($i=0; $i<$iCount; $i++)
			{
			if(isset($_FILES['file'.$i]) && !empty($_FILES['file'.$i]))
			{
				if(move_uploaded_file($_FILES["file".$i]["tmp_name"], "../src/assets/feedback/".$_FILES["file".$i]["name"])){
					$path = BASE_URL."/assets/feedback/".$_FILES["file".$i]["name"];
					$result = (array) $newbug->attachmentIssue($path,$key);
				} 
			}
			}
		echo json_encode('success');
		// if(isset($_FILES['file']) && !empty($_FILES['file'])){
		// 	if(move_uploaded_file($_FILES["file"]["tmp_name"], "../src/assets/feedback/".$_FILES["file"]["name"])){
		// 		$path = BASE_URL."/assets/feedback/".$_FILES["file"]["name"];
		// 		$result = (array) $newbug->attachmentIssue($path);
		// 		echo json_encode('success');	
		// 	} else {
		// 		echo json_encode('error');
		// 	}
		// }		
		//echo '<pre>' . print_r($result, true) . '</pre>';exit;
	} else
	{
		echo json_encode('error');	
	}
	}
}
//-------------------------------------------------------------------------------------------------	
/*This method will update issue in jira*/  
	public function updateJiraBug() {
		ini_set('error_reporting', E_STRICT);
		$config = array();
		$this->load->helper('jira_helper');
		$config['username'] = 'jirausername';
		$config['password'] = 'jirapassword';
		$config['port'] = 443;
		$config['host'] = 'jirahosturl';
		$newbug = new Jira($config);
		/*get jira Issues description*/
	 	$issuKey = trim('jiraissuekey'); /*issue key from jira*/
		$getIssue = (array)$newbug->getIssue($issuKey);
		$count = 1;
					foreach ($getIssue as $test){
						if ($count == 8){
							$responseBodyGetIssue = json_decode($test);
						}
						$count++;
					}
		/*Print Issue Summary*/
		$responseBodyGetIssue->fields->summary;
		$data = (object)array();
		$data->fields->project->key = "jiraprojectkey";
        $data->fields->issuetype->name = 'Bug';
		$data->fields->summary = trim("dummy text of the printing and typesetting industry type specimen book. It has survived not only");
		$result = (array) $newbug->updateIssue($data,$issuKey);
		echo '<pre>' . print_r($result, true) . '</pre>';exit;
    }
//-------------------------------------------------------------------------------------------------
/*This method will delete issue in jira*/  
	public function deleteJiraBug() {
		ini_set('error_reporting', E_STRICT);
		$config = array();
		$this->load->helper('jira_helper');
		$config['username'] = 'jirausername';
		$config['password'] = 'jirapassword';
		$config['port'] = 443;
		$config['host'] = 'jirahosturl';
		$newbug = new Jira($config);
		/*get jira Issues description*/
	 	$issuKey = trim('jiraissuekey'); /*issue key from jira*/
		$result = (array) $newbug->deleteIssue($issuKey);
		echo '<pre>' . print_r($result, true) . '</pre>';exit;
}
//-------------------------------------------------------------------------------------------------	
}