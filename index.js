var http = require("http")
var {EntityHandler, Controller} = require("./controller")

class TempHandler extends EntityHandler {
    constructor() {
        super("temp")
    }

    doCreate(params) {
        return {}
    }
    doRead(params) {
        return {name:"Mario", content:"Bla bla bla..."}
    }
    doUpdate(params) {
        return {}
    }
    doDelete(params) {
        return {}
    }
}

controller = new Controller([new TempHandler()])

http.createServer(function (req, res) {
    return controller.doRequest(req, res)
}).listen(8080)



/* http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "./public" + q.pathname;
    
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }  
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); */