import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from '.././globals';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
@Injectable()
export class RegisterService {

 constructor( private http: Http,private globals: Globals,private router: Router) { }


 admin_Register(RegisterEntity)
 {    
	let promise = new Promise((resolve, reject) => {
    this.http.post(this.globals.baseAPIUrl + 'Register/admin_Register', RegisterEntity, this.globals.headerpath)
      .toPromise()
      .then( 
        res => { // Success 
		      resolve(res.json());
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

  instructor_Register(RegisterEntity)
 {    
	let promise = new Promise((resolve, reject) => {
    this.http.post(this.globals.baseAPIUrl + 'Register/instructor_Register', RegisterEntity, this.globals.headerpath)
      .toPromise()
      .then( 
        res => { // Success 
		      resolve(res.json());
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

  learner_Register(RegisterEntity)
 {    
	let promise = new Promise((resolve, reject) => {
    this.http.post(this.globals.baseAPIUrl + 'Register/learner_Register', RegisterEntity, this.globals.headerpath)
      .toPromise()
      .then( 
        res => { // Success 
		      resolve(res.json());
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

  getlist_EducationLevel()
  {    
   let promise = new Promise((resolve, reject) => {
     this.http.get(this.globals.baseAPIUrl + 'Register/getlist_EducationLevel', this.globals.headerpath)
       .toPromise()
       .then( 
         res => { // Success 
           resolve(res.json());
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

   uploadFile(file){
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'Register/uploadFile', file, this.globals.headerpath)
        .toPromise()
        .then(
          res => { // Success
            resolve(res.json());
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
