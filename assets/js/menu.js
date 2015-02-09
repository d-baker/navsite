$(document).ready(function() {
    $(".dropdown .nav-list").hide();
    $(".dropdown a").on("mouseenter mouseleave", function(e) {
        var $target = $(e.currentTarget);
        $target.next(".dropdown .nav-list").show();

        if (e.type == "mouseleave") {
            $target.next(".dropdown .nav-list").hide();
        }

    });
});
