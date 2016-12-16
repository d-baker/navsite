$(document).ready(function() {
	$("header nav").addClass("closed");
	$(".dropdown .nav-list").addClass("closed");

    // Mobile menu toggle button handling
	$("#menubutton").click(function() {
		if ( $("header nav").hasClass("closed") ) {
			$("header nav").removeClass("closed");
			$("header nav").addClass("open");
		} else if ( $("header nav").hasClass("open") ) {
			$("header nav").removeClass("open");
			$("header nav").addClass("closed");		
		}
	});

	// Click on "link" to open dropdown menu on desktop AND mobile
	$(".dropdown-landing").click(function(e) {
		e.preventDefault();
		$target = $(e.currentTarget);

		if ( $target.siblings(".nav-list").hasClass("closed") ) {
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed");

			$target.siblings(".nav-list").removeClass("closed");
			$target.siblings(".nav-list").addClass("open");
		} else {
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed");

			$target.siblings(".nav-list").removeClass("open");
			$target.siblings(".nav-list").addClass("closed");
		}
	});

    // Dropdown menu button handling, for mobile view
	$(".dropdown-button").click(function(e) {
		$target = $(e.currentTarget);

		if ( $target.siblings(".nav-list").hasClass("closed") ) {
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed");

			$target.siblings(".nav-list").removeClass("closed");
			$target.siblings(".nav-list").addClass("open");
		} else {
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed");

			$target.siblings(".nav-list").removeClass("open");
			$target.siblings(".nav-list").addClass("closed");
		}
		
	});


    $(window).resize(function(){
        if (window.matchMedia("(min-width: 900px)").matches) {
    		// Prevent dropdown menus from staying open on desktop layout if opened in mobile layout
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed");	
        }
    });


});
