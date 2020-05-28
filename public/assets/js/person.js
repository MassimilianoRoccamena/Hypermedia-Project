$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("People", "/pages/people.html");
        addLabel("Person", "info-person");

        loadData();
    });
});

//------------------------------------- ORIENTATION INFO -----------------------------------------

//Create orientation info label
function addLabel(text, identifier="") {
    let li = null;
    if (identifier != "") {
        li = $("<li class='breadcrumb-item' id='"+identifier+"'></li>")
    } else {
        li = $("<li class='breadcrumb-item'></li>")
    }
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

//Load person data
function loadData() {
    
    //Load informations
    fetch("/api/" + item + "/" + id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        var info = $("#info-person");
        var name = $("#name");
        var role = $("#role");
        var description = $("#description-text");
        var photo = $("#photo");
        var email = $("#email");
        var number = $("#number"); 
        
        info.text(json.name);
        document.title = json.name;
        name.append(json.name);
        role.append(json.role);
        description.append(json.description);
        let img = $("<img class='p-3' src='" + json.photo_url + "' style='border-radius: 50%; width: 100%;'>");
        photo.append(img);
        email.append(json.email_address);
        number.append(json.phone_number);
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
            let service = "<a href='/pages/service1.html?id=" + json[i].id_service +"'><h6 class='link-custom'>";
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

        //No data
        if(json.length == 0){
            let error = $("<h4>No events found<h4>");
            row.append(error)

        //Some data
        } else {
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
                    relatedDate.append(json[i].date.substring(0,10));
                    let relatedLocation = col.find("#location");
                    relatedLocation.append(json[i].location);
                }); 
            }
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