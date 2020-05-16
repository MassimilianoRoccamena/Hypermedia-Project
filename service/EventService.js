'use strict';


/**
 * Add a new event
 *
 * event Event Event object to be added
 * no response value expected for this operation
 **/
exports.addEvent = function(event) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an event by ID
 *
 * id_event Long ID of event to be deleted
 * no response value expected for this operation
 **/
exports.deleteEvent = function(id_event) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get articles of a selected event by ID
 *
 * id_event Long ID of event to search for articles
 * returns List
 **/
exports.getEventArticlesByID = function(id_event) {
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
 * Get an event by ID
 *
 * id_event Long ID of event to return
 * returns Event
 **/
exports.getEventByID = function(id_event) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "id_person" : 6,
  "name" : "name",
  "description" : "description",
  "pract_info" : "pract_info",
  "location" : "location",
  "id_event" : 0,
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
 * Get all events by month
 *
 * month Long Month of events to return
 * page Long Events page number to get
 * returns List
 **/
exports.getEventByMonth = function(month,page) {
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
 * Get an event page 1 data by ID
 *
 * id_event Long ID of event to return
 * returns EventPage1
 **/
exports.getEventPage1ByID = function(id_event) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "id_event" : 0,
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
 * Get an event page 2 data by ID
 *
 * id_event Long ID of event to return
 * returns EventPage2
 **/
exports.getEventPage2ByID = function(id_event) {
  return new Promise(function(resolve, reject) {
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
  });
}


/**
 * Get person of a selected event by ID
 *
 * id_event Long ID of event to search for person
 * returns PersonItem
 **/
exports.getEventPersonByID = function(id_event) {
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
 * Get services of a selected event by ID
 *
 * id_event Long ID of event to search for services
 * returns List
 **/
exports.getEventServicesByID = function(id_event) {
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
 * Get all events
 *
 * returns List
 **/
exports.getEventsAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "id_person" : 6,
  "name" : "name",
  "description" : "description",
  "pract_info" : "pract_info",
  "location" : "location",
  "id_event" : 0,
  "photo_url" : "photo_url"
}, {
  "date" : "2000-01-23",
  "id_person" : 6,
  "name" : "name",
  "description" : "description",
  "pract_info" : "pract_info",
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
 * Get all events items
 *
 * page Long Events page number to get
 * returns List
 **/
exports.getEventsItemAll = function(page) {
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
 * Get related events of a selected event by ID
 *
 * id_event Long ID of event to search for related
 * returns List
 **/
exports.getRelatedEventsByID = function(id_event) {
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
 * Update an event
 *
 * event Event Event object to be updated
 * no response value expected for this operation
 **/
exports.updateEvent = function(event) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

