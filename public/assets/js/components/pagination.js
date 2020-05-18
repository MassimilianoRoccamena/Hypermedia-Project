//TODO:     questa pagina è temporanea in attesa di
//          upgrade progettuale su require.js, unione di
//          paginazione card + row, copia-incolla

$(document).ready(function () {
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

//Global variables
var currentPage = 1,
    itemsCount = 12,
    idGroup = "people",
    idItem = "person",
    itemType = "card",
    fillItem = function(item, data) {

    }

//Init component
function initPagination() {
    let root = $("#" + idGroup);

    if (itemType == "card") {
        let container = $("<div class='container'></div>");
        root.append(container);
        let row = $("<div class='row'></div>");
        container.append(row);
    
        for (let i=0; i<itemsCount; i++) {
            let id = idItem + "-col-" + i;
            let col = $("<div id='" + id + "' class='col-sm-4'></div>");

            row.append(col);
        }
    } else if (itemType == "row") {
        let container = $("<div class='container'></div>");
        root.append(container);
    } else {
        throw new Error("invalid item type");
    }
}

//Load items page
function loadPage(first=true) {
    if (itemType == "card") {
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
    } else if (itemType == "row") {
        let container = $("#" + idGroup).find(".container")

        if (!first) {
            container.empty();
        }

        fetch("/api/" + idGroup + "/items?page=" + currentPage).then(function (res) {
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
    } else {
        throw new Error("invalid item type");
    }
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