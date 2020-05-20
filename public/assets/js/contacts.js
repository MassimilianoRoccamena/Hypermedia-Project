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

//Load contacts data
function LoadData() {

    //Load content
    fetch("/api/contacts").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let ul = $("#contacts-ul");
        
        for (let i=0; i<json.length; i++) {
            let li = $("<li></li>")
            let name = $("<h4></h4>");
            let phone = $("<h4></h4>");
            let email = $("<h4></h4>");
            let location = $("<h4></h4>");

            elem = json[i];
            name.text(elem.name);
            li.append(name);
            phone.text(elem.phone);
            li.append(phone);
            email.text(elem.email);
            li.append(email);
            location.text(elem.location);
            li.append(location)
            ul.append(li);
        }
    });
}

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
                        //Send email
                        alert("Message sent!");
                    }
                }
            }
        }
    });
}