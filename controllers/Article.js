'use strict';

var utils = require('../utils/writer.js');
var Article = require('../service/ArticleService');

module.exports.getArticleByID = function getArticleByID (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.getArticleByID(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArticleEventIDByID = function getArticleEventIDByID (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.getArticleEventItemByID(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArticleServiceIDByID = function getArticleServiceIDByID (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.getArticleServiceItemByID(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArticlesItems = function getArticlesItems (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Article.getArticlesItems(offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRelatedArticlesItemsByID = function getRelatedArticlesItemsByID (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.getRelatedArticlesItemsByID(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
