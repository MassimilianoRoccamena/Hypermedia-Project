$(document).ready(function () {

    //Orientation info
    let id = getParameter();
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Services", "/pages/services.html");
        addLink("Service", "/pages/service1.html?id=" + id);
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
let id = getParameter();

//Load service data
function loadData() {
    var h1 = $("#name");
    var p = $("#information_text");
    var locationDiv = $("#location");

    //Load page 2 informations
    fetch("/api/service2/" + id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let page1Link = $("#page1Link");
        let href = $("<a href='/pages/service1.html?id=" + id +"' class='btn btn-info btn-custom' role='button'>Go to presentation</a>");
        page1Link.append(href);
        let articleLink = $("#articleLink");
        href = $("<a href='/pages/service-articles.html?id=" + id +"' class='btn btn-info btn-custom' role='button'>Go to related articles</a>");
        articleLink.append(href);
        h1.append(json[0].name);
        p.append(json[0].informations);
        
        for(i = 0; i < json[0].location.length; i++){
            let h5 = $("<h5>" + json[0].location[i] +"</h5>");
            locationDiv.append(h5);
        }
        
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
                let personLink = col.find("#personLink");
                let href = $("<a href='/pages/person.html?id=" + json[i].id_person + "'><h5 class='card-title text-center'></h5></a>")
                personLink.append(href);
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo_url + "'></img>");
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