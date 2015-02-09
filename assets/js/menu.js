$(document).ready(function() {
    $("li.dropdown ul").hide();
    $("li.dropdown").on("mouseenter mouseleave", function(e) {
        var $target = $(e.currentTarget);
        $target.children("ul").show();

        if (e.type == "mouseleave") {
            $target.children("ul").hide();
        }

    });
});
