'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.addService = function addService (req, res, next) {
  var service = req.swagger.params['service'].value;
  Service.addService(service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteService = function deleteService (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.deleteService(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRelatedServicesByID = function getRelatedServicesByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getRelatedServicesByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceArticlesByID = function getServiceArticlesByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServiceArticlesByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceByID = function getServiceByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServiceByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceEventsByID = function getServiceEventsByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServiceEventsByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicePage1ByID = function getServicePage1ByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServicePage1ByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicePage2ByID = function getServicePage2ByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServicePage2ByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicePeopleByID = function getServicePeopleByID (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  Service.getServicePeopleByID(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicesAll = function getServicesAll (req, res, next) {
  Service.getServicesAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicesItemsAll = function getServicesItemsAll (req, res, next) {
  var page = req.swagger.params['page'].value;
  Service.getServicesItemsAll(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateService = function updateService (req, res, next) {
  var service = req.swagger.params['service'].value;
  Service.updateService(service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
