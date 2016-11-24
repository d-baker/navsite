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

    // Dropdown menu button handling
	$(".dropdown-button").click(function(e) {
		$target = $(e.currentTarget);

		if ( $target.siblings(".nav-list").hasClass("closed") ) {
			$target.siblings(".nav-list").removeClass("closed");
			$target.siblings(".nav-list").addClass("open");
		} else {
			$target.siblings(".nav-list").removeClass("open");
			$target.siblings(".nav-list").addClass("closed");
		}
		
	});

    // Toggle desktop dropdown menu when tabbing through navigation
	$(".dropdown .nav-list").each(function() {
        $(this).find("li").last("a").focusout(function(e) {
            console.log("focusout");
    		$target = $(e.currentTarget).parents(".nav-list");
    	    $target.removeClass("open");
    		$target.addClass("closed");
        });
    });

    // Prevent dropdown menus from staying open on desktop layout if opened in mobile layout
    $(window).resize(function(){
        if (window.matchMedia("(min-width: 1300px)").matches) {
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed");		
        }
    });


});
