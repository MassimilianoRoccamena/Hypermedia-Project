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
