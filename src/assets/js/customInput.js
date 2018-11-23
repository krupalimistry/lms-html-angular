 
function myInput(){
	
	// INPUT
	$('input').focus(function(){
	  $(this).parents('.form-group').addClass('focused');
	});
	$('select').focus(function(){
	  $(this).parents('.form-group').addClass('focused');
	});
	$('textarea').focus(function(){
	  $(this).parents('.form-group').addClass('focused');
	});

	$('input').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
		$(this).removeClass('filled');
		$(this).parents('.form-group').removeClass('focused');  
	  } else {
		$(this).addClass('filled');
	  }
	  $("#StartDate").addClass('filled');
	$("#StartDate").parents('.form-group').addClass('focused');
	$("#EndDate").addClass('filled');
	$("#EndDate").parents('.form-group').addClass('focused');
	});
	$('textarea').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
		$(this).removeClass('filled');
		$(this).parents('.form-group').removeClass('focused');  
	  } else {
		$(this).addClass('filled');
	  }
	});
	$('select').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
		$(this).removeClass('filled');
		$(this).parents('.form-group').removeClass('focused');  
	  } else {
		$(this).addClass('filled');
	  }
	});

	
	$('input').each(function() {
			if($(this).attr('ng-reflect-model')){
				 $(this).addClass('filled');
				$(this).parents('.form-group').addClass('focused');
			}
		});
		$('textarea').each(function() {
			if($(this).attr('ng-reflect-model')){
				 $(this).addClass('filled');
				$(this).parents('.form-group').addClass('focused');
			}
		});
		$('select').each(function() {
			if($(this).attr('ng-reflect-model')){
				 $(this).addClass('filled');
				$(this).parents('.form-group').addClass('focused');
			}
		});
	
		$('.file_upload input[type="file"]').change(function(e){
			var length = e.target.files.length;
			var fileName = e.target.files[0].name;
			if(length==1){
				$('.file_upload input[type="text"]').val(fileName);
			} else {
				$('.file_upload input[type="text"]').val(length+' files selected');
			}
		});
	
	// END INPUT
	// DATE PICKER
// $('.form_date').datetimepicker({
// 	weekStart: 1,
// 	todayBtn:  1,
// autoclose: 1,
// todayHighlight: 1,
// startView: 2,
// minView: 2,
// forceParse: 0
// });
// END DATE PICKER
}

