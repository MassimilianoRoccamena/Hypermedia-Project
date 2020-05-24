'use strict';


/**
 * Data layer setup
 */
let sqlDb;

exports.messageDbSetup = function(s) {
  sqlDb = s;
}


/**
 * Post new message
 *
 * message Message Message object to be posted
 * no response value expected for this operation
 **/
exports.addMessage = function(message) {
  sqldqb("Message").insert(message);
}

