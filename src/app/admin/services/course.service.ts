import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Globals } from '.././globals';
import { Router } from '@angular/router';

@Injectable()
export class CourseService {

  constructor( private http: HttpClient,private globals: Globals,private router: Router) { }

  PurchaseCourse(PurchaseEntity)
  {    
   let promise = new Promise((resolve, reject) => {
     this.http.post(this.globals.baseAPIUrl + 'Course/PurchaseCourse', PurchaseEntity)
       .toPromise()
       .then( 
         res => { // Success 
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

}
