$(document).ready(function () { 
    $("#send").click(function() {
        var from = $("#from").val();
        var to = $("#to").val();
        var title = $("#title").val();
        var body = $("#body").val();
        
        if (from == "") {
            alert("You must insert a sender address!");
        } else {
            if (to == "") {
                alert("You must insert a recipient address!");
            } else {
                if (title == "") {
                    alert("You must insert a title!");
                } else {
                    if (body == "") {
                        alert("You must insert a body!");
                    } else {
                        //Send email
                    }
                }
            }
        }
    });
});