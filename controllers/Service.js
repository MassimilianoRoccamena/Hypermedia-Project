'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.getRelatedServicesItemsByID = function getRelatedServicesItemsByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getRelatedServicesItemsByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getService1ByID = function getService1ByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getService1ByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getService2ByID = function getService2ByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getService2ByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceRelatedArticlesByID = function getServiceRelatedArticlesByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServiceArticlesItemsByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceEventsItemsByID = function getServiceEventsItemsByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServiceEventsItemsByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicePeopleItemsByID = function getServicePeopleItemsByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServicePeopleItemsByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicesItems = function getServicesItems (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Service.getServicesItems(offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
