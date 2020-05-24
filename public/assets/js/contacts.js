$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLabel("Contacts");
    });

    //Send button
    sendHandler();
});

//------------------------------------- ORIENTATION INFO -----------------------------------------

//Create orientation info label
function addLabel(text) {
    let li = $("<li class='breadcrumb-item'></li>")
    li.text(text);
    $("#orientation-ol").append(li);
}

//Create orientation info link
function addLink(text, link) {
    let li = $("<li class='breadcrumb-item'><a href='" + link + "'>"+ text +"</a></li>")
    $("#orientation-ol").append(li);
}

//--------------------------------------- SEND BUTTON -------------------------------------------

//Handles send click
function sendHandler() {
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
                        let message = {"name":name,"email":email,"title":title,"body":body}
                        
                        $.post("/api/message", message, function() {
                            alert("Message sent");
                        })
                    }
                }
            }
        }
    });
}