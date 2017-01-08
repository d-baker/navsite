$(document).ready(function() {
	$("header nav").addClass("closed");
	closeAllDropdowns();

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

	// if on mobile...
	if (! window.matchMedia("(min-width: 900px)").matches) {
		setMobileDropdownAttributes();

		// enable clicking on top level link to open dropdown menu
		openWithLandingLink();
	}


    $(window).resize(function(){
        if (window.matchMedia("(min-width: 900px)").matches) {
    		// Prevent dropdown menus from staying open on desktop layout if opened in mobile layout
			closeAllDropdowns();
        	unsetMobileDropdownAttributes();
        } else {
        	setMobileDropdownAttributes();
        }
    });


	function openWithLandingLink() {
		$(".dropdown-landing").click(function(e) {
			if (! window.matchMedia("(min-width: 900px)").matches) {

				e.preventDefault();
				$target = $(e.currentTarget);

				toggleAriaExpanded();

				if ( $target.siblings(".nav-list").hasClass("closed") ) {
					closeAllDropdowns();
					openDropdown($target);
				} else {
					closeAllDropdowns();
					closeDropdown($target);
				}

			}	
		});
	}

	function toggleAriaExpanded(target) {
		if ( $target.attr("aria-expanded") == "false" ) {
			$target.attr("aria-expanded", "true");
		} else {
			$target.attr("aria-expanded", "false");			
		}
	}

    function closeAllDropdowns() {
		$(".dropdown .nav-list").removeClass("open");
		$(".dropdown .nav-list").addClass("closed")
    }

    function closeDropdown(target) {
		$target.siblings(".nav-list").removeClass("open");
		$target.siblings(".nav-list").addClass("closed");
    }

    function openDropdown(target) {
		$target.siblings(".nav-list").removeClass("closed");
		$target.siblings(".nav-list").addClass("open");
    }

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

});
