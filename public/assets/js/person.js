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

let item = "person"
let id = getParameter();
let relatedItem;

//Load event data
function loadData() {
    
    //Load informations
    fetch("/api/" + item + "/" + id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        var name = $("#name");
        var role = $("#role");
        var text = $("#text");
        var photo = $("#photo");
        var email = $("#email");
        var number = $("#number"); 
        
        name.append(json[0].name);
        role.append(json[0].role);
        text.append(json[0].description);
        let img = $("<img class='p-3' src='" + json[0].photo_url + "' style='border-radius: 50%; width: 100%;'>");
        photo.append(img);
        email.append(json[0].email_address);
        number.append(json[0].phone_number);
    });

    //Load related services
    fetch("/api/" + item + "/" + id + "/services").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let servicesList = $("#related-services");
        for(let i = 0; i < json.length; i++){
            let service = "<a href='/pages/service1.html?id=" + json[i].id_service +"'><h6>";
            service = service.concat(json[i].name);
            service = service.concat("</h6></a>");
            serviceElement = $(service);
            servicesList.append(serviceElement);
        }
    });

    //Load related events
    fetch("/api/" + item + "/" + id + "/events").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let row = $("#related-events");
        for(let i=0;i<json.length;i++){
            let col = $("<div class='col-sm-4'></div>");
            row.append(col);
            relatedItem = "event";
            col.load("/pages/components/" + relatedItem + "-card.html", function(responseTxt, statusTxt, xhr) {
                let relatedImage = col.find("#photo");
                let eventLink = col.find("#eventLink");
                let href = $("<a href='/pages/event1.html?id=" + json[i].id_event + "'><h5 class='card-title mb-3'></h5></a>");
                eventLink.append(href);
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo_url[0] + "'></img>");
                let relatedTitle = col.find(".card-title");
                relatedTitle.append(json[i].name);
                let relatedDate = col.find("#date");
                relatedDate.append(json[i].date);
                let relatedLocation = col.find("#location");
                relatedLocation.append(json[i].location);
            }); 
        }
    });

}
//----------------------------------------- GET URL PARAMETER -------------------------------------------

function getParameter(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var p = url.searchParams.get("id");
    return p;
}