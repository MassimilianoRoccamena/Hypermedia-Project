'use strict';


/**
 * Data layer setup
 */
let sqlDb;

exports.eventDbSetup = function(s) {
  sqlDb = s;
}


/**
 * Get event page 1 data by ID
 *
 * id_event Long ID of event to return
 * returns Event1
 **/
exports.getEvent1ByID = function(id_event) {
  return sqlDb.from("Event").select('id_event','name','description','photo_url').where("id_event", "=", id_event);
}


/**
 * Get event page 2 data by ID
 *
 * id_event Long ID of event to return
 * returns Event2
 **/
exports.getEvent2ByID = function(id_event) {
  return sqlDb.from("Event").select('id_event','name','date','pract_info','location').where("id_event", "=", id_event);
}


/**
 * Get articles items of a selected event by ID
 *
 * id_event Long ID of event to search for articles
 * returns List
 **/
exports.getEventArticlesItemsByID = function(id_event) {
  return sqlDb('Article')
          .join('Event','Article.id_event','=','Event.id_event')
          .select('Article.id_article','Article.author','Article.publication_date','Article.photo1_url','Article.title','Article.id_event','Event.name')
          .where('Article.id_event', id_event);
}


/**
 * Get person item of a selected event by ID
 *
 * id_event Long ID of event to search for person
 * returns PersonItem
 **/
exports.getEventPersonLabelByID = function(id_event) {
  return sqlDb('Person')
          .join('Event', 'Person.id_person','=','Event.id_person')
          .where('Event.id_event', id_event)
          .select('Person.id_person', 'Person.name');
}


/**
 * Get services items of a selected event by ID
 *
 * id_event Long ID of event to search for services
 * returns List
 **/
exports.getEventServicesItemsByID = function(id_event) {
  return sqlDb('Service')
          .join('ServicesEvents','Service.id_service','=','ServicesEvents.id_service')
          .select('Service.id_service','Service.presentation','Service.name','Service.photo_url')
          .where('ServicesEvents.id_event', id_event);
}


/**
 * Get events items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getEventsItems = function(offset,search,month) {
  //limVal=12
  /*
  //seaarch&month
  if (search != "" && search != null && search != undefined) {
    //11
    if (month != "all" && month != null && month != undefined) {
      return sqlDb('Event')
          .where('name','like','%'+search+'%')
          .andWhere('date','like','%-'+month+'-%')
          .limit(limVal)
          .offset(offset)
          .select('id_event','location','date','name','photo_url');
    //10
    } else {
      return sqlDb('Event')
          .where('name','like','%'+search+'%')
          .limit(limVal)
          .offset(offset)
          .select('id_event','location','date','name','photo_url');
    }
  } else {
    //01
    if (month != "all" && month != null && month != undefined) {
      return sqlDb('Event')
          .where('date','like','%-'+month+'-%')
          .limit(limVal)
          .offset(offset)
          .select('id_event','location','date','name','photo_url');
    //00
    } else {
      return sqlDb('Event')
          .limit(limVal)
          .offset(offset)
          .select('id_event','location','date','name','photo_url');
    }
  } */

  return sqlDb('Event')
          .limit(limVal)
          .offset(offset)
          .select('id_event','location','date','name','photo_url');
}


/**
 * Get related events items of a selected event by ID
 *
 * id_event Long ID of event to search for related
 * returns List
 **/
exports.getRelatedEventsItemsByID = function(id_event) {
  return sqlDb.from('Event')
        .join('RelatedEvents','Event.id_event','=','RelatedEvents.id_event2')
        .where('RelatedEvents.id_event1',id_event)
        .select('Event.location','Event.name','Event.photo_url','Event.id_event','Event.date')
        .union(function(){
          this.select('Event.location','Event.name','Event.photo_url','Event.id_event','Event.date')
              .where('RelatedEvents.id_event2',id_event)
              .from('Event')
              .join('RelatedEvents','Event.id_event','=','RelatedEvents.id_event1')
        });
}

