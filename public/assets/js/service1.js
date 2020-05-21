$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Services", "/pages/services.html");
        addLabel("Name");
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
    let item = "service"
    let id = getParameter();
    let relatedItem;

    fetch("/api/" + item + "1/" + id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let h1 = $("#name");
        let page2Link = $("#page2Link");
        let href = $("<a href='/pages/service2.html?id=" + id + "' class='btn btn-info' role='button'>Go to informations</a>");
        let p = $("#presentation_text");
        h1.append(json[0].name)
        page2Link.append(href);
        p.append(json[0].presentation)

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

    //Load related services
    fetch("/api/" + item + "/" + id + "/related").then(function(response){
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
                let serviceLInk = col.find("#serviceLink");
                let href = $("<a href='/pages/service1.html?id=" + json[i].id_service + "'><h5 class='card-title text-center'></h5></a>");
                serviceLInk.append(href);
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo_url[0] + "'></img>");
                let relatedTitle = col.find(".card-title");
                relatedTitle.append(json[i].name);
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