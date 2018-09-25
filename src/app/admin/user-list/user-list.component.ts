import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

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
		
	  var table = $('#list_tables').DataTable( {
        //  scrollY: '55vh',
		 responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: ''
            }
        },
           scrollCollapse: true,           
             "oLanguage": {
             "sLengthMenu": "_MENU_ Users per Page",
             "sInfo": "Showing _START_ to _END_ of _TOTAL_ Users",
             "sInfoFiltered": "(filtered from _MAX_ total Users)",
             "sInfoEmpty": "Showing 0 to 0 of 0 Users"
             },
             dom: 'lBfrtip',
             buttons: [
                 {
                 extend: 'excel',
                 title: 'Users List',
                 exportOptions: {
                   columns: [ 0, 1, 2, 3, 4, 5 ]
                   }
                 },
                 {
                 extend: 'print',
                 title: 'Users List',
                 exportOptions: {
                   columns: [ 0, 1, 2, 3, 4, 5 ]
                   }
                 },
               ]
           });
           
           
		   $('.buttons-excel').attr('data-original-title', 'Export to Excel').tooltip();
		   $('.buttons-print').attr('data-original-title', 'Print').tooltip();
  }

}
