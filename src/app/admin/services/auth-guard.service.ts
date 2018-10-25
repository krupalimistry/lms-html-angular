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
debugger
	this.globals.isLoading = false;	
	if(state.url.split('/')[3] != undefined){
		this.globals.currentLink = '/'+state.url.split('/')[1]+'/'+state.url.split('/')[2]+'/'+state.url.split('/')[3];
	} else if(state.url.split('/')[2] != undefined) {
		this.globals.currentLink = '/'+state.url.split('/')[1]+'/'+state.url.split('/')[2];
	} else {
		this.globals.currentLink = '/'+state.url.split('/')[1];
	}
	
	if(state.url=='/link-list'){
		return true;		  
	}
	
	  if(this.authService.isLoggedIn()==true){	

		  if(state.url=='/register-instructor' || state.url=='/login' || state.url=='/link-list' || state.url=='/forgot-password' || state.url=='/register-learner' || state.url=='/register-admin'){			
			  this.globals.IsLoggedIn = true;
			  this.router.navigate(['/dashboard-admin']);
			  return false;
		  } else {
			  this.globals.IsLoggedIn = true;
			  return true;		  
		  }		  
	  } else {
			if(state.url=='/register-instructor' || state.url=='/login' || state.url=='/link-list' || state.url=='/forgot-password' || state.url=='/register-learner' || state.url=='/register-admin'){			
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
