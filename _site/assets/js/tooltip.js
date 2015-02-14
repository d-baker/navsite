$(document).ready(function(){

    $(".tooltip").on("mouseenter mouseleave", function(e){
        var $target = $(e.currentTarget);
        var text = $target.attr("title");

		if ($target.css("text-align") == "right") {
        	$("<p class=\"tooltiptext\"> "+text+" </p>").insertBefore($target);
		} else {
			$("<p class=\"tooltiptext\"> "+text+" </p>").insertAfter($target);

		}
            
        if (e.type == "mouseleave") {
            $(".tooltiptext").remove();
        }

    });

});
