$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("People", "/pages/people.html");
        addLabel("Name");
    });

    loadData();
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

//----------------------------------------- DATA LOAD -------------------------------------------

//Load event data
function loadData() {
    var name = $("#name");
    var role = $("#role");
    var text = $("#text");
    var imageDiv = $("#image");
    var email = $("#email");
    var number = $("#number"); 

    fetch("/api/person/0").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        name.append(json.name);
        role.append(json.role);
        text.append(json.description);
        let image = $("<img class='p-3' src='" + json.photo_url + "' style='border-radius: 50%; width: 100%;'>");
        imageDiv.append(image);
        email.append(json.email_address);
        number.append(json.phone_number);
    });
}