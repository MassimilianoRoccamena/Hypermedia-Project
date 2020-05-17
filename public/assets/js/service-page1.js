var h1 = document.querySelector("#service_name");

$(document).ready(function () {
    fetch("/api/service/0/page1").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        var data = json;
        h1.innerHTML = '${data.name}';
    });
}