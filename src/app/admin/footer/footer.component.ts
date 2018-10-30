import { Component, OnInit } from '@angular/core';
declare var $,jQuery: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
    $('.owl-carousel-bottom').owlCarousel({
      loop: true,
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
    })


    $('.alert-close').on('click', function (c) {
      debugger
      $(this).parent().fadeOut('slow', function (c) {
      });
    });

    jQuery(function ($) {

      $(".option-heading").click(function () {
        $(this).next(".optioncontent").stop().slideToggle(500);
        $(this).find(".arrow-up, .arrow-down").toggle();
      });

    });

	 
  }

}
