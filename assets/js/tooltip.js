// falls back to pure css implementation
/*
$(document).ready(function(){
    
    $("p.tooltip").hide();

    $("li a").on("mouseenter mouseleave", function(e){
        var $tooltip = $(this).siblings("p.tooltip")

        if ($tooltip != null) { 
            if (e.type == "mouseleave") {
                $tooltip.hide();
            } else {
                $tooltip.show();
            }
        }

    });

});
*/