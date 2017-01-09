$(document).ready(function() {
    setAlternateBGs();

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
            $(".avblock .descrip").hide(); // hide all descrips

            // set user's chosen track bg to white and display
            desc.closest("li").css('background', "white");
            desc.show();
        } else {
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

});

