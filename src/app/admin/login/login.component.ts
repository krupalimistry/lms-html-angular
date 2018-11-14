import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare function myInput() : any;
import { Globals } from '.././globals';
declare var $,swal: any;
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class LoginComponent implements OnInit {

  loginEntity;
  submitted;
  btn_disable;

  constructor(private router: Router,public globals: Globals,private route: ActivatedRoute
    ,private AuthService : AuthService,private location: Location) { }

  ngOnInit() {
    this.globals.isLoading = false;
    this.loginEntity = {};
     myInput();

      // var host = this.location.path();
      // console.log(this.location['host']);
      // alert(window.location.host);
      // var parts = host.split('.');
      // var subdomain = null;

      // // more than domain.cn, will always return the first
      // if (parts.length > 2){
      //   subdomain = parts[0];
      // }
      

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
