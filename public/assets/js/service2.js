$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Services", "/pages/services.html");
        addLink("Name", "/pages/service1.html");
        addLabel("Informations");
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

//Load service data
function loadData() {
    var h1 = $("#name");
    var p = $("#information_text");
    var locationDiv = $("#location");

    fetch("/api/service/0/page2").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        h1.append(json.name);
        p.append(json.informations);
        var locations = json.location.split(" ");
        var h5 = "<h5>"
        for(i = 0; i < locations.length; i++){
            h5 = h5.concat(locations[i] + "<br>");
        }
         h5 = h5.concat("</h5>");
        locationDiv.append(h5);
    });
}