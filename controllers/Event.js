'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.addEvent = function addEvent (req, res, next) {
  var event = req.swagger.params['event'].value;
  Event.addEvent(event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEvent = function deleteEvent (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.deleteEvent(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventArticlesByID = function getEventArticlesByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventArticlesByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventByID = function getEventByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventByMonth = function getEventByMonth (req, res, next) {
  var month = req.swagger.params['month'].value;
  var page = req.swagger.params['page'].value;
  Event.getEventByMonth(month,page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventPage1ByID = function getEventPage1ByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventPage1ByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventPage2ByID = function getEventPage2ByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventPage2ByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventPersonByID = function getEventPersonByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventPersonByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventServicesByID = function getEventServicesByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventServicesByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsAll = function getEventsAll (req, res, next) {
  Event.getEventsAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsItemAll = function getEventsItemAll (req, res, next) {
  var page = req.swagger.params['page'].value;
  Event.getEventsItemAll(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRelatedEventsByID = function getRelatedEventsByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getRelatedEventsByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEvent = function updateEvent (req, res, next) {
  var event = req.swagger.params['event'].value;
  Event.updateEvent(event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
