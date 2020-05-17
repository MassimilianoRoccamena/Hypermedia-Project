
$(document).ready(function(){
    var h1 = $("#name");
    var p = $("#information_text");
    var locationDiv = $("#location");
    fetch("/api/service/0/page2").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        h1.append(json.name);
        p.append(json.informations);
        var locations = json.location.split(" ");
        var h5 = "<h5>"
        for(i = 0; i < locations.length; i++){
            h5 = h5.concat(locations[i] + "<br>");
        }
         h5 = h5.concat("</h5>");
        locationDiv.append(h5);
    });
})