$(document).ready(function() {

    $("#submit").click(function(e) {
        console.log($("#antirobot").val());
        if ($("#antirobot").val() != "5") {
            e.preventDefault();
            $(".summary-error").show();
            $("#submit").effect("shake"); // nuh-uh!
        }
    });

});
