import { Component, OnInit } from '@angular/core';
declare var $ : any;setTimeout(function(){
			if( $(".bg_white_block").hasClass( "ps--active-y" )){  
				$('footer').removeClass('footer_fixed');     
			}      
			else{  
				$('footer').addClass('footer_fixed');    
			}
		},1000);

@Component({
  selector: 'app-dashboard-learner',
  templateUrl: './dashboard-learner.component.html',
  styleUrls: ['./dashboard-learner.component.css']
})
export class DashboardLearnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
  }

}
