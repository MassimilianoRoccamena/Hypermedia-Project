$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLabel("Articles");

        //Pagination
        itemComponent.load(linkComponent, function(responseTxt, statusTxt, xhr) {
            $('#pagination').load("/pages/components/pagination.html", function(responseTxt, statusTxt, xhr) {
                $("#previous").click(function() {
                    previousPage();
                })
                $("#next").click(function() {
                    nextPage();
                })

                initPagination();
                loadPage();
            })
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
    linkComponent = "/pages/components/" + idItem + "-card.html",
    itemComponent = $("<div></div>"),
    fillItem = function(col, data) {
        let articleLink = col.find("#articleLink");
        let href = $("<a href='/pages/article.html?id=" + data.id_article +"'><h5 class='card-title'></h5></a>")
        articleLink.append(href);
        let title = col.find(".card-title");
        let author = col.find("#author");
        let photo = col.find("#photo");
        let date = col.find("#date");
        
        title.text(data.title);
        author.append(data.author);
        date.append(data.publication_date.substring(0,10));
        let img = $("<img src='" + data.photo1_url + "' style='width: 100%;'>");
        photo.append(img);
    }

//Init component
function initPagination() {
    //Grid
    let root = $("#" + idGroup);
    let container = $("<div class='container'></div>");
    root.append(container);
    let row = $("<div class='row align-items-center'></div>");
    container.append(row);
    for (let i=0; i<itemsCount; i++) {
        let id = idItem + "-col-" + i;
        let col = $("<div id='" + id + "' class='col-sm-4'></div>");

        row.append(col);
    }

    //Filtering
    let search = $("#filter-search");
    search.change(function() {
        currentPage = 1;
        loadPage(false);
        $("#page-number").text("Page " + currentPage);
    });
}

//Clear items
function clearPagination() {
    for (let i=0; i<itemsCount; i++) {
        let id = idItem + "-col-" + i;
        let col = $("#"+id);
        col.empty();
    }
}

//Load items page
function loadPage(first=true) {
    //First setup
    if (!first) {
        for (let i=0; i<itemsCount; i++) {
            let id = idItem + "-col-" + i;
            let col = $(id)

            col.empty();
        }
    }

    //Set filtering
    let search = $("#filter-search").val();
    let path = "/api/" + idGroup + "?offset=" + (currentPage-1);
    if (search != "" && search != null && search != undefined) {
        path += "&search=" + search;
    }

    //Clear and draw
    if (!first) {
        clearPagination();
    }

    let item = $("<div></div>");
    
    //Pagination buttons loading
    $("#next").addClass("disabled");
    $("#previous").addClass("disabled");

    //Print loading
    let id = idItem + "-col-" + 0;
    let col = $("#"+id);
    item.html("<h6>Loading...<h6>")
    col.html(item.html());

    //Items request
    fetch(path).then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        //Print unloading
        let id = idItem + "-col-" + 0;
        let col = $("#"+id);
        col.empty();

        //No data
        if (json.length == 0) {
            let id = idItem + "-col-" + 0;
            let col = $("#"+id);

            item.html("<h4>No articles found<h4>")
            col.html(item.html());

        //Some data
        } else {
            item.html(itemComponent.html());

            for (let i=0; i<json.length; i++) {
                let data = json[i];
    
                let id = idItem + "-col-" + i;
                let col = $("#"+id);
    
                col.html(item.html());
                fillItem(col, data);
            }

            //Pagination buttons unloading
            if (json.length == itemsCount) {
                $("#next").removeClass("disabled");
            }
        }
    });

    //Pagination buttons unloading
    if (currentPage != 1) {
        $("#previous").removeClass("disabled");
    }
}

//Switch next items page
function nextPage() {
    if (!$("#next").hasClass("disabled")) {
        currentPage += 1;
        loadPage(false);
        $("#page-number").text("Page " + currentPage);
    } else {
        throw new Error("Page " + currentPage + " is last page")
    }
}

//Switch next items page
function previousPage() {
    if (currentPage > 1) {
        currentPage -= 1;
        loadPage(false);
        $("#page-number").text("Page " + currentPage);
    } else {
        throw new Error("Page 1 is first page")
    }
}