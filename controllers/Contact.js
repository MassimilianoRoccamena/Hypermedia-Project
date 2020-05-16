'use strict';

var utils = require('../utils/writer.js');
var Contact = require('../service/ContactService');

module.exports.addContact = function addContact (req, res, next) {
  var contact = req.swagger.params['contact'].value;
  Contact.addContact(contact)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteContact = function deleteContact (req, res, next) {
  var id_contact = req.swagger.params['id_contact'].value;
  Contact.deleteContact(id_contact)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContactByID = function getContactByID (req, res, next) {
  var id_contact = req.swagger.params['id_contact'].value;
  Contact.getContactByID(id_contact)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContactsAll = function getContactsAll (req, res, next) {
  Contact.getContactsAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateContact = function updateContact (req, res, next) {
  var contact = req.swagger.params['contact'].value;
  Contact.updateContact(contact)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
