import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
declare var $: any;

@Component({
  selector: 'app-header-register',
  templateUrl: './header-register.component.html',
  styleUrls: ['./header-register.component.css']
})
export class HeaderRegisterComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
	  $('body').tooltip({
        selector: '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])',
        trigger: 'hover',
        container: 'body'
    }).on('click mousedown mouseup', '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])', function () {
        $('[data-toggle="tooltip"], [title]:not([data-toggle="popover"])').tooltip('destroy');
    });	 
	const body = document.querySelector('body');
	body.style.setProperty('--screen-height', $(window).height()+"px");
	
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

    $(".footer_bottom span").click(function () {
           $(".footer_fixed_wrapper").toggleClass("active_up");
           $(".footer_bottom span").toggleClass("active_i");
    });
  }

}
