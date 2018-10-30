import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    // jQuery(function ($) {

    //   $(".option-heading").click(function () {
    //     $(this).next(".optioncontent").stop().slideToggle(500);
    //     $(this).find(".arrow-up, .arrow-down").toggle();
    //   });

    // });

	 
  }

}
