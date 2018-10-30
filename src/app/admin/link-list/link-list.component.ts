import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
        }
      }
    })



    $('.owl-carousel-instructor').owlCarousel({
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
        }
      }
    })

  }
}
