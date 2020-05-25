$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Articles", "/pages/articles.html");
        addLabel("Article");
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


let item = "article"
let id = getParameter();

//Load article data
function loadData() {

    //Load content
    fetch("/api/" + item + "/" + id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let title = $("#head");
        let author = $("#author");
        let photo1 = $("#photo1");
        let photo2 = $("#photo2");
        let date = $("#date");
        let body = $("#text");
        
        title.append(json[0].title);
        author.append(json[0].author);
        date.append(json[0].publication_date.substring(0,10));
        body.append(json[0].body);
        let img1 = $("<img src='" + json[0].photo1_url + "' class='img-shadow' style='width: 100%;'>");
        let img2 = $("<img src='" + json[0].photo2_url + "' class='img-shadow' style='width: 100%;'>");
        photo1.append(img1);
        photo2.append(img2);

        let subjectLink = $("#subjectLink");
        let idSubject;
        let entitySubject;
        if (json[0].id_service){
            idSubject = json[0].id_service;
            entitySubject = "service";
        } else{
            idSubject = json[0].id_event;
            entitySubject = "event";
        }
        let href = "/pages/" + entitySubject + "1.html?id=" + idSubject;
        subjectLink.attr("href", href);
    });

    //Load related articles
    fetch("/api/" + item + "/" + id + "/related").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let row = $("#cards");
        for(let i=0;i<json.length;i++){
            let col = $("<div class='col-sm-4'></div>");
            row.append(col);
            col.load("/pages/components/" + item + "-card.html", function(responseTxt, statusTxt, xhr) {
                let relatedImage = col.find("#photo");
                let articleLink = col.find("#articleLink");
                let href = $("<a href='/pages/article.html?id=" + json[i].id_article +"'><h5 class='card-title text-center'></h5></a>");
                articleLink.append(href);
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo1_url + "'></img>");
                let relatedTitle = col.find(".card-title");
                relatedTitle.append(json[i].title);
                let relatedAuthor = col.find("#author");
                relatedAuthor.append(json[i].author);
                let relatedDate = col.find("#date");
                relatedDate.append(json[i].publication_date.substring(0,10));
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