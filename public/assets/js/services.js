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
    itemComponent.load(linkComponent, function(responseTxt, statusTxt, xhr) {
        initPagination();
        loadPage();
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
    itemsCount = 8,
    idGroup = "services",
    idItem = "service",
    linkComponent = "/pages/components/" + idItem + "-row.html",
    itemComponent = $("<div></div>"),
    fillItem = function(row, data) {
        var photo = row.find("#photo");
        let link = row.find("#serviceLink");
        let href = $("<a href='/pages/service1.html?id=" + data.id_service + "'><h4>" + data.name + "</h4></a>");
        let presentation = row.find("p");
        
        let img = $("<img src='" + data.photo_url[0] + "' class='row-custom'>");
        photo.append(img);
        link.append(href);
        presentation.text(data.presentation+"...");
    }

//Init component
function initPagination() {
    //Grid
    let root = $("#" + idGroup);
    let container = $("<div class='container'></div>");
    root.append(container);

    //Filtering
    let search = $("#filter-search");
    search.change(function() {
        currentPage = 1;
        loadPage(false);
        $("#previous").addClass("disabled");
        $("#page-number").text("Page " + currentPage);
    })
}

//Clear items
function clearPagination() {
    let container = $("#" + idGroup).find(".container");
    container.empty();
}

//Load group page
function loadPage(first=true) {
    let container = $("#" + idGroup).find(".container")

    //First setup
    if (!first) {
        container.empty();
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
        //Unprint loading
        container.empty();

        //No data
        if (json.length == 0) {
            item.html("<h4>No events found<h4>")
            container.html(item.html());

            $("#next").addClass("disabled");

        //Some data
        } else {
            item.html(itemComponent.html());

            for (let i=0; i<json.length; i++) {
                let data = json[i];
                
                let row = $("<div></div>");
                row.html(item.html());
                container.append(row);

                fillItem(row, data);

                if (i < json.length-1) {
                    container.append($("<hr>"));
                }
            }

            if (json.length == itemsCount) {
                $("#next").removeClass("disabled");
            } else {
                $("#next").addClass("disabled");
            }
        }
    });
}

//Switch next items page
function nextPage() {
    if (!$("#next").hasClass("disabled")) {
        currentPage += 1;
        loadPage(false);

        if (currentPage == 2) {
            $("#previous").removeClass("disabled");
        }

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

        if (currentPage == 1) {
            $("#previous").addClass("disabled");
        }

        $("#page-number").text("Page " + currentPage);
    } else {
        throw new Error("Page 1 is first page")
    }
}