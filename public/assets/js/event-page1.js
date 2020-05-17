$(document).ready(function(){
    var h1 = $("#name");
    var p = $("#description_text");

    fetch("/api/event/0/page1").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        h1.append(json.name);
        p.append(json.description);
    });
});