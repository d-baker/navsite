$(document).ready(function() {
    var sources = popSources();

	$(".descrip").hide();

    $(".info").click(function(e) {
        var $target = $(e.currentTarget);
        var desc = $target.parents("h2").siblings(".descrip");
        var targetIndex = desc.closest(".avblock").find("li").index(desc.closest("li"));

        if (desc.css("display") == "none") {
            $(".descrip").find("audio").remove(); // remove all audios
            $(".descrip").hide(); // hide all descrips

            // figure out which playlist the chosen track belongs to
            var avBlockID = desc.closest(".avblock").attr("id");
            var playlist;
            if (avBlockID == "original-compositions") {
                playlist = sources.originalcomps;
            } else if (desc.closest(".avblock").attr("id") == "piano-recordings") {
                playlist = sources.pianorecs;
            } else {
                console.log("Playlist " + avBlockID + " not found");
            }

            console.log("Using target index " + targetIndex + " in display conditional");
            console.log("Using source: " + playlist[targetIndex]);

            // add audio to and show user's chosen descrip
            desc.find(".audioplayer").prepend(playlist[targetIndex]);
            desc.show();

        } else {
            $(".descrip").find("audio").remove();
            $(".descrip").hide();
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

