$(document).ready(function () {

    //Orientation info
    let id = getParameter();
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Services", "/pages/services.html");
        addLink("Service", "/pages/service1.html?id=" + id, "info-service");
        addLabel("Articles");

        //Pagination
        itemComponent.load(linkComponent, function(responseTxt, statusTxt, xhr) {
            initPagination();
            loadPage();
        });
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

//---------------------------------------- PAGINATION --------------------------------------------

//Global variables
var currentPage = 1,
    itemsCount = 8,
    id = getParameter(),
    idGroup = "articles",
    idItem = "article",
    idParent = "service",
    linkComponent = "/pages/components/" + idItem + "-row.html",
    itemComponent = $("<div></div>"),
    fillItem = function(row, data) {
        let articleLink = row.find("#articleLink");
        href = $("<a href='/pages/article.html?id=" + data.id_article + "'><h4></h4></a>");
        articleLink.append(href);
        var photo = row.find("#photo");
        let name = row.find("h4");
        let date = row.find("#date");
        let author = row.find("#author");
        
        let img = $("<img src='" + data.photo1_url + "' class='row-custom'>");
        photo.append(img);
        name.text(data.title);
        date.text(data.publication_date.substring(0,10));
        author.text(data.author);
    }

//Init component
function initPagination() {
    //Grid
    let root = $("#" + idGroup);
    let container = $("<div class='container'></div>");
    root.append(container);
}


//Print truncated info
function truncInfo(text, len) {
    let info = $("#info-service");
    let text2 = text.substring(0,len+1);
    if (text2.length < text.length) {
        text = text2 + "...";
    } else {
        text = text2;
    }
    info.text(text);
    document.title = text;
}

//Load group page
function loadPage(first=true) {
    let container = $("#" + idGroup).find(".container")

    //First setup
    if (!first) {
        container.empty();
    }

    //Draw
    let path = "/api/" + idParent + "/" + id + "/articles/";
    let item = $("<div></div>");

    //Print loading
    item.html("<h6>Loading...<h6>")
    container.html(item.html());

    //Items request
    fetch(path).then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        truncInfo(json.name, 25);

        //Unprint loading
        container.empty();

        //No data
        if(json.articles.length == 0){
            let error = $("#label");
            error.text("No articles found for this service")

        //Some data
        } else {
            let item = $("<div></div>");
            let se = $("#service");
            let href = $("<a href='/pages/service1.html?id=" + id +"'>" + json.name + "</a>");
            se.append(href);

            item.html(itemComponent.html());

            for (let i=0; i<json.articles.length; i++) {
                let data = json.articles[i];
                
                let row = $("<div></div>");
                row.html(item.html());
                container.append(row);

                fillItem(row, data);
                
                if (i < json.length-1) {
                    container.append($("<hr>"));
                }
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