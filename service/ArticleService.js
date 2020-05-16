'use strict';


/**
 * Add a new article
 *
 * article Article Article object to be added
 * no response value expected for this operation
 **/
exports.addArticle = function(article) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an article by ID
 *
 * id_article Long ID of article to be deleted
 * no response value expected for this operation
 **/
exports.deleteArticle = function(id_article) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an article by ID
 *
 * id_article Long ID of article to return
 * returns Article
 **/
exports.getArticleByID = function(id_article) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_article" : 0,
  "email_address" : "email_address",
  "author" : "author",
  "publication_date" : "2000-01-23",
  "id_event" : 1,
  "photo_url" : "photo_url",
  "title" : "title",
  "body" : "body",
  "id_service" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get event of a selected article by ID
 *
 * id_article Long ID of article to search for event
 * returns EventItem
 **/
exports.getArticleEventByID = function(id_article) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "name" : "name",
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
 * Get service of a selected article by ID
 *
 * id_article Long ID of article to search for service
 * returns ServiceItem
 **/
exports.getArticleServiceByID = function(id_article) {
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
 * Get all articles
 *
 * returns List
 **/
exports.getArticlesAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_article" : 0,
  "email_address" : "email_address",
  "author" : "author",
  "publication_date" : "2000-01-23",
  "id_event" : 1,
  "photo_url" : "photo_url",
  "title" : "title",
  "body" : "body",
  "id_service" : 6
}, {
  "id_article" : 0,
  "email_address" : "email_address",
  "author" : "author",
  "publication_date" : "2000-01-23",
  "id_event" : 1,
  "photo_url" : "photo_url",
  "title" : "title",
  "body" : "body",
  "id_service" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all articles items
 *
 * page Long Articles page number to get
 * returns List
 **/
exports.getArticlesItemsAll = function(page) {
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
 * Get related articles of a selected article by ID
 *
 * id_article Long ID of article to search for related
 * returns List
 **/
exports.getRelatedArticlesByID = function(id_article) {
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
 * Update an article
 *
 * article Article Article object to be updated
 * no response value expected for this operation
 **/
exports.updateArticle = function(article) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

