$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Events", "/pages/events.html");
        addLabel("Label");
    });

    //Data load
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

let id = getParameter();
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
        let name = $("#name");
        let info = $("#info");
        let date = $("#date");
        let location = $("#location");
        name.append(json[0].name);
        info.append(json[0].pract_info);
        date.append(json[0].date);
        location.append(json[0].location);
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
        let href = $("<a href='/pages/person.html?id=" + json[0].id_person +"'><h5>" + json[0].name + "</h5></a>")
    });
}
//----------------------------------------- GET URL PARAMETER -------------------------------------------

function getParameter(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var p = url.searchParams.get("id");
    return p;
}