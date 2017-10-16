$(document).ready(function() {
    setAlternateBGs();

    $(".playlist button").attr("aria-expanded", "false");
	$(".avblock .descrip").hide();


    // stop li clicks propogating to children
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

        if (desc.css("display") == "none") {
            $(".playlist button").attr("aria-expanded", "false");
            $(".avblock .descrip").hide(); // hide all descrips

            // set user's chosen track bg to white and display
            desc.closest("li").css('background', "white");
            desc.siblings("button").first().attr("aria-expanded", "true");
            desc.show();
        } else {
            $(".playlist button").attr("aria-expanded", "false");
            $(".avblock .descrip").hide();
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


    /**** Prevent simultaneous playing of 2 or more media els ****/

    var avEls = $("audio, video");

    $(avEls).each(function() {
        var chosenMedia = this;

        // when the user chooses to play a new media item...
        this.onplay = function() {
            // pause all other media
            $(avEls).each(function() {
                if (this !== chosenMedia) {
                    $(this).closest(".descrip").siblings("button").find("h3").removeClass("playing");
                    this.pause();
                } else {
                    $(this).closest(".descrip").siblings("button").find("h3").addClass("playing");
                }
            });
        }

        this.onpause = function() {
            $(this).closest(".descrip").siblings("button").find("h3").removeClass("playing");
        }

        this.onended = function() {
            $(this).closest(".descrip").siblings("button").find("h3").removeClass("playing");
        }
    });

});

