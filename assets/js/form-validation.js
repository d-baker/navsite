$(document).ready(function() {

    var errorsFound = true;
    var inputs = $("input, textarea").filter("[required]");

    for (i = 0; i < inputs.length; i++) {
        inp = $(inputs).get(i);
        $(inp).change(function() {
            validate(inp);
        });
        
    }

    function validate(input) {
        if (invalid( $(input).val() ) || isARobot() ) {
        } else {
            errorsFound = false;
            //var errorMessage = $(input).siblings(".error").get(0);
            //$(errorMessage).show();
        }
    }

    function invalid(input) {
        if (input == undefined || input.trim() == "") {
            console.log("input " + $(input).attr("name") + " is empty");
            return true;
        }
        return false;
    }

    function isARobot() {
        console.log("robot: " + $("#antirobot").val());

        if ($("#antirobot").val() != "5") {
            console.log("robot!!")
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
