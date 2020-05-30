$(document).ready(function () {

    //Orientation info
    $('#orientation-info').load("/pages/components/orientation-info.html", function(responseTxt, statusTxt, xhr) {
        addLink("Home", "/");
        addLabel("Contacts");
    });

    //Send button
    sendHandler();
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

//--------------------------------------- SEND BUTTON -------------------------------------------

//Handles send click
function sendHandler() {
    $("#send").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var title = $("#title").val();
        var body = $("#body").val();
        
        if (name == "") {
            alert("You must insert your name!");
        } else {
            if (email == "") {
                alert("You must insert your email!");
            } else {
                if (title == "") {
                    alert("You must insert a title!");
                } else {
                    if (body == "") {
                        alert("You must insert a body!");
                    } else {
                        let message = {sender_name: name, sender_email: email, title: title, body:body};
                        
                        post('/api/message',message);
                    }
                }
            }
        }
    });
}

function post(path, params, method='post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }