
jQuery(document).ready(function(
	) {

  //search
    $('.searchToggler').on('click', function(e) {
        e.preventDefault();
        $('.header01Search').addClass('active');
    });
    
     $('.cancleSearch').on('click', function(e) {
        e.preventDefault();
        $('.header01Search input').val('');
        $('.header01Search').removeClass('active');
    });

	//top-search
	 $('.search-icon').on('click', function() {
	    $('.search-bar').slideToggle();
	    $( "input[type='search']" ).focus();
	  });




//main		
});