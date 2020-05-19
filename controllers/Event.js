'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.getEvent1ByID = function getEvent1ByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEvent1ByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEvent2ByID = function getEvent2ByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEvent2ByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventArticlesItemsByID = function getEventArticlesItemsByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventArticlesItemsByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventPersonItemByID = function getEventPersonItemByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventPersonItemByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventServicesItemsByID = function getEventServicesItemsByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventServicesItemsByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsItems = function getEventsItems (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Event.getEventsItems(offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsItemsByMonth = function getEventsItemsByMonth (req, res, next) {
  var month = req.swagger.params['month'].value;
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Event.getEventsItemsByMonth(month,offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRelatedEventsItemsByID = function getRelatedEventsItemsByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getRelatedEventsItemsByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
