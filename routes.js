function create(app) {

    //Service
    app.route("/service")
        .get(function(req, res) {
        })
        .post(function(req, res) {
            service = req.body
        })
        .put(function(req, res) {
            service = req.body
        })
    
    app.get("/service/:id", function (req, res) {
        id = req.params.id
    })
    app.delete("/service/:id/delete", function (req, res) {
        id = req.params.id
    })
    app.get("/service/:id/related", function (req, res) {
        id = req.params.id
    })

    //Event
    app.route("/event")
        .get(function(req, res) {
        })
        .post(function(req, res) {
            event = req.body
        })
        .put(function(req, res) {
            event = req.body
        })

    app.get("/event/:id", function (req, res) {
        id = req.params.id
    })
    app.delete("/event/:id/delete", function (req, res) {
        id = req.params.id
    })
    app.get("/event/:id/related", function (req, res) {
        id = req.params.id
    })
    app.get("/event/month/:month", function (req, res) {
        month = req.params.month
    })

    //Person
    app.route("/person")
        .get(function(req, res) {
        })
        .post(function(req, res) {
            person = req.body
        })
        .put(function(req, res) {
            person = req.body
        })

    app.get("/person/:id", function (req, res) {
        id = req.params.id
    })
    app.delete("/person/:id/delete", function (req, res) {
        id = req.params.id
    })

    //Article
    app.route("/article")
        .get(function(req, res) {
        })
        .post(function(req, res) {
            article = req.body
        })
        .put(function(req, res) {
            article = req.body
        })
    
    app.get("/article/:id", function (req, res) {
        id = req.params.id
    })
    app.delete("/article/:id/delete", function (req, res) {
        id = req.params.id
    })
    app.get("/article/:id/related", function (req, res) {
        id = req.params.id
    })

    //Contact
    app.route("/contact")
        .get(function(req, res) {
        })
        .post(function(req, res) {
            contact = req.body
        })
        .put(function(req, res) {
            contact = req.body
        })
    
    app.get("/contact/:id", function (req, res) {
        id = req.params.id
    })
    app.delete("/contact/:id/delete", function (req, res) {
        id = req.params.id
    })

}

exports.create = create