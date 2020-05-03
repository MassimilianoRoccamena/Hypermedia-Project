var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(8080, function () {
    console.log("Server running at http://localhost:" + 8080 + "/\nCTRL + C to shutdown");
});