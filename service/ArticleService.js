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
  return sqlDb("Article")
        .select("*")
        .where("id_article", "=", id_article)
        .then(data => {
          return data[0]
        });
}


/**
 * Get event item of a selected article by ID
 *
 * id_article Long ID of article to search for event
 * returns EventItem
 **/
exports.getArticleEventItemByID = function(id_article) {
  return sqlDb('Event')
          .join('Article', 'Article.id_event','=','Event.id_event')
          .where('Article.id_article', id_article)
          .select('Event.id_event','Event.name','Event.date','Event.location','Event.photo_url')
          .then(data => {
            return data[0]
          });
}


/**
 * Get service item of a selected article by ID
 *
 * id_article Long ID of article to search for service
 * returns ServiceItem
 **/
exports.getArticleServiceItemByID = function(id_article) {
  return sqlDb('Service')
          .join('Article', 'Article.id_service','=','Service.id_service')
          .where('Article.id_article', id_article)
          .select('Service.id_service','Service.name','Service.presentation','Service.photo_url')
          .then(data => {
            return data[0]
          });
}


/**
 * Get articles items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getArticlesItems = function(offset,search) {
  let limVal=12;

  //search
  if (search != "" && search != null && search != undefined) {
    //1
    return sqlDb("Article")
          .where('title','like','%'+search+'%')
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_article','author','publication_date','photo1_url','title');
  } else {
    //0
    return sqlDb("Article")
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_article','author','publication_date','photo1_url','title');
  }
}


/**
 * Get related articles items of a selected article by ID
 *
 * id_article Long ID of article to search for related
 * returns List
 **/
exports.getRelatedArticlesItemsByID = function(id_article) {
  return sqlDb('Article')
        .join('RelatedArticles','Article.id_article','=','RelatedArticles.id_article2')
        .where('RelatedArticles.id_article1',id_article)
        .select('Article.id_article','Article.author','Article.publication_date','Article.photo1_url','Article.title')
        .union(function(){
          this.select('Article.id_article','Article.author','Article.publication_date','Article.photo1_url','Article.title')
              .where('RelatedArticles.id_article2',id_article)
              .from('Article')
              .join('RelatedArticles','Article.id_article','=','RelatedArticles.id_article1')
        });
}

