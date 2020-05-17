$(document).ready(function () {
    fetch("/api/people/items?page=1").then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        var row = $("#people-row");

        for (let i=0; i<json.length; i++) {
            let data = json[i];

            let col = $("<div class='col-sm-4'></div>");
            col.load("/pages/templates/person-item.html", function(responseTxt, statusTxt, xhr) {
                var name = col.find(".card-title");
                name.text(data.name);
            });
            
            row.append(col);
        }
    })
});


