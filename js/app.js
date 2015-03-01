$(document).ready(function(){
	
	$(".hide").hide();

    //Adds item and category 
	$('#add-item').click(function() {
        var catName = $(".category-dropdown option:selected").text();
        var itemText = $('#item').val();
        if (itemText == '')  return;

        $('.' + catName).show(); //category
        $('.list-' + catName).append('<li class="ui-state-default"><span title="purchased">' + itemText + '</span><i class="fa fa-times-circle show" title="delete"></i>');//item
	});

    //resets item input area after "add item" clicked
        $(this).closest('form').find("input[type=text]").val("");

	//Removes list item when circle "delete" is clicked
	$('.list').on('click', '.show', function(){
		$(this).parent('li').remove();
	});
    
    //Crosses off list item when clicked
	$('.list').on('click', 'span', function(){
		$(this).toggleClass('bought');
	});

    //adds sortable function to categories and items in list
	$('#sortable').sortable();
	$('#sortable').disableSelection();
});
