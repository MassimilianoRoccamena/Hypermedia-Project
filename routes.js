function create(app) {

    //Service
    app.route("/service")
        .get(function(req, res) {
        })
        .post(function(req, res) {
        })
        .put(function(req, res) {
        })
        .delete(function(req, res) {
        });
    
    app.get("/service/:id", function (req, res) {
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
        })
        .put(function(req, res) {
        })
        .delete(function(req, res) {
        });

    app.get("/event/:id", function (req, res) {
        id = req.params.id
    })
    app.get("/event/month/:month", function (req, res) {
    })
    app.get("/event/:id/related", function (req, res) {
        id = req.params.id
    })

    //Person
    app.route("/person")
        .get(function(req, res) {
        })
        .post(function(req, res) {
        })
        .put(function(req, res) {
        })
        .delete(function(req, res) {
        });

    app.get("/person/:id", function (req, res) {
        id = req.params.id
    })

    //Article
    app.route("/article")
        .get(function(req, res) {
        })
        .post(function(req, res) {
        })
        .put(function(req, res) {
        })
        .delete(function(req, res) {
        });
    
    app.get("/article/:id", function (req, res) {
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
        })
        .put(function(req, res) {
        })
        .delete(function(req, res) {
        });
    
    app.get("/contact/:id", function (req, res) {
        id = req.params.id
    })

}

exports.create = create