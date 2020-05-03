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
        });
    
    app.route("/service/:id")
        .get(function (req, res) {
            id = req.params.id
        })
        .delete(function (req, res) {
            id = req.params.id
        });

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
        });
    
    app.route("/event/:id")
        .get(function (req, res) {
            id = req.params.id
        })
        .delete(function (req, res) {
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
        });
    
    app.route("/person/:id")
        .get(function (req, res) {
            id = req.params.id
        })
        .delete(function (req, res) {
            id = req.params.id
        });

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
    
    app.route("/article/:id")
        .get(function (req, res) {
            id = req.params.id
        })
        .delete(function (req, res) {
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
    
    app.route("/contact/:id")
        .get(function (req, res) {
            id = req.params.id
        })
        .delete(function (req, res) {
            id = req.params.id
        })

}

exports.create = create