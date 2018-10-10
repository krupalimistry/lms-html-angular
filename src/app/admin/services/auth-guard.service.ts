import { Injectable } from '@angular/core';
import { CanActivate,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Globals } from '.././globals';
declare var $: any;

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, public globals: Globals) { }

  canActivate(route,state:RouterStateSnapshot) { 
	this.globals.currentLink = state.url;
	  if(state.url=='/register-instructor' || state.url=='/login' || state.url=='/forgot-password' || state.url=='/register-learner' || state.url=='/register-admin'){			
		  this.globals.IsLoggedIn = false;
		  return true;
	  } else {
		this.globals.IsLoggedIn = true;
		return true;		  
	  }		
  }
  
}
