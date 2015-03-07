$(document).ready(function() {
	$("nav").hide();

	$("#menubutton").click(function() {

		if ( $("#menubutton").css("display") != "none" ) {

			if ( $("nav").css("display") != "none" ) {
				$("nav").hide();
			} else {
				$("nav").show();
			}
		}

	});
});
