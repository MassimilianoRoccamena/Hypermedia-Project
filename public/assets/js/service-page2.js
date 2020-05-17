var h1 = document.querySelector("#name");
var p = document.querySelector("#information_text");
var locationDiv = document.querySelector("#location");

fetch("/api/service/0/page2").then(function(response){
    if(!response.ok){
        throw new Error("HTTP error, status =  " + response.status);
    }
    return response.json();
})
.then(function(json){
    h1.innerHTML = json.name;
    p.innerHTML = json.informations;
    var locations = json.location.split(" ");
    var h5 = "<h5>"
    for(i = 0; i < locations.length; i++){
        h5 = h5.concat(locations[i] + "<br>");
    }
     h5 = h5.concat("</h5>");
    locationDiv.insertAdjacentHTML('beforeend', h5);
});