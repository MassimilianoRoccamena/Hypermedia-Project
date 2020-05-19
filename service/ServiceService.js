'use strict';


/**
 * Data layer setup
 */
let sqlDb;

exports.serviceDbSetup = function(s) {
  sqlDb = s;
}


/**
 * Get related services items of a selected service by ID
 *
 * id_service Long ID of service to search for related
 * returns List
 **/
exports.getRelatedServicesItemsByID = function(id_service) {
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
 * Get service page 1 data by ID
 *
 * id_service Long ID of service to return
 * returns Service1
 **/
exports.getService1ByID = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "presentation" : "presentation",
  "name" : "name",
  "photo_url" : [ "photo_url", "photo_url" ],
  "id_service" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get service page 2 data by ID
 *
 * id_service Long ID of service to return
 * returns Service2
 **/
exports.getService2ByID = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "location" : "location",
  "id_service" : 0,
  "informations" : "informations"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get articles items of a selected service by ID
 *
 * id_service Long ID of service to search for articles
 * returns List
 **/
exports.getServiceArticlesItemsByID = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_article" : 0,
  "author" : "author",
  "publication_date" : "2000-01-23",
  "photo_url" : "photo_url",
  "title" : "title"
}, {
  "id_article" : 0,
  "author" : "author",
  "publication_date" : "2000-01-23",
  "photo_url" : "photo_url",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get events items of a selected service by ID
 *
 * id_service Long ID of service to search for events
 * returns List
 **/
exports.getServiceEventsItemsByID = function(id_service) {
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
 * Get people items of a selected service by ID
 *
 * id_service Long ID of service to search for people
 * returns List
 **/
exports.getServicePeopleItemsByID = function(id_service) {
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
 * Get services items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getServicesItems = function(offset,search) {
  /* return new Promise(function(resolve, reject) {
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
  }); */

  console.log(sqlDb);
  return sqlDb.from("Service").select("*");
}

