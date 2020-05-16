'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.addMessage = function addMessage (req, res, next) {
  var message = req.swagger.params['message'].value;
  Message.addMessage(message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMessage = function deleteMessage (req, res, next) {
  var id_message = req.swagger.params['id_message'].value;
  Message.deleteMessage(id_message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessageByID = function getMessageByID (req, res, next) {
  var id_message = req.swagger.params['id_message'].value;
  Message.getMessageByID(id_message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessagesAll = function getMessagesAll (req, res, next) {
  Message.getMessagesAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
