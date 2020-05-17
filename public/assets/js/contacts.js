$(document).ready(function () { 
    $("#send").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var title = $("#title").val();
        var body = $("#body").val();
        
        if (name == "") {
            alert("You must insert your name!");
        } else {
            if (email == "") {
                alert("You must insert your email!");
            } else {
                if (title == "") {
                    alert("You must insert a title!");
                } else {
                    if (body == "") {
                        alert("You must insert a body!");
                    } else {
                        //Send email
                        alert("Message sent!");
                    }
                }
            }
        }
    });
});