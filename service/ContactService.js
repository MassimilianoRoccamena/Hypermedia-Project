'use strict';



/**
 * Data layer setup
 */
let sqlDb;

exports.contactDbSetup = function(s) {
  sqlDb = s;
}


/**
 * Get contact by ID
 *
 * id_contact Long ID of contact to return
 * returns Contact
 **/
exports.getContactByID = function(id_contact) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "email_address" : "email_address",
  "phone" : "phone",
  "name" : "name",
  "location" : "location",
  "id_contact" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get contacts
 *
 * returns List
 **/
exports.getContacts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "email_address" : "email_address",
  "phone" : "phone",
  "name" : "name",
  "location" : "location",
  "id_contact" : 0
}, {
  "email_address" : "email_address",
  "phone" : "phone",
  "name" : "name",
  "location" : "location",
  "id_contact" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

