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
  return sqlDb.from('Service')
        .join('RelatedServices','Service.id_service','=','RelatedServices.id_service2')
        .where('RelatedServices.id_service1', id_service)
        .select('Service.presentation','Service.name','Service.photo_url','Service.id_service')
        .union(function(){
          this.select('Service.presentation','Service.name','Service.photo_url','Service.id_service')
              .where('RelatedServices.id_service2',id_service)
              .from('Service')
              .join('RelatedServices','Service.id_service','=','RelatedServices.id_service1')
        })
        .then(data => {
          return data.map(e => {
            e.presentation = e.presentation.substring(0,71);
            return e;
          })
        });
}


/**
 * Get service page 1 data by ID
 *
 * id_service Long ID of service to return
 * returns Service1
 **/
exports.getService1ByID = function(id_service) {
  return sqlDb.from("Service")
          .select('presentation','name','photo_url','id_service').where("id_service", "=", id_service);
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
          .select('Article.id_article','Article.author','Article.publication_date','Article.photo1_url','Article.title','Article.id_service')
          .where('Article.id_service', id_service)
          .then(data1 => {
            return sqlDb('Service')
                  .where('id_service', '=', id_service)
                  .select('name')
                  .then((data2) => {
                      return {'articles':data1,'name':data2.name};
                  });
          });
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
  let limVal=8;

  //search
  if (search != "" && search != null && search != undefined) {
    //1
    return sqlDb('Service')
          .where('name','like','%'+search+'%')
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_service','presentation','name','photo_url')
          .then(data => {
            return data.map(e => {
              e.presentation = e.presentation.substring(0,171);
              return e;
            })
          });
  } else {
    //0
    return sqlDb('Service')
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_service','presentation','name','photo_url')
          .then(data => {
            return data.map(e => {
              e.presentation = e.presentation.substring(0,171);
              return e;
            })
          });
  }
}