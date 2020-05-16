'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.addPerson = function addPerson (req, res, next) {
  var person = req.swagger.params['person'].value;
  Person.addPerson(person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePerson = function deletePerson (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  Person.deletePerson(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPeopleAll = function getPeopleAll (req, res, next) {
  Person.getPeopleAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPeopleItemsAll = function getPeopleItemsAll (req, res, next) {
  var page = req.swagger.params['page'].value;
  Person.getPeopleItemsAll(page)
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

module.exports.getPersonEventsByID = function getPersonEventsByID (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  Person.getPersonEventsByID(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPersonServicesByID = function getPersonServicesByID (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  Person.getPersonServicesByID(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePerson = function updatePerson (req, res, next) {
  var person = req.swagger.params['person'].value;
  Person.updatePerson(person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
