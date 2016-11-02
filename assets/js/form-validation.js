$(document).ready(function() {

    var errorsFound = false;
    var inputs = $("input, textarea").filter("[required]");

    for (i = 0; i < inputs.length; i++) {
        $(inputs[i]).focusout(function() {
            validate(inputs[i]);
        });
        
    }

    function validate(input) {
        if (valid( $(input).val() ) && notRobot()) {

        } else {
            errorsFound = true;

            // TODO not working
            var errorMessage = $(input).siblings(".error");

            errorMessage.show();
        }
    }

    function valid(input) {
        if ($(input).val() == "") {
            console.log("input " + $(input).attr("name") + " is empty");
            return false;
        }
        return true;
    }

    function notRobot() {
        if ($("#antirobot").val() != "5") {
            return false;
        }
        console.log("not a robot")
        return true;
    }

    $("#submit").click(function(e) {
        if (errorsFound == true) {
            e.preventDefault();
            $(".summary-error").show();
            $("#submit").effect("shake"); // nuh-uh!
        }
    });

});
