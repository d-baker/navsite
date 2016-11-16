$(document).ready(function() {
	if ( $("#menubutton").css("display") != "none" ) {
		$("header nav").hide();
		$(".dropdown .nav-list").hide();
	}
	$(window).resize(function() {
		if ( $("#menubutton").css("display") != "none" ) {
			$("header nav").hide();
			$(".dropdown .nav-list").hide();
		} else {
			$("header nav").show();
			$(".dropdown .nav-list").css("display", "");
		}
	});


	$("#menubutton").click(function() {

		if ( $("#menubutton").css("display") != "none" ) {

			if ( $("header nav").css("display") != "none" ) {
				$("header nav").hide();
			} else {
				$("header nav").show();
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
