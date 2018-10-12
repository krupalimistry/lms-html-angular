import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare function myInput() : any;
import { Globals } from '.././globals';
declare var $,swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEntity;
  submitted;
  btn_disable;

  constructor(private router: Router,public globals: Globals,private route: ActivatedRoute,private AuthService : AuthService) { }

  ngOnInit() {
    this.globals.isLoading = false;
    this.loginEntity = {};
	   myInput();
  }

  login(loginForm)
	 {		 
		this.submitted = true;
		if(loginForm.valid){
			this.btn_disable = true;
      this.globals.isLoading = true;
			this.AuthService.login(this.loginEntity)
			.then((data) => 
			{
        this.btn_disable = false;
        this.submitted = false;
        this.loginEntity = {};
        loginForm.form.markAsPristine(); 
		this.router.navigate(['/link-list']);
        // if(this.globals.authData.RoleId==1 || this.globals.authData.RoleId==2){
          // this.router.navigate(['/dashboard-admin']);
        // } else if(this.globals.authData.RoleId==3){
          // this.router.navigate(['/dashboard-learner']);
        // } else if(this.globals.authData.RoleId==4){
          // this.router.navigate(['/dashboard-instructor']);
        // }                 
			}, 
			(error) => 
			{   
          swal({
            type: 'warning',
            title: 'Oops...',
            text: 'Either email or password is incorrect',
            })
          this.globals.isLoading = false;
          this.btn_disable = false;
          this.submitted = false;
			});
		} 		
  }

}
