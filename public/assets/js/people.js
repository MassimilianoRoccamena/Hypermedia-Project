$(document).ready(function () {
    createCols(peopleCount);
    loadPage(1);
    
    $('#pagination').load("/pages/components/pagination.html", function(responseTxt, statusTxt, xhr) {
        $("#previous").click(function() {
            previousPage();
        })
        $("#next").click(function() {
            nextPage();
        })
    });
});

var peopleCount = 15;
var peoplePage = 1;

//Create columns
function createCols() {
    let row = $("#people-row");
    
    for (let i=0; i<peopleCount; i++) {
        let id = "person-col-" + i;
        let col = $("<div id='" + id + "' class='col-sm-4'></div>");

        row.append(col);
    }
}

//Load people page
function loadPage(first=true) {
    if (!first) {
        for (let i=0; i<peopleCount; i++) {
            let id = "person-col-" + i;
            let col = $(id)

            col.empty();
        }
    }

    fetch("/api/people/items?page=" + peoplePage).then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        let component = $("<div></div>");

        component.load("/pages/components/person-item.html", function(responseTxt, statusTxt, xhr) {
            for (let i=0; i<json.length; i++) {
                let data = json[i];
    
                let id = "person-col-" + i;
                let col = $("#"+id);
    
                col.html(component.html());
                let name = col.find(".card-title");
                name.text(data.name);
            }
        });
    });
}

//Switch next people page
function nextPage() {
    peoplePage += 1;
    loadPage(false);

    if (peoplePage == 2) {
        $("#previous").removeClass("disabled");
    }

    $("#page-number").text("Page " + peoplePage);
}

//Switch next people page
function previousPage() {
    if (peoplePage > 1) {
        peoplePage -= 1;
        loadPage(false);

        if (peoplePage == 1) {
            $("#previous").addClass("disabled");
        }

        $("#page-number").text("Page " + peoplePage);
    } else {
        throw new Error("page 1 is first page")
    }
}


