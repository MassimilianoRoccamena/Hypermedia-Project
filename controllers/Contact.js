'use strict';

var utils = require('../utils/writer.js');
var Contact = require('../service/ContactService');

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

module.exports.getContacts = function getContacts (req, res, next) {
  Contact.getContacts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
