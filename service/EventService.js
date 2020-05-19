'use strict';


/**
 * Data layer setup
 */
let sqlDb;

exports.eventDbSetup = function(s) {
  sqlDb = s;
}


/**
 * Get event page 1 data by ID
 *
 * id_event Long ID of event to return
 * returns Event1
 **/
exports.getEvent1ByID = function(id_event) {
  /* return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "id_event" : 0,
  "photo_url" : [ "photo_url", "photo_url" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }); */

  return sqlDb.from("Event").select("*").where("id_event", "=", id_event);
}


/**
 * Get event page 2 data by ID
 *
 * id_event Long ID of event to return
 * returns Event2
 **/
exports.getEvent2ByID = function(id_event) {
  /* return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "name" : "name",
  "pract_info" : "pract_info",
  "location" : "location",
  "id_event" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }); */

  return sqlDb.from("Event").select("*").where("id_event", "=", id_event);
}


/**
 * Get articles items of a selected event by ID
 *
 * id_event Long ID of event to search for articles
 * returns List
 **/
exports.getEventArticlesItemsByID = function(id_event) {
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
 * Get person item of a selected event by ID
 *
 * id_event Long ID of event to search for person
 * returns PersonItem
 **/
exports.getEventPersonItemByID = function(id_event) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_person" : 0,
  "name" : "name",
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
 * Get services items of a selected event by ID
 *
 * id_event Long ID of event to search for services
 * returns List
 **/
exports.getEventServicesItemsByID = function(id_event) {
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
 * Get events items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getEventsItems = function(offset,search) {
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
 * Get events items by month
 *
 * month Long Month of events to return
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getEventsItemsByMonth = function(month,offset,search) {
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
 * Get related events items of a selected event by ID
 *
 * id_event Long ID of event to search for related
 * returns List
 **/
exports.getRelatedEventsItemsByID = function(id_event) {
  /* return new Promise(function(resolve, reject) {
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
  }); */

  return sqlDb.from("Event").select("*");
}

