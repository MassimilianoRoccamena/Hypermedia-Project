//TODO: modifiche post merging -> sostituire a openapi compilato

var express = require("express");

var app = express();

app.use(express.static('public'));

var server = app.listen(8080, function () {
    var port = server.address().port;

    console.log("Server running at port %s", port);
});