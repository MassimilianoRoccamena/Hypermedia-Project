$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Articles", "/pages/articles.html");
        addLabel("Title");
    });

    //data loading
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
let id = "0";

//Load article data
function loadData() {
    //load article content
    fetch("/api/" + item + "/" + id).then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let title = $("#name");
        let author = $("#author");
        let image1 = $("#image1");
        let image2 = $("#image2");
        let date = $("#date");
        let text = $("#text");
        title.append(json.title);
        author.append(json.author);
        date.append(json.publication_date);
        text.append(json.body);
        let firstImage = $("<img src='" + json.photo1_url + "' style='width: 100%;'>");
        let secondImage = $("<img src='" + json.photo2_url + "' style='width: 100%;'>");
        image1.append(firstImage);
        image2.append(secondImage);
        imageDiv.append(image);
    });
    //load related articles
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
                let relatedImage = col.find("#cardPhoto");
                relatedImage.append("<img class='card-img-top' src='" + json[i].photo_url + "'></img>");
                let relatedTitle = col.find(".card-title");
                relatedTitle.append(json[i].title);
                let relatedAuthor = col.find("#cardAuthor");
                relatedAuthor.append(json[i].author);
                let relatedDate = col.find("#cardDate");
                relatedDate.append(json[i].publication_date);
            }); 
        }
    });
}