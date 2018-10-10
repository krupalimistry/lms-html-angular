import { Component, OnInit } from '@angular/core';
declare function myInput() : any;
declare var $,Bloodhound: any;

@Component({
  selector: 'app-register-learner',
  templateUrl: './register-learner.component.html',
  styleUrls: ['./register-learner.component.css']
})
export class RegisterLearnerComponent implements OnInit {

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
	   var skills = new Bloodhound({
		  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
		  queryTokenizer: Bloodhound.tokenizers.whitespace,
		  prefetch: {
			url: '../assets/skills.json'
		  }
		});
		skills.initialize();
			 var elt = $('#skills');
				elt.tagsinput({
				  typeaheadjs: {
					name: 'skills',
					displayKey: 'name',
					valueKey: 'name',
					source: skills.ttAdapter()
				  }
				});
		  }

		}
