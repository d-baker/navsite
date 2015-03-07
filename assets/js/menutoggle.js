$(document).ready(function() {
	$("nav").hide();
	$(".dropdown .nav-list").hide();

	$("#menubutton").click(function() {

		if ( $("#menubutton").css("display") != "none" ) {

			if ( $("nav").css("display") != "none" ) {
				$("nav").hide();
			} else {
				$("nav").show();
			}
		}

	});

	$(".dropdown > a").click(function(e) {
		$target = $(e.currentTarget);

		if ( $("#menubutton").css("display") != "none" ) {

			if ( $target.siblings(".nav-list").css("display") != "none" ) {
				$target.siblings(".nav-list").hide();

			} else {
				$target.siblings(".nav-list").show();

			}
		}

	});

});
