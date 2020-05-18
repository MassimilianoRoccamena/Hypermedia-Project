$(document).ready(function () {
    $('#pagination').load("/pages/components/pagination.html", function(responseTxt, statusTxt, xhr) {
        $("#previous").click(function() {
            previousPage();
        })
        $("#next").click(function() {
            nextPage();
        })
    });

    createCols(itemsCount);
    loadPage();
});

//Global variables
var currentPage = 1,
    itemsCount = 12,
    idGroup = "people",
    idItem = "person",
    fillItem = function(col, data) {

    }

//Create columns
function createCols() {
    let row = $("#" + idGroup + "-row");
    
    for (let i=0; i<itemsCount; i++) {
        let id = idItem + "-col-" + i;
        let col = $("<div id='" + id + "' class='col-sm-4'></div>");

        row.append(col);
    }
}

//Load items page
function loadPage(first=true) {
    if (!first) {
        for (let i=0; i<itemsCount; i++) {
            let id = idItem + "-col-" + i;
            let col = $(id)

            col.empty();
        }
    }

    fetch("/api/" + idGroup + "/items?page=" + currentPage).then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        let component = $("<div></div>");

        component.load("/pages/components/" + idItem + "-item.html", function(responseTxt, statusTxt, xhr) {
            for (let i=0; i<json.length; i++) {
                let data = json[i];
    
                let id = idItem + "-col-" + i;
                let col = $("#"+id);
    
                col.html(component.html());
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