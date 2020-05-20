'use strict';



/**
 * Data layer setup
 */
let sqlDb;

exports.articleDbSetup = function(s) {
  sqlDb = s;
}


/**
 * Get article page data by ID
 *
 * id_article Long ID of article to return
 * returns Article
 **/
exports.getArticleByID = function(id_article) {
  /* return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_article" : 0,
  "photo1_url" : "photo1_url",
  "email_address" : "email_address",
  "author" : "author",
  "publication_date" : "2000-01-23",
  "id_event" : 1,
  "photo2_url" : "photo2_url",
  "title" : "title",
  "body" : "body",
  "id_service" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }); */

  return sqlDb.from("Article").select("*").where("id_article", "=", id_article);
}


/**
 * Get event item of a selected article by ID
 *
 * id_article Long ID of article to search for event
 * returns EventItem
 **/
exports.getArticleEventItemByID = function(id_article) {
/*  return new Promise(function(resolve, reject) {
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
  });*/
  return sqlDb('Event')
          .join('Article', 'Article.id_event','=','Event.id_event')
          .where('Article.id_article', id_article)
          .select('Event.id_event','Event.name','Event.date','Event.location','Event.photo_url');
}


/**
 * Get service item of a selected article by ID
 *
 * id_article Long ID of article to search for service
 * returns ServiceItem
 **/
exports.getArticleServiceItemByID = function(id_article) {
/*  return new Promise(function(resolve, reject) {
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
  });*/
  return sqlDb('Service')
          .join('Article', 'Article.id_service','=','Service.id_service')
          .where('Article.id_article', id_article)
          .select('Service.id_service','Service.name','Service.presentation','Service.photo_url');
}


/**
 * Get articles items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getArticlesItems = function(offset,search) {
/*  return new Promise(function(resolve, reject) {
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
  });*/
  return sqlDb("Article")
          .select('id_article','author','publiction_date','photo_url','title')
}


/**
 * Get related articles items of a selected article by ID
 *
 * id_article Long ID of article to search for related
 * returns List
 **/
exports.getRelatedArticlesItemsByID = function(id_article) {
  /* return new Promise(function(resolve, reject) {
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
  }); */

  return sqlDb.from('Article')
        .join('RelatedArticles','Article.id_article','=','RelatedArticles.id_article1')
        .where('RelatedArticles.id_article1',id_article)
        .select('Article.id_article','Article.author','Article.publication_date','Article.photo_url','Article.title')
        .union(function(){
          sqlDb.select('Article.id_article','Article.author','Article.publication_date','Article.photo_url','Article.title')
              .where('RelatedArticles.id_article2',id_article)
              .from('Article')
              .join('RelatedArticles','Article.id_article','=','RelatedArticles.id_article2')
        });
}

