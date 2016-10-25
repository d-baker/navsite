$(document).ready(function() {
	$(".descrip").hide();
    $("a.info").click(function(e) {
        var $target = $(e.currentTarget);
        var desc = $target.parents("h2").siblings(".descrip");
        if (desc.css("display") == "none") {
            desc.show();
        } else {
            desc.hide();
        }
    });
});

