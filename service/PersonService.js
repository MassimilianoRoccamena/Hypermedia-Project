'use strict';


/**
 * Getl people items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getPeopleItems = function(offset,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_person" : 0,
  "name" : "name",
  "photo_url" : "photo_url"
}, {
  "id_person" : 0,
  "name" : "name",
  "photo_url" : "photo_url"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get person page data by ID
 *
 * id_person Long ID of person to return
 * returns Person
 **/
exports.getPersonByID = function(id_person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_person" : 0,
  "role" : "role",
  "email_address" : "email_address",
  "starting_date" : "2000-01-23",
  "name" : "name",
  "description" : "description",
  "phone_number" : "phone_number",
  "photo_url" : "photo_url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get events items of a selected person by ID
 *
 * id_person Long ID of person to search for events
 * returns List
 **/
exports.getPersonEventsItemsByID = function(id_person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "name" : "name",
  "location" : "location",
  "id_event" : 0,
  "photo_url" : "photo_url"
}, {
  "date" : "2000-01-23",
  "name" : "name",
  "location" : "location",
  "id_event" : 0,
  "photo_url" : "photo_url"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get services items of a selected person by ID
 *
 * id_person Long ID of person to search for services
 * returns List
 **/
exports.getPersonServicesItemsByID = function(id_person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "presentation" : "presentation",
  "name" : "name",
  "photo_url" : "photo_url",
  "id_service" : 0
}, {
  "presentation" : "presentation",
  "name" : "name",
  "photo_url" : "photo_url",
  "id_service" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

