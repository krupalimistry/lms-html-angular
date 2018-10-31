import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Globals } from '.././globals';
declare var $,swal,paypal: any;

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements AfterViewChecked {

	PurchaseEntity;
	addScript;
	paypalLoad;

  constructor(private CourseService: CourseService,private globals: Globals) { }

  ngOnInit() {
	  setTimeout(function(){
			if( $(".bg_white_block").hasClass( "ps--active-y" )){  
				$('footer').removeClass('footer_fixed');     
			}      
			else{  
				$('footer').addClass('footer_fixed');    
			}
		},1000);
		this.PurchaseEntity = {};
		this.PurchaseEntity.TotalAmount = 1;
	}

	paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AVae-_pCZcevpsso7uIEZkRRMR7vwrLGr_yiCuWAQJxGS3_5vCcLNjvd10k-xUXWRRW0KvgcoPjq9bn9',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
               amount: { total: this.PurchaseEntity.TotalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
				this.PurchaseEntity.LernerId= this.globals.authData.UserId;
        this.PurchaseEntity.InstracterId= this.globals.authData.ParentId;
        this.PurchaseEntity.EmailAddress= this.globals.authData.EmailAddress;
				this.PurchaseEntity.CourseId= 1;
				//alert('success');
        this.CourseService.PurchaseCourse(this.PurchaseEntity)
        .then((data) => 
				{ 
					swal({
            type: 'success',
            title: 'Success...!!!',
						text: 'Your payment is successfully.',
						showConfirmButton: false,
        		timer: 3000
            })   
				}, 
				(error) => 
				{
					swal({
            type: 'warning',
            title: 'Oops...',
            text: 'Something is wrong.',
          })
				});
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}
