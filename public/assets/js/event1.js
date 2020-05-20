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

let item = "event"
let relatedItem;
let id = "0";
//Load event data
function loadData() {
    
    //Load event informations for page 1
    fetch("/api/" + item + "1/"+ id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        var h1 = $("#name");
        var p = $("#description_text");
        h1.append(json[0].name);
        p.append(json[0].description);

        //Load photo gallery 
        let gallery = $("#gallery");
        for (let i = 0; i < json[0].photo_url.length; i++) {
            let col = $("<div class='col-lg-3 col-md-4 col-6'></div>");
            col.load("/pages/components/photo-gallery.html", function(responseTxt, statusTxt, xhr){
                let image = col.find("#image");
                image.append("<img class='img-fluid img-thumbnail' src='" + json[0].photo_url[i] + "' alt=''>");
            })
            gallery.append(col);
        }
    });
    //Load related services
    fetch("/api/" + item + "/" + id + "/services").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let row = $("#related-services");
        for(let i=0;i<json.length;i++){
            let col = $("<div class='col-sm-4'></div>");
            row.append(col);
            relatedItem = "service";
            col.load("/pages/components/" + relatedItem + "-card.html", function(responseTxt, statusTxt, xhr) {
                let relatedImage = col.find("#photo");
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo_url + "'></img>");
                let relatedTitle = col.find(".card-title");
                relatedTitle.append(json[i].name);
            }); 
        }
    });

     //Load related events
     fetch("/api/" + item + "/" + id + "/related").then(function(response){
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
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo_url + "'></img>");
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