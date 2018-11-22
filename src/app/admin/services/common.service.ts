import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from '.././globals';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http/http';

@Injectable()
export class CommonService {

  constructor(private http: Http, private globals: Globals, private router: Router) { }


  FeedbackSubmit(postdata){ debugger
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'JiraRest/createJiraBug', postdata, this.globals.headerpath)
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


  uploadFile(file,icount,key){ debugger
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.globals.baseAPIUrl + 'JiraRest/attachmnetJiraBug/'+icount+'/'+key, file)
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

