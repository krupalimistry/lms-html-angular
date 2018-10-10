import { Component, OnInit } from '@angular/core';
declare function myInput() : any;
declare var $: any;

@Component({
  selector: 'app-register-instructor',
  templateUrl: './register-instructor.component.html',
  styleUrls: ['./register-instructor.component.css']
})
export class RegisterInstructorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	    myInput();
	   $("#educationbtn").click(function(){
		   $(".register_tab li").removeClass("active");
		   $(".register_tab li#educationli").addClass("active");
	   });
	   $("#educationbtn1").click(function(){
		   $(".register_tab li").removeClass("active");
		   $(".register_tab li#educationli").addClass("active");
	   });
	   $("#personalbtn").click(function(){
		   $(".register_tab li").removeClass("active");
		   $(".register_tab li#personalli").addClass("active");
	   });
	   $("#loginbtn").click(function(){
		   $(".register_tab li").removeClass("active");
		   $(".register_tab li#loginli").addClass("active");
	   });
	  
  }

}
