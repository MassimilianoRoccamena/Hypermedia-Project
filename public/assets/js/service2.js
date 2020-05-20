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

let item = "service"
let id = "0";

//Load service data
function loadData() {
    var h1 = $("#name");
    var p = $("#information_text");
    var locationDiv = $("#location");

    //Load page 2 informations
    fetch("/api/service2/0").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        h1.append(json[0].name);
        p.append(json[0].informations);
        var locations = json[0].location.split(" ");
        var h5 = "<h5>"
        for(i = 0; i < locations.length; i++){
            h5 = h5.concat(locations[i] + "<br>");
        }
         h5 = h5.concat("</h5>");
        locationDiv.append(h5);
    });

    //Load related people
    fetch("/api/" + item + "/" + id + "/people").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let row = $("#related-people");
        for(let i=0;i<json.length;i++){
            let col = $("<div class='col-sm-4'></div>");
            row.append(col);
            relatedItem = "person";
            col.load("/pages/components/" + relatedItem + "-card.html", function(responseTxt, statusTxt, xhr) {
                let relatedImage = col.find("#photo");
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo_url + "'></img>");
                let relatedTitle = col.find(".card-title");
                relatedTitle.append(json[i].name);
            }); 
        }
    });
}