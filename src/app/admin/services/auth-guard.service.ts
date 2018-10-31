import { Injectable } from '@angular/core';
import { CanActivate,RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Globals } from '.././globals';
declare var $: any;

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService,private router: Router, public globals: Globals) { }

  canActivate(route,state:RouterStateSnapshot) { 

	this.globals.isLoading = false;	
	if(state.url.split('/')[3] != undefined){
		this.globals.currentLink = '/'+state.url.split('/')[1]+'/'+state.url.split('/')[2]+'/'+state.url.split('/')[3];
	} else if(state.url.split('/')[2] != undefined) {
		this.globals.currentLink = '/'+state.url.split('/')[1]+'/'+state.url.split('/')[2];
	} else {
		this.globals.currentLink = '/'+state.url.split('/')[1];
	}
	
	if(this.globals.currentLink=='/dashboard-admin'){
		this.globals.currentLinkName = 'Dashboard Admin';
	} else if(this.globals.currentLink=='/dashboard-learner') {
		this.globals.currentLinkName = 'Dashboard Learner';
	} else if(this.globals.currentLink=='/dashboard-instructor') {
		this.globals.currentLinkName = 'Dashboard Instructor';
	} else if(this.globals.currentLink=='/user-list') {
		this.globals.currentLinkName = 'User List';
	} else if(this.globals.currentLink=='/calendar') {
		this.globals.currentLinkName = 'Calendar';
	} else if(this.globals.currentLink=='/certificate') {
		this.globals.currentLinkName = 'Certificate';
	} else if(this.globals.currentLink=='/course-detail') {
		this.globals.currentLinkName = 'Course Detail';
	} else if(this.globals.currentLink=='/course-list') {
		this.globals.currentLinkName = 'Course List';
	} else if(this.globals.currentLink=='/register-instructor') {
		this.globals.currentLinkName = 'Register Instructor';
	} else if(this.globals.currentLink=='/register-admin') {
		this.globals.currentLinkName = 'Register Admin';
	} else if(this.globals.currentLink=='/register-learner') {
		this.globals.currentLinkName = 'Register Learner';
	} else if(this.globals.currentLink=='/login') {
		this.globals.currentLinkName = 'Login';
	} else if(this.globals.currentLink=='/link-list') {
		this.globals.currentLinkName = 'Link lists';
	} else if(this.globals.currentLink=='/forgot-password') {
		this.globals.currentLinkName = 'Forgot Password';
	} else if(this.globals.currentLink=='/edit-profile') {
		this.globals.currentLinkName = 'Profile';
	} else if(this.globals.currentLink=='/learner-courses') {
		this.globals.currentLinkName = 'Learner courses';
	} else if(this.globals.currentLink=='/instructor-course-form') {
		this.globals.currentLinkName = 'Add Instructor course';
	} else if(this.globals.currentLink=='/instructor-courses') {
		this.globals.currentLinkName = 'Instructor courses';
	} else if(this.globals.currentLink=='/welcome') {
		this.globals.currentLinkName = 'Welcome';
	} else {
		this.globals.currentLinkName = '';
	}
	
	if(state.url=='/link-list'){
		return true;		  
	}
	
	  if(this.authService.isLoggedIn()==true){	

		  if(state.url=='/register-instructor' || state.url=='/welcome' || state.url=='/login' || state.url=='/link-list' || state.url=='/forgot-password' || state.url=='/register-learner' || state.url=='/register-admin'){			
			  this.globals.IsLoggedIn = true;
			  this.router.navigate(['/dashboard-admin']);
			  return false;
		  } else {
			  this.globals.IsLoggedIn = true;
			  return true;		  
		  }		  
	  } else {
			if(state.url=='/register-instructor' || state.url=='/welcome' || state.url=='/login' || state.url=='/link-list' || state.url=='/forgot-password' || state.url=='/register-learner' || state.url=='/register-admin'){			
			   this.globals.IsLoggedIn = false;
			   return true;
		   } else {
			   this.globals.IsLoggedIn = false;
			   this.router.navigate(['/link-list']);
			   return false;
		   }		  
	  }
  }
  
}
