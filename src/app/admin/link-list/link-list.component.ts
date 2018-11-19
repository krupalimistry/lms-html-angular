import { Component, OnInit } from '@angular/core';
declare var $: any;
declare function myInput() : any;

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
RegisterEntity;
  constructor() { }

  ngOnInit() {
	  this.RegisterEntity = {};
    $('body').tooltip({
      selector: '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])',
      trigger: 'hover',
      container: 'body'
    }).on('click mousedown mouseup', '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])', function () {
      $('[data-toggle="tooltip"], [title]:not([data-toggle="popover"])').tooltip('destroy');
    });
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
}
