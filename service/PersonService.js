'use strict';


/**
 * Data layer setup
 */
let sqlDb;

exports.personDbSetup = function(s) {
  sqlDb = s;
}


/**
 * Getl people items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getPeopleItems = function(offset,search) {
  return sqlDb("Person")
          .select('id_person','photo_url','name');
}


/**
 * Get person page data by ID
 *
 * id_person Long ID of person to return
 * returns Person
 **/
exports.getPersonByID = function(id_person) {
  return sqlDb.from("Person").select('*').where("id_person", "=", id_person);
}


/**
 * Get events items of a selected person by ID
 *
 * id_person Long ID of person to search for events
 * returns List
 **/
exports.getPersonEventsItemsByID = function(id_person) {
  return sqlDb('Event')
        .where('id_person',id_person)
        .select('id_event','date','name','location','photo_url');
}


/**
 * Get services items of a selected person by ID
 *
 * id_person Long ID of person to search for services
 * returns List
 **/
exports.getPersonServicesLabelsByID = function(id_person) {
  return sqlDb('Service')
          .join('PeopleServices','Service.id_service','=','PeopleServices.id_service')
          .where('PeopleServices.id_person', id_person)
          .select('Service.id_service', 'Service.name');
}

