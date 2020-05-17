let h1 = document.querySelector("#service_name");

fetch("/service/0/page1").then(function(response){
    if(!response.ok){
        throw new Error("HTTP error, status =  " + response.status);
    }
    return response.json();
})
.then(function(json){
    let data = json[0];
    h1.innerHTML = '${data.name}';
})