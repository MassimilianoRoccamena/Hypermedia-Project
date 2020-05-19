'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.getPeopleItems = function getPeopleItems (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Person.getPeopleItems(offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPersonByID = function getPersonByID (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  Person.getPersonByID(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPersonEventsItemsByID = function getPersonEventsItemsByID (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  Person.getPersonEventsItemsByID(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPersonServicesItemsByID = function getPersonServicesItemsByID (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  Person.getPersonServicesItemsByID(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
