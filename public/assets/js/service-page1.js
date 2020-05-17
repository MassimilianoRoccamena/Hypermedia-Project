var h1 = $("#service_name");

fetch("/api/service/0/page1").then(function(response){
    if(!response.ok){
        throw new Error("HTTP error, status =  " + response.status);
    }
    return response.json();
})
.then(function(json){
    var title = json.name;
    h1.innerHTML = title;
});
   
