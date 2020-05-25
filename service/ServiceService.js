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
  return sqlDb.from("Service")
          .select('presentation','name','photo_url','id_service').where("id_service", "=", id_service)
          .then(data => {
            return data.map(e => {
              e.presentation = e.presentation.substring(0,71);
              return e;
            })
          });
}


/**
 * Get service page 2 data by ID
 *
 * id_service Long ID of service to return
 * returns Service2
 **/
exports.getService2ByID = function(id_service) {
  return sqlDb.from("Service").select('name','location','id_service','informations').where("id_service", "=", id_service);
}


/**
 * Get articles items of a selected service by ID
 *
 * id_service Long ID of service to search for articles
 * returns List
 **/
exports.getServiceArticlesItemsByID = function(id_service) {
  return sqlDb('Article')
          .join('Service','Service.id_service','=','Article.id_service')
          .select('Article.id_article','Article.author','Article.publication_date','Article.photo1_url','Article.title','Article.id_service','Service.name')
          .where('Article.id_service', id_service);
}


/**
 * Get events items of a selected service by ID
 *
 * id_service Long ID of service to search for events
 * returns List
 **/
exports.getServiceEventsItemsByID = function(id_service) {
  return sqlDb('Event')
          .join('ServicesEvents', 'ServicesEvents.id_event','=','Event.id_event')
          .where('ServicesEvents.id_service', id_service)
          .select('Event.id_event','Event.date','Event.name','Event.location','Event.photo_url');
}


/**
 * Get people items of a selected service by ID
 *
 * id_service Long ID of service to search for people
 * returns List
 **/
exports.getServicePeopleItemsByID = function(id_service) {
  return sqlDb('Person')
          .join('PeopleServices', 'PeopleServices.id_person','=','Person.id_person')
          .where('PeopleServices.id_service', id_service)
          .select('Person.id_person','Person.name','Person.photo_url');
}


/**
 * Get services items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getServicesItems = function(offset,search) {
  return sqlDb('Service')
        .select('id_service','presentation','name','photo_url')
        .then(data => {
          return data.map(e => {
            e.presentation = e.presentation.substring(0,101);
            return e;
          })
        });
}