$(document).ready(function () {
    fetch("/api/people/items?page=1").then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        var row = $("#people-row");

        for (var i=0; i<json.length; i++) {
            var data = json[i];

            var col = $("<div class='col-sm-4'></div>");

            row.append(col);
            col.load("/pages/templates/person-item.html");

            var name = col.find(".card-title");
            name.text(data.name);
        }
    })
});


