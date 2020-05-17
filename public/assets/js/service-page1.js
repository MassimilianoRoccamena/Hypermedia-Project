
var h1 = document.querySelector("#name");
var p = document.querySelector("#presentation_text");

fetch("/api/service/0/page1").then(function(response){
    if(!response.ok){
        throw new Error("HTTP error, status =  " + response.status);
    }
    return response.json();
})
.then(function(json){
    h1.innerHTML = json.name;
    p.innerHTML = json.presentation;
});
   
