$(document).ready(function(){
    var name = $("#name");
    var info = $("#info");
    var date = $("#date");
    var location = $("#location"); 

    fetch("/api/event/0/page2").then(function(response){
        if(!response.ok){
            throw new Error("HTTP error, status =  " + response.status);
        }
        return response.json();
    })
    .then(function(json){
        name.append(json.name);
        info.append(json.pract_info);
        date.append(json.date);
        location.append(json.location);
    });
});