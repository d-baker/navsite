$(document).ready(function() { 
    $("#backtotop").hide();

    $(window).scroll(function() {

    	if (! window.matchMedia("(min-width: 900px)").matches) {

			var scrollPercent = ($(window).scrollTop() / $(document).height()) * 100;
	        if (scrollPercent > 10) {
	            $("#backtotop").show();
	        } else {
	            $("#backtotop").hide();
	        }
	        
	    }

    });
});
