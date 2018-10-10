import { Component, OnInit } from '@angular/core';
declare function myInput() : any;
declare var $: any;

@Component({
  selector: 'app-edit-profile-admin',
  templateUrl: './edit-profile-admin.component.html',
  styleUrls: ['./edit-profile-admin.component.css']
})
export class EditProfileAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  setTimeout(function(){
			if( $(".bg_white_block").hasClass( "ps--active-y" )){  
				$('footer').removeClass('footer_fixed');     
			}      
			else{  
				$('footer').addClass('footer_fixed');    
			}
		},1500);
		myInput();
  }

}
