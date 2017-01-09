$(document).ready(function() {
    var sources = popSources();

    setAlternateBGs();

	$(".avblock .descrip").hide();

    // stop li click propogating to children
    $(".avblock li > .descrip").click(function(e) {
        e.stopPropagation();
    });
    $(".avblock li > .permalink").click(function(e) {
        e.stopPropagation();
    });

    $(".avblock .playlist > li").click(function(e) {
        setAlternateBGs();

        var $target = $(e.currentTarget);
        var desc = $target.find(".descrip");
        var targetIndex = $target.closest(".avblock").find(".playlist > li").index($target);

        if (desc.css("display") == "none") {
            $(".avblock .descrip").find("audio, video").remove(); // remove all multimedia
            $(".avblock .descrip").hide(); // hide all descrips

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
            desc.find(".audioplayer, .videoplayer").prepend(playlist[targetIndex]);
            desc.closest("li").css('background', "white");
            desc.show();
        } else {
            $(".avblock .descrip").find("audio, video").remove();
            $(".avblock .descrip").hide();
            console.log("popping source and hiding");
        }
    });

    function popSources() {
        sources = {};

        sources.originalcomps = $("#original-compositions audio, #original-compositions video");
        sources.pianorecs = $("#piano-recordings audio, #piano-recordings video");

        $(".avblock .descrip audio, .avblock .descrip video").remove();

        return sources;
    }

    function setAlternateBGs() {
        $.each($(".avblock"), function(i, el) {
            var LIs = $(this).find(".playlist > li");

            $.each(LIs, function (j, li) {
                if (j % 2 != 0) {
                    $(this).css("background", "#ddd");
                } else {
                    $(this).css("background", "none")
                }
            });
        });
    }

});

