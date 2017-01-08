$(document).ready(function() {
	$("header nav").addClass("closed");
	$(".dropdown .nav-list").addClass("closed");

    // Mobile menu toggle button handling
	$("#menubutton").click(function() {
		if ( $("header nav").hasClass("closed") ) {
			$("header nav").removeClass("closed");
			$("header nav").addClass("open");
			$("#menubutton").attr("aria-expanded", "true")
		} else if ( $("header nav").hasClass("open") ) {
			$("header nav").removeClass("open");
			$("header nav").addClass("closed");	
			$("#menubutton").attr("aria-expanded", "false")	
		}
	});

	if (! window.matchMedia("(min-width: 900px)").matches) {
		// if on mobile, enable clicking on top level link to open dropdown menu
		setMobileDropdownAttributes();
		openWithLandingLink();
	}

	$("body").click("function") {
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed");
	}


    $(window).resize(function(){
        if (window.matchMedia("(min-width: 900px)").matches) {
    		// Prevent dropdown menus from staying open on desktop layout if opened in mobile layout
			$(".dropdown .nav-list").removeClass("open");
			$(".dropdown .nav-list").addClass("closed")

        	// Remove event handler that enforces preventDefault, to ensure we get default link functionality back on desktop
        	unsetMobileDropdownAttributes();
        	$(".dropdown-landing").unbind("click");
        } else {
        	// Bind default-preventing click handler for mobile
        	// TODO when called here, preventDefault is working but other actions don't appear to be rebound??!
        	setMobileDropdownAttributes();
        	openWithLandingLink();
        }
    });

    function setMobileDropdownAttributes() {
    	$(".dropdown-landing").attr("role", "button");
    	$("#music-landing").attr("aria-label", "open music dropdown menu");
        $("#geek-landing").attr("aria-label", "open tech dropdown menu");
		$("#menubutton, .dropdown-landing").attr("aria-expanded", "false")
    }
    
    function unsetMobileDropdownAttributes() {
    	$(".dropdown-landing").removeAttr("role");
    	$(".dropdown-landing").removeAttr("aria-label");
        $(".dropdown-landing").removeAttr("aria-expanded");
    }

	function openWithLandingLink() {
		$(".dropdown-landing").click(function(e) {
			e.preventDefault();
			$target = $(e.currentTarget);

			if ( $target.attr("aria-expanded") == "false" ) {
				$target.attr("aria-expanded", "true");
			} else {
				$target.attr("aria-expanded", "false");			
			}

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
	}

});
