import { Component, OnInit,ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';
declare var $, PerfectScrollbar: any;
declare function myInput() : any;
declare var $,swal,Bloodhound: any;

@Component({
  selector: 'app-header-register',
  templateUrl: './header-register.component.html',
  styleUrls: ['./header-register.component.css']
})
export class HeaderRegisterComponent implements OnInit {
  FeedbackEntity;
  submitted;
  btn_disable;
constructor(private authService: AuthService, private router: Router, public globals: Globals, 
  private CommonService:CommonService,private elem: ElementRef) { }

  ngOnInit() {
    this.FeedbackEntity = {};
    $('body').tooltip({
      selector: '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])',
      trigger: 'hover',
      container: 'body'
    }).on('click mousedown mouseup', '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])', function () {
      $('[data-toggle="tooltip"], [title]:not([data-toggle="popover"])').tooltip('destroy');
    });
    const body = document.querySelector('body');
    body.style.setProperty('--screen-height', $(window).height() + "px");

    $('.owl-carousel-bottom').owlCarousel({
      loop: false,
      autoPlay: true,
      nav: true,
      dots: false,
      margin: 30,
      stopOnHover: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 5
        },

        300: {
          items: 1
        },
        479: {
          items: 2
        },
        600: {
          items: 2
        },
        768: {
          items: 3
        },
        979: {
          items: 5
        },
        1024: {
          items: 5
        },
        1199: {
          items: 5
        }
      }
    });

    $(".alert-close").click(function () {
      $(".footer_fixed_wrapper").removeClass("active_up");
      $(".footer_bottom span").removeClass("active_i");
    });

    $(".footer_bottom span").click(function (e) {
      $(".footer_fixed_wrapper").toggleClass("active_up");
      $(".footer_bottom span").toggleClass("active_i");
      e.stopPropagation();
    });
    $(".footer_fixed_wrapper").click(function (e) {
      e.stopPropagation();
    });
    $("body").click(function () {
      $(".footer_fixed_wrapper").removeClass("active_up");
      $(".footer_bottom span").removeClass("active_i");
    });

// Inquiry Form
$(".inquire_now").click(function() {
	$('.form_widget').addClass("active");
  $('body').addClass("overflow_body");
});
$(".form_widget .glyphicon-remove").click(function() {
	$('.form_widget').removeClass("active");
  $('body').removeClass("overflow_body");
});


setTimeout(function(){
  myInput();
},100);

//End Inquiry Form


  }

  FeedbackSubmit(FeedbackForm){ 
    this.submitted = true;		
		if(FeedbackForm.valid){
			this.btn_disable = true;
      this.globals.isLoading = true;
      let file1 = this.elem.nativeElement.querySelector('#Attachment').files;
      var fd = new FormData();
      if(file1.length>0)
      {
        for (var i = 0; i < file1.length; i++)
        { 
            var logo = Date.now()+'_'+file1[i]['name'];
            fd.append('file'+i, file1[i],logo);
        } 
      } else
      {
        fd.append('file', null);
      }

			this.CommonService.FeedbackSubmit(this.FeedbackEntity)			
			.then((data) => 
			{ 
         if(file1.length>0){
        this.CommonService.uploadFile(fd,file1.length,data)
        .then((data) => 
        {	
          this.btn_disable = false;
					this.submitted = false;
					this.FeedbackEntity = {};
          FeedbackForm.form.markAsPristine();
          $("#Attachment").val(null);
          $('#file_upload input[type="text"]').val(null);
					this.globals.isLoading = false;
					swal({
						position: 'top-end',
						type: 'success',
						title: 'Your feedback has been submitted',
						showConfirmButton: false,
						timer: 1500
					})          
        }, 
        (error) => 
        { 
          this.btn_disable = false;
          this.submitted = false;
          this.globals.isLoading = false;
          this.router.navigate(['/pagenotfound']);
        });
      } else {
        this.btn_disable = false;
					this.submitted = false;
					this.FeedbackEntity = {};
					FeedbackForm.form.markAsPristine();
					this.globals.isLoading = false;
					swal({
						position: 'top-end',
						type: 'success',
						title: 'Your feedback has been submitted',
						showConfirmButton: false,
						timer: 1500
					})
      }				  
			}, 
			(error) => 
			{
				this.btn_disable = false;
				this.submitted = false;
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
      });
      
		 }
  }

}
