import { Component, OnInit,ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';
declare var $, PerfectScrollbar: any;
declare function myInput() : any;
declare var $,swal,Bloodhound: any;

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
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
    body.style.setProperty('--screen-height', $(window).height() - 100 + "px");
	
    $(".expand_profile").click(function () {
      $(".profile_linkup").toggleClass("active_slider");
      $(".expand_profile").toggleClass("active_down");
      $(".slider_profile").toggleClass("owl-carousel");
      $(".slider_profile").toggleClass("owl-carousel-profile");
      $(".slider_profile").toggleClass("owl-theme");
      $(".slider_profile").toggleClass("owl-responsive-1199");
      $(".slider_profile").toggleClass("owl-loaded");
    });

    $(".expand_learner").click(function () {
      $(".learner_linkup").toggleClass("active_slider");
      $(".expand_learner").toggleClass("active_down");
      $(".slider_leaner").toggleClass("owl-carousel");
      $(".slider_leaner").toggleClass("owl-carousel-learner");
      $(".slider_leaner").toggleClass("owl-theme");
      $(".slider_leaner").toggleClass("owl-responsive-1199");
      $(".slider_leaner").toggleClass("owl-loaded");
    });


    $(".expand_admin").click(function () {
      $(".admin_linkup").toggleClass("active_slider");
      $(".expand_admin").toggleClass("active_down");
      $(".slider_admin").toggleClass("owl-carousel");
      $(".slider_admin").toggleClass("owl-carousel-admin");
      $(".slider_admin").toggleClass("owl-theme");
      $(".slider_admin").toggleClass("owl-responsive-1199");
      $(".slider_admin").toggleClass("owl-loaded");
    });

    $(".expand_instructor").click(function () {
      $(".instructor_linkup").toggleClass("active_slider");
      $(".expand_instructor").toggleClass("active_down");
      $(".slider_instructor").toggleClass("owl-carousel");
      $(".slider_instructor").toggleClass("owl-carousel-instructor");
      $(".slider_instructor").toggleClass("owl-theme");
      $(".slider_instructor").toggleClass("owl-responsive-1199");
      $(".slider_instructor").toggleClass("owl-loaded");
    });

    $('.owl-carousel-profile').owlCarousel({
      loop: false,
      autoPlay: false,
      nav: true,
      dots: false,
      margin: 30,
      stopOnHover: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 4
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
          items: 4
        },
        1024: {
          items: 4
        },
        1199: {
          items: 4
        },
        1920: {
          items: 5
        },
        2200: {
          items: 6
        }
      }
    })

    $('.owl-carousel-admin').owlCarousel({
      loop: false,
      autoPlay: false,
      nav: false,
      dots: false,
      margin: 30,
      stopOnHover: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 4
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
          items: 4
        },
        1024: {
          items: 4
        },
        1199: {
          items: 4
        },
        1920: {
          items: 5
        },
        2200: {
          items: 6
        }
      }
    })



    $('.owl-carousel-learner').owlCarousel({
      loop: false,
      autoPlay: false,
      nav: true,
      dots: false,
      margin: 30,
      stopOnHover: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 4
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
          items: 4
        },
        1024: {
          items: 4
        },
        1199: {
          items: 4
        },
        1920: {
          items: 5
        },
        2200: {
          items: 6
        }
      }
    })



    $('.owl-carousel-instructor').owlCarousel({
      loop: false,
      autoPlay: false,
      nav: false,
      dots: false,
      margin: 30,
      stopOnHover: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 4
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
          items: 4
        },
        1024: {
          items: 4
        },
        1199: {
          items: 4
        },
        1920: {
          items: 5
        },
        2200: {
          items: 6
        }
      }
    })


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
