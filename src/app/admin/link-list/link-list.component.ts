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

      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })


  }

}
