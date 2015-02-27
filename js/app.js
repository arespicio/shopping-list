$(document).ready(function() {
	$(".hide").hide();

	$('#add-item').click(function() {
        var catName = $(".category-dropdown option:selected").text();
        $('.' + catName).show();

		$('.list-produce').append('<li>' + $('#item').val() + '<i class="fa fa-times-circle show"></i></li>')  
	});

});
