$(document).ready(function () {
    //Create columns
    var row = $("#people-row");
    for (var i=0; i<6; i++) {
        id = "people-col" + i;
        row.append("<div id=${id} class='col-sm-4'></div>");
    }

    //Load data
    fetch("/people/items").then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + response.status); 
        }
        return response.json()
    }).then(function (json) {
        for (var i=0; i<json.length; i++) {
            var data = json[i];
            col = $("#people-col"+i)
            col.load("/pages/templates/person-item.html")
        }
    })
});

