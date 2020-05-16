'use strict';


/**
 * Add a new service
 *
 * service Service Service object to be added
 * no response value expected for this operation
 **/
exports.addService = function(service) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a service by ID
 *
 * id_service Long ID of service to be deleted
 * no response value expected for this operation
 **/
exports.deleteService = function(id_service) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get related services of a selected service by ID
 *
 * id_service Long ID of service to search for related
 * returns List
 **/
exports.getRelatedServicesByID = function(id_service) {
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
 * Get articles of a selected service by ID
 *
 * id_service Long ID of service to search for articles
 * returns List
 **/
exports.getServiceArticlesByID = function(id_service) {
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
 * Get a service by ID
 *
 * id_service Long ID of service to return
 * returns Service
 **/
exports.getServiceByID = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "presentation" : "presentation",
  "name" : "name",
  "location" : "location",
  "photo_url" : "photo_url",
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
 * Get events of a selected service by ID
 *
 * id_service Long ID of service to search for events
 * returns List
 **/
exports.getServiceEventsByID = function(id_service) {
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
 * Get a service page 1 data by ID
 *
 * id_service Long ID of service to return
 * returns ServicePage1
 **/
exports.getServicePage1ByID = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "presentation" : "presentation",
  "name" : "name",
  "photo_url" : "photo_url",
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
 * Get a service page 2 data by ID
 *
 * id_service Long ID of service to return
 * returns ServicePage2
 **/
exports.getServicePage2ByID = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
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
 * Get people of a selected service by ID
 *
 * id_service Long ID of service to search for people
 * returns List
 **/
exports.getServicePeopleByID = function(id_service) {
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
 * Get all services
 *
 * returns List
 **/
exports.getServicesAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "presentation" : "presentation",
  "name" : "name",
  "location" : "location",
  "photo_url" : "photo_url",
  "id_service" : 0,
  "informations" : "informations"
}, {
  "presentation" : "presentation",
  "name" : "name",
  "location" : "location",
  "photo_url" : "photo_url",
  "id_service" : 0,
  "informations" : "informations"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all services items
 *
 * page Long Services page number to get
 * returns List
 **/
exports.getServicesItemsAll = function(page) {
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
 * Update a service
 *
 * service Service Service object to be updated
 * no response value expected for this operation
 **/
exports.updateService = function(service) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

