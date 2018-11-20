import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from '.././globals';
import { Router } from '@angular/router';
@Injectable()
export class CommonService {

  constructor(private http: Http, private globals: Globals, private router: Router) { }

  
  FeedbackSubmit(comapny){ 
      let promise = new Promise((resolve, reject) => {
        this.http.post('https://theopeneyes.atlassian.net/rest/api/2/issue/', comapny, "{'Content-Type': 'application/json','Accept': 'application/json','Authorization': Basic ZnJlZDpmcmVk''}")
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

