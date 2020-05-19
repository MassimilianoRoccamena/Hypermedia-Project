$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLabel("Events");
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
    idGroup = "events",
    idItem = "event",
    fillItem = function(col, data) {
        let name = col.find(".card-title");
        name.text(data.name);
    }

//Init component
function initPagination() {
    let root = $("#" + idGroup);
    let container = $("<div class='container'></div>");
    root.append(container);
    let row = $("<div class='row'></div>");
    container.append(row);

    for (let i=0; i<itemsCount; i++) {
        let id = idItem + "-col-" + i;
        let col = $("<div id='" + id + "' class='col-sm-4'></div>");

        row.append(col);
    }
}

//Load group page
function loadPage(first=true) {
    if (!first) {
        for (let i=0; i<itemsCount; i++) {
            let id = idItem + "-col-" + i;
            let col = $(id)

            col.empty();
        }
    }

    fetch("/api/" + idGroup + "/?offset=" + currentPage).then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        let item = $("<div></div>");

        item.load("/pages/components/" + idItem + "-card.html", function(responseTxt, statusTxt, xhr) {
            for (let i=0; i<json.length; i++) {
                let data = json[i];
    
                let id = idItem + "-col-" + i;
                let col = $("#"+id);
    
                col.html(item.html());
                fillItem(col, data);
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