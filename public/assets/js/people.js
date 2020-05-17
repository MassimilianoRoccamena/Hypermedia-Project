$(document).ready(function () {
    var row = $("#people-row");
    var count = 15;
    var page = 1;

    //Create cols
    for (let i=0; i<count; i++) {
        let id = "person-col-" + i;
        let col = $("<div id='" + id + "' class='col-sm-4'></div>");
        row.append(col);
    }
    
    //Load page 1
    fetch("/api/people/items?page=1").then(function (res) {
        if (!res.ok) { 
            throw new Error("HTTP error, status = " + res.status); 
        }
        return res.json();
    }).then(function (json) {
        for (let i=0; i<json.length; i++) {
            let data = json[i];

            let id = "person-col-" + i;
            let col = $("#"+id);
            col.load("/pages/templates/person-item.html", function(responseTxt, statusTxt, xhr) {
                var name = col.find(".card-title");
                name.text(data.name);
            });
        }
    })
});


