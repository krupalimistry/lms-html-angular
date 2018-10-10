import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-edit-profile-learner',
  templateUrl: './edit-profile-learner.component.html',
  styleUrls: ['./edit-profile-learner.component.css']
})
export class EditProfileLearnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  setTimeout(function(){
			if( $(".bg_white_block").hasClass( "ps--active-y" )){  
				$('footer').removeClass('footer_fixed');     
			}      
			else{  
				$('footer').addClass('footer_fixed');    
			}
		},1000);
  }

}
