$(document).ready(function() {
	$('#add-item').click(function() {
		$('.produce-list').append('<li>' + $('#item').val() + '<i class="fa fa-times-circle show"></i></li>')  
	});

});