'use strict';


/**
 * Add a new person
 *
 * person Person Person object to be added
 * no response value expected for this operation
 **/
exports.addPerson = function(person) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a person by ID
 *
 * id_person Long ID of person to be deleted
 * no response value expected for this operation
 **/
exports.deletePerson = function(id_person) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all people
 *
 * returns List
 **/
exports.getPeopleAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_person" : 0,
  "role" : "role",
  "email_address" : "email_address",
  "starting_date" : "2000-01-23",
  "name" : "name",
  "description" : "description",
  "phone_number" : "phone_number",
  "photo_url" : "photo_url"
}, {
  "id_person" : 0,
  "role" : "role",
  "email_address" : "email_address",
  "starting_date" : "2000-01-23",
  "name" : "name",
  "description" : "description",
  "phone_number" : "phone_number",
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
 * Get all people items
 *
 * page Long People page number to get
 * returns List
 **/
exports.getPeopleItemsAll = function(page) {
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
 * Get a person by ID
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
  "photo_url" : "/assets/img/person1.jpg"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get events of a selected person by ID
 *
 * id_person Long ID of person to search for events
 * returns List
 **/
exports.getPersonEventsByID = function(id_person) {
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
 * Get services of a selected person by ID
 *
 * id_person Long ID of person to search for services
 * returns List
 **/
exports.getPersonServicesByID = function(id_person) {
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


/**
 * Update a person
 *
 * person Person Person object to be updated
 * no response value expected for this operation
 **/
exports.updatePerson = function(person) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

