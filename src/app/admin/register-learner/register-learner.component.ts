import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Globals } from '.././globals';
declare function myInput() : any;
declare var $,swal: any;

@Component({
  selector: 'app-register-learner',
  templateUrl: './register-learner.component.html',
  styleUrls: ['./register-learner.component.css']
})
export class RegisterLearnerComponent implements OnInit {

  	RegisterEntity;
	same;
	submitted;
	submitted1;
	submitted2;
  	btn_disable;
	EducationLeveList;
  

  constructor(private router: Router,private globals: Globals, private RegisterService: RegisterService) { }


  ngOnInit() {
	this.RegisterEntity = {};
	myInput();
	this.globals.isLoading = true;
	this.RegisterService.getlist_EducationLevel()
	.then((data) => 
	{	
		this.EducationLeveList = data;
		this.globals.isLoading = false;
	}, 
	(error) => 
	{ 
		this.globals.isLoading = false;
		this.router.navigate(['/']);
	});
	  //  myInput();
	  //  $("#educationbtn").click(function(){
		//    $(".register_tab li").removeClass("active");
		//    $(".register_tab li#educationli").addClass("active");
	  //  });
	  //  $("#educationbtn1").click(function(){
		//    $(".register_tab li").removeClass("active");
		//    $(".register_tab li#educationli").addClass("active");
	  //  });
	  //  $("#personalbtn").click(function(){
		//    $(".register_tab li").removeClass("active");
		//    $(".register_tab li#personalli").addClass("active");
	  //  });
	  //  $("#loginbtn").click(function(){
		//    $(".register_tab li").removeClass("active");
		//    $(".register_tab li#loginli").addClass("active");
	  //  });
	  //  var skills = new Bloodhound({
		//   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
		//   queryTokenizer: Bloodhound.tokenizers.whitespace,
		//   prefetch: {
		// 	url: '../assets/skills.json'
		//   }
		// });
		// skills.initialize();
		// 	 var elt = $('#skills');
		// 		elt.tagsinput({
		// 		  typeaheadjs: {
		// 			name: 'skills',
		// 			displayKey: 'name',
		// 			valueKey: 'name',
		// 			source: skills.ttAdapter()
		// 		  }
		// 		});
	}
	
	next1(RegisterForm1){
		this.submitted1 = true;
		if(RegisterForm1.valid){   
			this.submitted1 = false;   
			$(".register_tab li").removeClass("active");
			$(".register_tab li#educationli").addClass("active");
			$("#personaldetail").removeClass("active in");
			$("#educationdetail").addClass("active in");
		}
	}

	previous1(){
			$(".register_tab li").removeClass("active");
			$(".register_tab li#personalli").addClass("active");
			$("#educationdetail").removeClass("active in");
			$("#personaldetail").addClass("active in");
	}

	next2(RegisterForm2){
		this.submitted2 = true;
		if(RegisterForm2.valid){   
			this.submitted2 = false; 
			$(".register_tab li").removeClass("active");
			$(".register_tab li#loginli").addClass("active");
			$("#educationdetail").removeClass("active in");
			$("#logindetail").addClass("active in");
		}
	}

	previous2(){
		$(".register_tab li").removeClass("active");
		$(".register_tab li#educationli").addClass("active");
		$("#logindetail").removeClass("active in");
		$("#educationdetail").addClass("active in");
	}

	learner_Register(learnerRegisterForm){
		this.submitted = true;
		if(learnerRegisterForm.valid){   
			this.submitted = false; 
			this.btn_disable = true;
			this.globals.isLoading = true;
			this.RegisterService.learner_Register(this.RegisterEntity)
			.then((data) => 
			{	
				this.globals.isLoading = false;
				this.btn_disable = false;
				this.submitted = false;
				if(data=='email dublicate'){
					swal({
						type: 'warning',
						title: 'Oops...',
						text: 'This email is already exists.',
						})
				} else {							
					this.RegisterEntity = {};
					learnerRegisterForm.form.markAsPristine();
					swal({
						type: 'success',
						title: 'Congratulations...!!!',
						text: 'Your registration is successfully. Now you can login.',
						showConfirmButton: false,
						timer: 1500
						})   
					this.router.navigate(['/login']);	
				}			
			}, 
			(error) => 
			{ 
				this.btn_disable = false;
				this.submitted = false;
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
			});
		}
	}

	checkpassword(){ 
		if(this.RegisterEntity.cPassword != this.RegisterEntity.Password){
			this.same = true;
		} else {
			this.same = false;
		}
		
	}

}
