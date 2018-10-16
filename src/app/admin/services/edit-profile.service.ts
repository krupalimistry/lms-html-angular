import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Globals } from '.././globals';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class EditProfileService {

  constructor( private http: HttpClient,private globals: Globals,private router: Router) { }

  editprofile(RegisterEntity)
  {    
   let promise = new Promise((resolve, reject) => {
     this.http.post(this.globals.baseAPIUrl + 'EditProfile/editprofile', RegisterEntity)
       .toPromise()
       .then( 
         res => { // Success 
       let result = res;
       if(result && result['token']){
         localStorage.setItem('token',result['token']);				
         this.globals.authData = new JwtHelper().decodeToken(result['token']);
       }
       resolve(res);
         },
         msg => { // Error
       reject(msg.json());
       this.globals.isLoading = false;
       this.router.navigate(['/pagenotfound']);
         }
       );
   });		
   return promise;
   }

   updateEducationDetails(RegisterEntity)
  {    
   let promise = new Promise((resolve, reject) => {
     this.http.post(this.globals.baseAPIUrl + 'EditProfile/updateEducationDetails', RegisterEntity)
     .toPromise()
     .then(
       res => { // Success
         resolve(res);
       },
       msg => { // Error
        reject(msg);
        this.globals.isLoading = false;
        this.router.navigate(['/pagenotfound']);
       }
     );
   });		
   return promise;
   }
 
   updateCompany(CompanyEntity)
   { 
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'EditProfile/updateCompany', CompanyEntity)
      .toPromise()
      .then(
        res => { // Success
          resolve(res);
        },
        msg => { // Error
         reject(msg);
         this.globals.isLoading = false;
         this.router.navigate(['/pagenotfound']);
        }
      );
    });		
    return promise;
   }
    
   getStateList(CountryId){
   let promise = new Promise((resolve, reject) => {
     this.http.get(this.globals.baseAPIUrl + 'EditProfile/getStateList/' + CountryId)
       .toPromise()
       .then(
         res => { // Success
           resolve(res);
         },
         msg => { // Error
       reject(msg);
       this.globals.isLoading = false;
       this.router.navigate(['/pagenotfound']);
         }
       );
   });		
   return promise;
   } 
     
   getProfileById(userId){ 
   let promise = new Promise((resolve, reject) => {
     this.http.get(this.globals.baseAPIUrl + 'EditProfile/getProfileById/' + userId)
       .toPromise()
       .then(
         res => { // Success
           resolve(res);
         },
         msg => { // Error
       reject(msg);
       this.globals.isLoading = false;
       this.router.navigate(['/pagenotfound']);
         }
       );
   });		
   return promise;
   } 
 
   changepassword(data){ 
     let promise = new Promise((resolve, reject) => {
       this.http.post(this.globals.baseAPIUrl + 'EditProfile/changePassword', data)
         .toPromise()
         .then(
           res => { // Success
             resolve(res);
           },
           msg => { // Error
           reject(msg);
           this.globals.isLoading = false;
           this.router.navigate(['/pagenotfound']);
           }
         );
     });		
     return promise;
     }
 
}
