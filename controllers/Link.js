'use strict';

var utils = require('../utils/writer.js');
var Link = require('../service/LinkService');

module.exports.addPeopleServices = function addPeopleServices (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  var id_service = req.swagger.params['id_service'].value;
  Link.addPeopleServices(id_person,id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addRelatedArticles = function addRelatedArticles (req, res, next) {
  var id_article1 = req.swagger.params['id_article1'].value;
  var id_article2 = req.swagger.params['id_article2'].value;
  Link.addRelatedArticles(id_article1,id_article2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addRelatedEvents = function addRelatedEvents (req, res, next) {
  var id_event1 = req.swagger.params['id_event1'].value;
  var id_event2 = req.swagger.params['id_event2'].value;
  Link.addRelatedEvents(id_event1,id_event2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addRelatedServices = function addRelatedServices (req, res, next) {
  var id_service1 = req.swagger.params['id_service1'].value;
  var id_service2 = req.swagger.params['id_service2'].value;
  Link.addRelatedServices(id_service1,id_service2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addServicesEvents = function addServicesEvents (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  var id_event = req.swagger.params['id_event'].value;
  Link.addServicesEvents(id_service,id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePeopleServices = function deletePeopleServices (req, res, next) {
  var id_person = req.swagger.params['id_person'].value;
  var id_service = req.swagger.params['id_service'].value;
  Link.deletePeopleServices(id_person,id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRelatedArticles = function deleteRelatedArticles (req, res, next) {
  var id_article1 = req.swagger.params['id_article1'].value;
  var id_article2 = req.swagger.params['id_article2'].value;
  Link.deleteRelatedArticles(id_article1,id_article2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRelatedEvents = function deleteRelatedEvents (req, res, next) {
  var id_event1 = req.swagger.params['id_event1'].value;
  var id_event2 = req.swagger.params['id_event2'].value;
  Link.deleteRelatedEvents(id_event1,id_event2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRelatedServices = function deleteRelatedServices (req, res, next) {
  var id_service1 = req.swagger.params['id_service1'].value;
  var id_service2 = req.swagger.params['id_service2'].value;
  Link.deleteRelatedServices(id_service1,id_service2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServicesEvents = function deleteServicesEvents (req, res, next) {
  var id_service = req.swagger.params['id_service'].value;
  var id_event = req.swagger.params['id_event'].value;
  Link.deleteServicesEvents(id_service,id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEventArticles = function updateEventArticles (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  var id_event = req.swagger.params['id_event'].value;
  Link.updateEventArticles(id_article,id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEventContact = function updateEventContact (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  var id_person = req.swagger.params['id_person'].value;
  Link.updateEventContact(id_event,id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateServiceArticles = function updateServiceArticles (req, res, next) {
  var id_article = req.swagger.params['id_article'].value;
  var id_service = req.swagger.params['id_service'].value;
  Link.updateServiceArticles(id_article,id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
