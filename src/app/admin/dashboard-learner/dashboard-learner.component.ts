import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
declare var $, AmCharts,PerfectScrollbar : any;

@Component({
  selector: 'app-dashboard-learner',
  templateUrl: './dashboard-learner.component.html',
  styleUrls: ['./dashboard-learner.component.css']
})
export class DashboardLearnerComponent implements OnInit {

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
		
		$('#calendar').fullCalendar({
      
	 eventRender: function(eventObj, $el) {
      $el.popover({
        title: eventObj.title,
        content: eventObj.description + '<br><b>Start:</b> ' + eventObj.start.format('D-MMM-YY h:mm a') + '<br><b>End:</b> ' + eventObj.end.format('D-MMM-YY h:mm a') + '<br><b>Location:</b> ' + eventObj.location + '<br><b>Organizer:</b> ' + eventObj.organizer,
		//content: '<p>' + eventObj.description + '<br>Start: ' + eventObj.start.format('h:mm a') + '</p><p>' + 'End: ' + eventObj.end.format('h:mm a') + '</p>',
        trigger: 'hover',
        placement: 'bottom',
        container: 'body',
		html : true 
      });
    },
      defaultDate: '2018-09-12',
	  defaultView: 'month',
      yearColumns: 2,
	  bootstrap: true,
      navLinks: true,
      editable: false,
	  dragable: false,
      eventLimit: true,
      events: [
        {
          title: 'Angular Course Starts',
          start: '2018-09-06T16:00:00',
		  dotcolor: '#000',
		  description: 'This course is starting up',
		  end: '2018-09-06T17:00:00',
		  location: 'United States',
		  organizer: 'Brielle Williamson'
        },
		{
          title: 'Node.js Course End',
          start: '2018-09-06T18:00:00',
		  dotcolor: '#000',
		  description: 'This course is Ending',
		  end: '2018-09-06T19:00:00',
		  location: 'United States',
		  organizer: 'Brielle Williamson'
        },
		{
          title: 'Course Lecture',
          start: '2018-09-06T10:00:00',
		  dotcolor: 'yellow',
		  description: 'Master ASP.NET Core MVC 2.0 Lecture',
		  end: '2018-09-06T12:00:00',
		  location: 'United States',
		  organizer: 'Brielle Williamson'
        },
		{
          title: 'HTML Seminar',
          start: '2018-09-06T19:00:00',
		  dotcolor: 'red',
		  description: 'HTML Course Seminar By Michal Delura',
		  end: '2018-09-06T20:00:00',
		  location: 'Washington, DC',
		  organizer: 'Trushant Mehta'
        },
		{
          title: 'HTML Seminar',
          start: '2018-09-06T19:00:00',
		  dotcolor: 'red',
		  description: 'HTML Course Seminar By Michal Delura',
		  end: '2018-09-06T20:00:00',
		  location: 'Washington, DC',
		  organizer: 'Trushant Mehta'
        },
		{
          title: 'Course Exam',
          start: '2018-09-22T15:00:00',
		  dotcolor: 'blue',
		  description: 'Node.js Course Exam',
		  end: '2018-09-22T17:00:00',
		  location: 'Washington, DC	',
		  organizer: 'Trushant Mehta'
        },
		{
          title: 'HTML Seminar',
          start: '2018-09-25T10:00:00',
		  dotcolor: 'red',
		  description: 'HTML Course Seminar By Michal Delura',
		  end: '2018-09-28T15:00:00',
		  location: 'Washington, DC',
		  organizer: 'Brielle Williamson'
        },
		{
          title: 'Course Lecture',
          start: '2018-09-24T10:00:00',
		  dotcolor: 'yellow',
		  description: 'Angular Lecture',
		  end: '2018-09-24T12:00:00',
		  location: 'United States',
		  organizer: 'Brielle Williamson'
        },
		{
          title: 'Course Exam',
          start: '2018-09-24T15:00:00',
		  dotcolor: 'blue',
		  description: 'RESTful Web services Course Exam',
		  end: '2018-09-24T17:00:00',
		  location: 'United States',
		  organizer: 'Trushant Mehta'
        },
      ]
		});
		
		var chart = AmCharts.makeChart( "login_course_today", {
			"type": "serial",
		"theme": "none",
		"dataProvider": [
			{
				"Test": "Test1",
				"Scores": 2,
			},
			{
				"Test": "Test2",
				"Scores": 6,
			},
			{
				"Test": "Test3",
				"Scores": 1,
			},
			{
				"Test": "Test4",
				"Scores": 10,
			},
			{
				"Test": "Test5",
				"Scores": 0,
			},
			],
		"valueAxes": [{
			"integersOnly": true,
			"minimum": 0,
			"axisAlpha": 1,
			"dashLength": 5,
			"gridCount": 10,
			"position": "left",
			"title": "Score", "titleFontSize" : 11
		}],
		"startDuration": 0,
		"graphs": [{
			"balloonText": "Scores : [[value]]",
			"title": "Scores",
			"valueField": "Scores",
			"fillAlphas": 0,
			"precision" : 0,
			"lineColor": "var(--theme-color)","lineThickness": 2,"lineAlpha": 1,
		}],
		"chartCursor": {
			"cursorAlpha": 0,
			"zoomable": false,
			"valueZoomable": false,
			"valueLineBalloonEnabled": false,
			"valueLineEnabled": false,
		},
		"categoryField": "Test",
		 "categoryAxis": {
			 "integersOnly": true,
			"minimum": 0,
			"precision" : 2,
			"axisAlpha": 1,
			"gridPosition": "start",
			"position": "left",
			"type": "Test",
			"title": "Test", "titleFontSize" : 11
		},
	});


	// PERFECT SCROLLBAR
new PerfectScrollbar('.scroll_yourscore');
// END PERFECT SCROLLBAR
	
	  
  }

}
