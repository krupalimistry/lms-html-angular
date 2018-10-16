import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Globals } from '.././globals';
declare function myInput() : any;
declare var $,swal: any;

@Component({
  selector: 'app-register-instructor',
  templateUrl: './register-instructor.component.html',
  styleUrls: ['./register-instructor.component.css']
})
export class RegisterInstructorComponent implements OnInit {

  RegisterEntity;
	same;
	submitted;
	submitted1;
	submitted2;
	btn_disable;
	EducationLeveList;
	certificate_error;

	constructor(private router: Router,private globals: Globals, private RegisterService: RegisterService,
		private elem: ElementRef) { }


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
				
	  //   myInput();
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
			let file1 = this.elem.nativeElement.querySelector('#CertificateId').files[0];
			if(file1){
				this.certificate_error = false;
				this.submitted2 = false; 
				$(".register_tab li").removeClass("active");
				$(".register_tab li#loginli").addClass("active");
				$("#educationdetail").removeClass("active in");
				$("#logindetail").addClass("active in");
			} else {
				this.certificate_error = true;
			}  
		}
	}

	previous2(){
		$(".register_tab li").removeClass("active");
		$(".register_tab li#educationli").addClass("active");
		$("#logindetail").removeClass("active in");
		$("#educationdetail").addClass("active in");
	}

	instructor_Register(InstructerRegisterForm){ 

		this.submitted = true;
		if(InstructerRegisterForm.valid){ 
			let file1 = this.elem.nativeElement.querySelector('#CertificateId').files[0];
			var fd = new FormData();
			if (file1) {				
				var Certificate = Date.now()+'_'+file1['name'];
				fd.append('Certificate', file1,Certificate);
				this.RegisterEntity.Certificate = Certificate;			
			} else {
				fd.append('Certificate', null);
				this.RegisterEntity.Certificate = null;
			}  
			this.submitted = false; 
			this.btn_disable = true;
			this.globals.isLoading = true;
			this.RegisterService.instructor_Register(this.RegisterEntity)
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
					
					if(file1){
						this.RegisterService.uploadFile(fd)
						.then((data) => 
						{	
							this.RegisterEntity = {};
							$("#CertificateId").val(null);
							InstructerRegisterForm.form.markAsPristine();
							swal({
								type: 'success',
								title: 'Congratulations...!!!',
								text: 'Your registration is successfully. Now you can login.',
								showConfirmButton: false,
								timer: 1500
								})   
							this.router.navigate(['/login']);				
						}, 
						(error) => 
						{ 
							this.btn_disable = false;
							this.submitted = false;
							this.globals.isLoading = false;
							this.router.navigate(['/pagenotfound']);
						});
					} else {
						this.RegisterEntity = {};
						$("#CertificateId").val(null);
						InstructerRegisterForm.form.markAsPristine();
						swal({
							type: 'success',
							title: 'Congratulations...!!!',
							text: 'Your registration is successfully. Now you can login.',
							showConfirmButton: false,
							timer: 1500
						})   
						this.router.navigate(['/login']);	
					}

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
