$(document).ready(function() {
    var sources = popSources();

	$(".descrip").hide();
    $(".info").click(function(e) {
        var $target = $(e.currentTarget);
        var desc = $target.parents("h2").siblings(".descrip");
        var targetIndex = desc.closest(".avblock").find("li").index(desc.closest("li"));

        if (desc.css("display") == "none") {
            console.log("Using target index " + targetIndex + " in display conditional");
            console.log("Using source: " + sources.originalcomps[targetIndex]);

            desc.find(".audioplayer").prepend(sources.originalcomps[targetIndex]);
            desc.show();
        } else {
            desc.find(".audioplayer").remove("audio");
            desc.hide();
            console.log("popping source and hiding");
        }
    });

    function popSources() {
        sources = {};

        sources.originalcomps = $("#original-compositions audio");
        sources.pianorecs = $("#piano-recordings audio");

        $("audio").remove();

        return sources;
    }

});

