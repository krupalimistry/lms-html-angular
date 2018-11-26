import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  setTimeout(function(){
			if ($(".bg_white_block").height() < $(window).height()-100) {  
				$('footer').addClass('footer_fixed');     
			}      
			else{  
				$('footer').removeClass('footer_fixed');    
			}
			// $('.left_menu_toggle i').toggleClass("fa-indent");
			// $('.sidebar_wrap').toggleClass("small_menu");
			// $('.menu_right').toggleClass("active_right");
			// $('footer.footer_fixed').toggleClass("active_footermenu");
		},500);
	$('.grid_btn').click(function(){
		$('.grid_btn').addClass("active");
		$('.list_btn').removeClass("active");
		$('.course_list_block .col-md-4').removeClass("list_block");
	});
	$('.list_btn').click(function(){
		$('.list_btn').addClass("active");
		$('.grid_btn').removeClass("active");
		$('.course_list_block .col-md-4').addClass("list_block");
	});
  }

}
