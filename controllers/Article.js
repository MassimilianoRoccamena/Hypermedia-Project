'use strict';

var utils = require('../utils/writer.js');
var Article = require('../service/ArticleService');

module.exports.addArticle = function addArticle (req, res, next) {
  var article = req.swagger.params['article'].value;
  Article.addArticle(article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteArticle = function deleteArticle (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.deleteArticle(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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

module.exports.getArticleEventByID = function getArticleEventByID (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.getArticleEventByID(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArticleServiceByID = function getArticleServiceByID (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.getArticleServiceByID(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArticlesAll = function getArticlesAll (req, res, next) {
  Article.getArticlesAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArticlesItemsAll = function getArticlesItemsAll (req, res, next) {
  var page = req.swagger.params['page'].value;
  Article.getArticlesItemsAll(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRelatedArticlesByID = function getRelatedArticlesByID (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  Article.getRelatedArticlesByID(id_article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateArticle = function updateArticle (req, res, next) {
  var article = req.swagger.params['article'].value;
  Article.updateArticle(article)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
