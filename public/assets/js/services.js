$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLabel("Services");
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
    idGroup = "services",
    idItem = "service",
    fillItem = function(row, data) {
        var photo = row.find("#photo");
        let name = row.find("h4");
        let presentation = row.find("p");
        
        let img = $("<img src='" + json.photo_url + "' style='width: 100%;'>");
        photo.append(img);
        name.text(data.name);
        presentation.text(data.presentation);
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

    fetch("/api/" + idGroup + "/?offset=" + currentPage).then(function (res) {
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

//Switch next items page
function nextPage() {
    currentPage += 1;
    loadPage(false);

    if (currentPage == 2) {
        $("#previous").removeClass("disabled");
    }

    $("#page-number").text("Page " + currentPage);
}

//Switch next items page
function previousPage() {
    if (currentPage > 1) {
        currentPage -= 1;
        loadPage(false);

        if (currentPage == 1) {
            $("#previous").addClass("disabled");
        }

        $("#page-number").text("Page " + currentPage);
    } else {
        throw new Error("page 1 is first page")
    }
}