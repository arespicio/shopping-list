$(document).ready(function() {
	$(".hide").hide();

    //Adds item and category 
	$('#add-item').click(function() {
        var catName = $(".category-dropdown option:selected").text();
        var itemText = $('#item').val();
        $('.' + catName).show(); //category
        $('.list-' + catName).append('<li><span>' + itemText + '</span><i class="fa fa-times-circle show"></i>')//item
	});

	//Removes list item when circle "delete" is clicked
	$('.list').on('click', '.show', function(){
		$(this).parent('li').remove();
	});

	$('.list').on('click', 'span', function(){
		$(this).toggleClass('bought');
	});
});
