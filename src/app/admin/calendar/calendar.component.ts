import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

 setTimeout(function(){
			if ($(".bg_white_block").height() < $(window).height()-100) {  
				$('footer').addClass('footer_fixed');     
			}      
			else{  
				$('footer').removeClass('footer_fixed');    
			}
		},1000);
	$('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'year,month,basicWeek,basicDay'
      },
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
  }
}