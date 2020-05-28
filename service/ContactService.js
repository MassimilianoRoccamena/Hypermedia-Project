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
  return sqlDb
        .from("Contact")
        .select("*")
        .where("id_contact", "=", id_contact)
        .then(data => {
          return data[0]
        });
}


/**
 * Get contacts
 *
 * returns List
 **/
exports.getContacts = function() {
  return sqlDb("Contact")
        .select("*");
}

