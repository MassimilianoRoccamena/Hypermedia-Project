var express = require("express");
var routes = require("./routes.js");

var app = express();

//Static resources
app.use(express.static('public'));

//Routing
routes.create(app);

//Run server
var server = app.listen(8080, function () {
    var port = server.address().port;

    console.log("Server running at port %s", port);
});