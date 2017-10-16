$(document).ready(function() {
    $("audio").on("ended", function(e) {
        var nextItem = $(e.target).closest("li").next("li");
        var nextSong = $(nextItem).find("audio");

        if ($(nextSong)) {
            setAlternateBGs();
            $(".playlist button").attr("aria-expanded", "false");
            $(".avblock .descrip").hide(); // hide all descrips

            // set user's chosen track bg to white and display
            var desc = $(nextItem).find(".descrip");
            desc.closest("li").css('background', "white");
            desc.siblings("button").first().attr("aria-expanded", "true");
            desc.show();

            $(nextSong).prop("currentTime", 0).trigger("play");
        }
    });

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
