$(document).ready(function() { 
    $("#backtotop").hide();

    $(window).scroll(function() {
		var scrollPercent = ($(window).scrollTop() / $(document).height()) * 100;
        if (scrollPercent > 10) {
            $("#backtotop").show();
        } else {
            $("#backtotop").hide();
        }
    });
});
