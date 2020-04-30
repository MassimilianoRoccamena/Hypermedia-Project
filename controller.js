var url = require("url")
var fs = require("fs")

class EntityHandler {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    doCmd(cmd, params) {
        if (cmd == "create") {
            this.doCreate(params)
        } else if (cmd == "read") {
            this.doRead(params)
        } else if (cmd == "update") {
            this.doUpdate(params)
        } else if (cmd == "delete") {
            this.doDelete(params)
        } else {
            throw new Error("invalid " + cmd + " command")
        }
    }

    doCreate(params) {
        throw new Error("create not implemented")
    }
    doRead(params) {
        throw new Error("read not implemented")
    }
    doUpdate(params) {
        throw new Error("update not implemented")
    }
    doDelete(params) {
        throw new Error("delete not implemented")
    }
}

class ResourceManager {
    constructor (handlers) {
        this.handlers = handlers
    }

    get handlers() {
        return this._handlers
    }
    set handlers(hh) {
        this._handlers = hh
        map = {}
        for (h in hh) {
            name = h.name
            if (name in map) {
                throw new Error(name + " entity already defined")
            }
            map[name] = h
        }
        this._map = map
    }

    getEntityHandler(name) {
        return this._map[name]
    }
}

class RestController {
    constructor(handlers) {
        this._manager = new ResourceManager(handlers)
    }

    get manager() {
        return this._manager
    }

    doRequest(tokens) {
        name = tokens[0]
        cmd = tokens[1]
        handler = this.manager.getEntityController(name)
        if (handler == null) {
            throw new Error(name + " entity not found")
        }
        handler.doCmd(cmd, tokens.slice(2))
    }
}

class Controller {
    constructor(handlers) {
        this._rest = new RestController(handlers)
    }

    get rest() {
        return this._rest
    }

    doRequest(req, res) {
        var q = url.parse(req.url, true);
        var path = q.pathname
        var tokens = path.split("/")

        //REST
        if (token[0] == "api") {
            try {
                out = this.rest.doRequest(tokens.slice(1))
                res.writeHead(200, {'Content-Type':'application/json'})
                res.write(JSON.stringify(out))
                return res.end()
            } catch (error) {
                res.writeHead(400, {'Content-Type':'text/plain'})
                res.write(error.message)
                return res.end()
            }
        //HTML
        } else {
            fs.readFile(filename, function(err, data) {
                if (err) {
                    res.writeHead(404, {'Content-Type':'text/html'})
                    return res.end("404 Not Found")
                }  
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            });
        }
    }
}