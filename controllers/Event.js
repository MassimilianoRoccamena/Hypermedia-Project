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

module.exports.getEventRelatedArticlesByID = function getEventRelatedArticlesByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventArticlesItemsByID(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventPersonLabelByID = function getEventPersonLabelByID (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Event.getEventPersonLabelByID(id_event)
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
  var month = req.swagger.params['month'].value;
  Event.getEventsItems(offset,search,month)
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
