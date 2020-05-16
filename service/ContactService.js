'use strict';


/**
 * Add a new contact
 *
 * contact Contact Contact object to be added
 * no response value expected for this operation
 **/
exports.addContact = function(contact) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a contact by ID
 *
 * id_contact Long ID of contact to be deleted
 * no response value expected for this operation
 **/
exports.deleteContact = function(id_contact) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a contact by ID
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
 * Get all contacts
 *
 * returns List
 **/
exports.getContactsAll = function() {
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


/**
 * Update a contact
 *
 * contact Contact Contact object to be updated
 * no response value expected for this operation
 **/
exports.updateContact = function(contact) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

