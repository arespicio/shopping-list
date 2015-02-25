$(document).ready(function() {
	$('#add-item').click(function() {
		$('.list-1').append('<li>' + $('#item').val() + '<i class="fa fa-times-circle show"></i></li>')  
	});

});