import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';



@Injectable()
export class Globals { 

  constructor() { }
 
  //baseAPIUrl: string = 'http://localhost:4200/LMS/api/';  
  baseUrl: string = 'http://localhost/LMSTOOL/api/';
    headerpath: string = "{'Content-Type': 'application/json','Accept': 'application/json'}";
    IsLoggedIn: boolean = false;
    currentLink: string = '';
    authData = localStorage.getItem('token') ? new JwtHelper().decodeToken(localStorage.getItem('token')):null;
    msgflag = false;
    message = '';
    type = '';
    IsAdmin = true;
}