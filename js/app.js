$(document).ready(function() {
	$(".hide").hide();

    //Adds item and category 
	$('#add-item').click(function() {
        var catName = $(".category-dropdown option:selected").text();
        var itemText = $('#item').val();

        if (itemText == '')  return;

        $('.' + catName).show(); //category
        $('.list-' + catName).append('<li class="ui-state-default"><span title="purchased">' + itemText + '</span><i class="fa fa-times-circle show" title="delete"></i>')//item
	});

	//Removes list item when circle "delete" is clicked
	$('.list').on('click', '.show', function(){
		$(this).parent('li').remove();
	});
    
    //Crosses off list item when clicked
	$('.list').on('click', 'span', function(){
		$(this).toggleClass('bought');
	});

	$('#sortable').sortable();
	$('sortable').disableSelection();
});
