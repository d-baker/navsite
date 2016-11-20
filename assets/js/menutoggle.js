$(document).ready(function() {
	$("header nav").addClass("closed");
	$(".dropdown .nav-list").addClass("closed");

	$("#menubutton").click(function() {
		if ( $("header nav").hasClass("closed") ) {
			$("header nav").removeClass("closed");
			$("header nav").addClass("open");
		} else if ( $("header nav").hasClass("open") ) {
			$("header nav").removeClass("open");
			$("header nav").addClass("closed");		
		}
	});

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

});
