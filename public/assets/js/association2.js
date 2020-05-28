$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLink("Association", "/pages/association1.html");
        addLabel("Headquarters");
    });

    //Data load
    LoadData();
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

//----------------------------------------- DATA LOAD -------------------------------------------

//Load contacts data
function LoadData() {

    //Load content
    fetch("/api/contacts").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        let container = $("#headquarters-container");
        
        for (let i=0; i<json.length; i++) {
            elem = json[i];

            let div = $("<div></div>")
            let name = $("<h4>" + elem.name + "</h4>");
            let phone = $("<p>" + elem.phone + "</p>");
            let email = $("<p>" + elem.email + "</p>");
            let location = $("<p>" + elem.location + "</p>");

            div.append(name);
            div.append(phone);
            div.append(email);
            div.append(location);
            container.append(div);

            if (i < json.length-1) {
                container.append($("<br>"));
            }
        }
    });
}