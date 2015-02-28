$(document).ready(function() {
	$(".hide").hide();

	$('#add-item').click(function() {
        var catName = $(".category-dropdown option:selected").text();
        $('.' + catName).show();

        $('.list-' + catName).append('<li>' + $('#item').val() + '<i class="fa fa-times-circle show"></i>')
	});

	// $('.list').on('mouseenter', 'li', function(){
	// 	$(this).append( '<i class="fa fa-times-circle delete"></i></li>')
	//     });
	// $('.list').on('mouseleave', 'li', function(){
	// 	$('li').remove( '.fa-times-circle')
	// 	});
});
