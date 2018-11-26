import { Component, OnInit } from '@angular/core';
declare function myInput() : any;
declare var $,CKEDITOR,Dropzone,getAccordion: any;

@Component({
  selector: 'app-instructor-course-form',
  templateUrl: './instructor-course-form.component.html',
  styleUrls: ['./instructor-course-form.component.css']
})
export class InstructorCourseFormComponent implements OnInit {

  CourseFormList;
  secondform;
  courseEntity;

  constructor() { }

  ngOnInit() {
	   myInput();
this.secondform = false;
	  
	  	getAccordion("#tabs",768);
	  
	  
    this.secondform = false;
    this.courseEntity = {};
    // CKEDITOR.replace('test', {
    //   height: '100',
    //   resize_enabled: 'false',
    //   resize_maxHeight: '100',
    //   resize_maxWidth: '948',
    //   resize_minHeight: '100',
    //   resize_minWidth: '948',
    //   extraAllowedContent: 'span;ul;li;table;td;style;*[id];*(*);*{*}'
    //   //extraAllowedContent: 'style;*[id,rel](*){*}
    // });

    var item = { 'Name': ''};
    this.CourseFormList = [];
    this.CourseFormList.push(item);
    setTimeout(function(){
      myInput();
    },100);
    
    //pre-next btn
    // var divs = $('.mydivs>div');
    // var now = 0; // currently shown div
    // divs.hide().first().show();
    // $("button[name=next]").click(function (e) { 
    //   divs.eq(now).hide();
    //   now = (now + 1 < divs.length) ? now + 1 : 0;
    //   divs.eq(now).show(); // show next
      
    // });
    // $("button[name=prev]").click(function (e) {
    //   divs.eq(now).hide();
    //   now = (now > 0) ? now - 1 : divs.length - 1;
    //   divs.eq(now).show(); // or .css('display','block');
      
      
    // });
    //pre-next btn 


    //add more
    // var regex = /^(.+?)(\d+)$/i;
    // var cloneIndex = $(".clonedInput").length + 1;

    // function clone() {
    //   $(".clonedInput:first-child").clone()
    //     .appendTo(".course_forum_block")
    //     .attr("id", "clonedInput" + cloneIndex)
    //     .find("*")
    //     .each(function () {
    //       var id = this.id || "";
    //       var match = id.match(regex) || [];
    //       if (match.length == 3) {
    //         this.id = match[1] + (cloneIndex);
    //         this.name = match[1] + (cloneIndex);

    //       }
    //     })
    //     .on('click', 'button.clone', clone)
    //     .on('click', 'button.remove', remove);

    //   cloneIndex++;
    // }
    // function remove() {
    //   $(".clonedInput:last-child").remove();
    // }
    // $("button.clone").on("click", clone);

    // $("button.remove").on("click", remove);
    //add more

    // function remove(){
    //     $(this).parents(".clonedInput").remove();
    // }
    // $("button.clone").on("click", clone);


    
    // CKEDITOR.replace('EmailBodyW', {
    //   height: '100',
    //   resize_enabled: 'false',
    //   resize_maxHeight: '100',
    //   resize_maxWidth: '948',
    //   resize_minHeight: '100',
    //   resize_minWidth: '948',
    //   extraAllowedContent: 'span;ul;li;table;td;style;*[id];*(*);*{*}'
    //   //extraAllowedContent: 'style;*[id,rel](*){*}
    // });
    // CKEDITOR.replace('EmailBodyT', {
    //   height: '100',
    //   resize_enabled: 'false',
    //   resize_maxHeight: '100',
    //   resize_maxWidth: '948',
    //   resize_minHeight: '100',
    //   resize_minWidth: '948',
    //   extraAllowedContent: 'span;ul;li;table;td;style;*[id];*(*);*{*}'
    //   //extraAllowedContent: 'style;*[id,rel](*){*}
    // });
    // CKEDITOR.replace('EmailBodyM', {
    //   height: '100',
    //   resize_enabled: 'false',
    //   resize_maxHeight: '100',
    //   resize_maxWidth: '948',
    //   resize_minHeight: '100',
    //   resize_minWidth: '948',
    //   extraAllowedContent: 'span;ul;li;table;td;style;*[id];*(*);*{*}'
    //   //extraAllowedContent: 'style;*[id,rel](*){*}
    // });

    // Dropzone.autoDiscover = false;
    // $(".dropzone").dropzone({
    //   addRemoveLinks: true,
    //   removedfile: function (file) {
    //     var name = file.name;

    //     $.ajax({
    //       type: 'POST',
    //       url: 'upload.php',
    //       data: { name: name, request: 2 },
    //       sucess: function (data) {
    //         console.log('success: ' + data);
    //       }
    //     });
    //     var _ref;
    //     return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    //   }
    // });

    // $('.alert-close').on('click', function (c) { debugger
    //   $(this).parent().fadeOut('slow', function (c) {
    //   });
    // });
	

	
    
  }

  AddCourseForm(){ 
    var item = { 'Name':'' };
    this.CourseFormList.splice(this.CourseFormList.length, 0, item);
    var index = this.CourseFormList.length;
    index = 'EmailBody'+index;
    setTimeout(function(){
      myInput();
    },100);
    // CKEDITOR.replace(index, {
    //   height: '100',
    //   resize_enabled: 'false',
    //   resize_maxHeight: '100',
    //   resize_maxWidth: '948',
    //   resize_minHeight: '100',
    //   resize_minWidth: '948',
    //   extraAllowedContent: 'span;ul;li;table;td;style;*[id];*(*);*{*}'
    //   //extraAllowedContent: 'style;*[id,rel](*){*}
    // });
    // if (this.CourseFormList.length <= index + 1) {
      
    // }
    }
  
    DeleteCourseForm(item){ 
    var index = this.CourseFormList.indexOf(item);	
    this.CourseFormList.splice(index, 1);		
    }

    next_btn(){
      this.secondform = true;
      // for(var index=1; index<=this.CourseFormList.length; index++){
      //   CKEDITOR.replace('EmailBody'+index, {
      //     height: '100',
      //     resize_enabled: 'false',
      //     resize_maxHeight: '100',
      //     resize_maxWidth: '948',
      //     resize_minHeight: '100',
      //     resize_minWidth: '948',
      //     extraAllowedContent: 'span;ul;li;table;td;style;*[id];*(*);*{*}'
      //     //extraAllowedContent: 'style;*[id,rel](*){*}
      //   });
      // }
      setTimeout(function(){
        myInput();
      },100);
    } 

    back_btn(){
      this.secondform = false;
      setTimeout(function(){
        myInput();
      },100);
    }

    add(courseForm){

    }
}
