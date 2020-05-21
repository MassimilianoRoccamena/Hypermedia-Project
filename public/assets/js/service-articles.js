$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Services", "/pages/services.html");
        addLink("Name", "/pages/service1.html");
        addLabel("Articles");
    });
    //Pagination
    $('#pagination').load("/pages/components/pagination.html", function(responseTxt, statusTxt, xhr) {
        $("#previous").click(function() {
            previousPage();
        })
        $("#next").click(function() {
            nextPage();
        })
    });

    initPagination();
    loadPage();
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

//---------------------------------------- PAGINATION --------------------------------------------

//Global variables
var currentPage = 1,
    itemsCount = 12,
    idGroup = "articles",
    idItem = "article",
    idParent = "service",
    id = getParameter();
    
    fillItem = function(row, data) {
        let se = $("#service");
        let href = $("<a href='/pages/service1.html?id=" + data.id_service +"'>" + data.name + "</a>");
        ev.append(href);
        let articleLink = row.find("#articleLink");
        href = $("<a href='/pages/article.html?id=" + data.id_article + "'><h4></h4></a>");
        articleLink.append(href);
        var photo = row.find("#photo");
        let name = row.find("h4");
        let date = row.find("#date");
        let author = row.find("#author");
        
        let img = $("<img src='" + data.photo1_url + "' style='width: 100%;'>");
        photo.append(img);
        name.text(data.title);
        date.text(data.publication_date);
        author.text(data.author);
    }

//Init component
function initPagination() {
    let root = $("#" + idGroup);
    let container = $("<div class='container'></div>");
    root.append(container);
}

//Load group page
function loadPage(first=true) {
    let container = $("#" + idGroup).find(".container")

    if (!first) {
        container.empty();
    }

    fetch("/api/" + idParent + "/" + id + "/articles/?offset=" + currentPage).then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        let item = $("<div></div>");

        item.load("/pages/components/" + idItem + "-row.html", function(responseTxt, statusTxt, xhr) {
            for (let i=0; i<json.length; i++) {
                let data = json[i];
                
                let row = $("<div></div>");
                row.html(item.html());
                container.append(row);

                fillItem(row, data);
            }
        });
    });
}
//----------------------------------------- GET URL PARAMETER -------------------------------------------

function getParameter(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var p = url.searchParams.get("id");
    return p;
}