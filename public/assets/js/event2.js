$(document).ready(function () {

    //Orientation info
    let id = getParameter();
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Events", "/pages/events.html");
        addLink("Event", "/pages/event1.html?id=" + id, "info-event");
        addLabel("Informations");

        //Data load
        loadData();
    });
});

//------------------------------------- ORIENTATION INFO -----------------------------------------

//Create orientation info label
function addLabel(text) {
    let li = $("<li class='breadcrumb-item'></li>")
    li.text(text);
    $("#orientation-ol").append(li);
}

//Create orientation info link
function addLink(text, link, identifier="") {
    let li = null;
    if (identifier != "") {
        li = $("<li class='breadcrumb-item'><a id='"+ identifier +"' href='" + link + "'>"+ text +"</a></li>");
    } else {
        li = $("<li class='breadcrumb-item'><a href='" + link + "'>"+ text +"</a></li>");
    }
    $("#orientation-ol").append(li);
}

//----------------------------------------- DATA LOAD -------------------------------------------

let id = getParameter();

//Print truncated info
function truncInfo(text, len) {
    let info = $("#info-event");
    let text2 = text.substring(0,len+1);
    if (text2.length < text.length) {
        text = text2 + "...";
    } else {
        text = text2;
    }
    info.text(text);
    document.title = text;
}

//Load event data
function loadData() {
 
    //Load page2 informations
    fetch("/api/event2/" + id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        truncInfo(json.name, 25);
        let page1Link = $("#page1Link");
        let href = $("<a href='/pages/event1.html?id=" + id +"' class='btn btn-info btn-custom' role='button'>Description</a>");
        page1Link.append(href);
        let articleLink = $("#articleLink");
        href = $("<a href='/pages/event-articles.html?id=" + id +"' class='btn btn-info btn-custom' role='button'>Articles</a>");
        articleLink.append(href);
        let name = $("#name");
        let info = $("#info");
        let date = $("#date");
        let location = $("#location");
        name.append(json.name);
        info.append(json.pract_info);
        date.append(json.date.substring(0,10));
        location.append(json.location);

        let iframe = "<iframe src='https://maps.google.com/maps?q=" + json.location  + "&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' style='height: 50vh; width: 80%;'></iframe>";
        let map = $("#map-container-google-9");
        map.append($(iframe));
    });

    //Load event contact
    fetch("/api/event/" + id + "/person").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let personLink = $("#personLink");
        let href = $("<a href='/pages/person.html?id=" + json.id_person +"'><h5 class='link-custom'>" + json.name + "</h5></a>")
        personLink.append(href);
    });
}
//----------------------------------------- GET URL PARAMETER -------------------------------------------

function getParameter(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var p = url.searchParams.get("id");
    return p;
}