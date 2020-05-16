'use strict';


/**
 * Add a new message
 *
 * message Message Message object to be added
 * no response value expected for this operation
 **/
exports.addMessage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a message by ID
 *
 * id_message Long ID of message to be deleted
 * no response value expected for this operation
 **/
exports.deleteMessage = function(id_message) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a message by ID
 *
 * id_message Long ID of message to return
 * returns Message
 **/
exports.getMessageByID = function(id_message) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_message" : 0,
  "sender_name" : "sender_name",
  "title" : "title",
  "body" : "body",
  "sender_email" : "sender_email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all messages
 *
 * returns List
 **/
exports.getMessagesAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_message" : 0,
  "sender_name" : "sender_name",
  "title" : "title",
  "body" : "body",
  "sender_email" : "sender_email"
}, {
  "id_message" : 0,
  "sender_name" : "sender_name",
  "title" : "title",
  "body" : "body",
  "sender_email" : "sender_email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

