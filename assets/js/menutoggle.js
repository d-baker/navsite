$(document).ready(function() {
	closeAllDropdowns();

    // Mobile menu toggle button handling
	$("#menubutton").click(function() {
		var $topLevelNav = $("#top-level-nav");
		if ( $topLevelNav.hasClass("closed") ) {
			$topLevelNav.removeClass("closed");
			$topLevelNav.addClass("open");

			$("#menubutton").attr("aria-expanded", "true")
		} else if ( $topLevelNav.hasClass("open") ) {
			$topLevelNav.removeClass("open");
			$topLevelNav.addClass("closed");	

			$("#menubutton").attr("aria-expanded", "false")	
		}
	});

	// if on mobile...
	if (! window.matchMedia("(min-width: 900px)").matches) {
		setMobileDropdownAttributes();

		// enable clicking on top level link to open dropdown menu
		openWithLandingLink();
	} else {
		unsetMobileDropdownAttributes();
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
		$("header nav.dropdown a.dropdown-landing").click(function(e) {
			if (! window.matchMedia("(min-width: 900px)").matches) {

				e.preventDefault();
				$target = $(e.currentTarget);

				toggleAriaExpanded();

				if ( $target.parent("nav.dropdown").hasClass("closed") ) {
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
		$("header nav.dropdown").removeClass("open");
		$("header nav.dropdown").addClass("closed")
    }

    function closeDropdown(target) {
		$target.parent("nav.dropdown").removeClass("open");
		$target.parent("nav.dropdown").addClass("closed");
    }

    function openDropdown(target) {
		$target.parent("nav.dropdown").removeClass("closed");
		$target.parent("nav.dropdown").addClass("open");
    }

    function setMobileDropdownAttributes() {
    	$("header nav.dropdown a.dropdown-landing").attr("role", "button");
    	$("#music-landing").attr("aria-label", "open music dropdown menu");
        $("#geek-landing").attr("aria-label", "open tech dropdown menu");
		$("#menubutton, header nav.dropdown a.dropdown-landing").attr("aria-expanded", "false")
    }
    
    function unsetMobileDropdownAttributes() {
    	var $menuButton = $("header #menubutton");
    	var $dropdownHeadings = $("header nav.dropdown a.dropdown-landing");
    	var $dropdownMenu = $("header nav.dropdown");

    	$menuButton.removeAttr("aria-expanded");

    	$dropdownHeadings.removeAttr("role");
    	$dropdownHeadings.removeAttr("aria-label");
        $dropdownHeadings.removeAttr("aria-expanded");

        $dropdownHeadings.removeClass("closed");
        $dropdownHeadings.addClass("open");
    }

});
