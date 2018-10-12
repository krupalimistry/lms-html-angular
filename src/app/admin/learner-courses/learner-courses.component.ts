import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-learner-courses',
  templateUrl: './learner-courses.component.html',
  styleUrls: ['./learner-courses.component.css']
})
export class LearnerCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  setTimeout(function(){
			if ($(".bg_white_block").height() < $(window).height()-100) {  
				$('footer').addClass('footer_fixed');     
			}      
			else{  
				$('footer').removeClass('footer_fixed');    
			}
			$('.left_menu_toggle i').toggleClass("fa-indent");
			$('.sidebar_wrap').toggleClass("small_menu");
			$('.menu_right').toggleClass("active_right");
			$('footer.footer_fixed').toggleClass("active_footermenu");
		},500);
	  
  }

}
