$(document).ready(function() {
    if (Modernizr.svgasimg) {
        $("img").each(function() {
            var svgSrc = $(this).attr('src').replace(".png", ".svg");
            $(this).attr('src', svgSrc);
        });
    }
});
