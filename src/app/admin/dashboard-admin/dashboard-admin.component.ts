import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
declare var $, AmCharts : any;

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
	  setTimeout(function(){
			if( $(".bg_white_block").hasClass( "ps--active-y" )){  
				$('footer').removeClass('footer_fixed');     
			}      
			else{  
				$('footer').addClass('footer_fixed');    
			}
		},1000);

		var chart = AmCharts.makeChart( "login_course_today", {
				"type": "serial",
			"theme": "none",
			"dataProvider": [
				{
					"time": "0:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "1:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "2:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "3:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "4:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "5:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "6:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "7:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "8:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "9:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "10:00",
					"login": 1,
					"course": 1,
				},
				{
					"time": "11:00",
					"login": 2,
					"course": 0,
				},
				{
					"time": "12:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "13:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "14:00",
					"login": 3,
					"course": 0,
				},
				{
					"time": "15:00",
					"login": 5,
					"course": 0,
				},
				{
					"time": "16:00",
					"login": 4,
					"course": 1,
				},
				{
					"time": "17:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "18:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "19:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "20:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "21:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "22:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "23:00",
					"login": 0,
					"course": 0,
				},
				{
					"time": "24:00",
					"login": 0,
					"course": 0,
				},
				],
			"valueAxes": [{
				"integersOnly": true,
				"minimum": 0,
				"axisAlpha": 1,
				"dashLength": 5,
				"gridCount": 10,
				"position": "left",
				"title": "Numbers", "titleFontSize" : 11
			}],
			"startDuration": 0,
			"graphs": [{
				"balloonText": "Logins : [[value]]",
				"title": "Logins",
				"valueField": "login",
				"fillAlphas": 0,
				"precision" : 0,
				"lineColor": "var(--theme-color)","lineThickness": 2,"lineAlpha": 1,
			},{
				"balloonText": "Course Completed : [[value]]",
				"title": "Course Completed",
				"valueField": "course",
				"fillAlphas": 0,
				"precision" : 0,
				"lineColor": "var(--option-color)","lineThickness": 2,"lineAlpha": 1,
			}],
			"chartCursor": {
				"cursorAlpha": 0,
				"zoomable": false,
				"valueZoomable": false,
				"valueLineBalloonEnabled": false,
				"valueLineEnabled": false,
			},
			"categoryField": "time",
		   "categoryAxis": {
			   "integersOnly": true,
				"minimum": 0,
				"precision" : 2,
				"axisAlpha": 1,
				"gridPosition": "start",
				"position": "left",
				"type": "time",
				"title": "Time", "titleFontSize" : 11
			},
			"legend": {
			"maxColumns": 4,
			"position": "bottom",
			"useGraphSettings": true,
			"markerSize": 15,
			"divId": "legenddiv",
		  },
		});
		
  }

}
