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
  return sqlDb.from("Event").select('id_event','name','description','photo_url').where("id_event", "=", id_event)[0];
}


/**
 * Get event page 2 data by ID
 *
 * id_event Long ID of event to return
 * returns Event2
 **/
exports.getEvent2ByID = function(id_event) {
  return sqlDb.from("Event").select('id_event','name','date','pract_info','location').where("id_event", "=", id_event)[0];
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
          .select('Article.id_article','Article.author','Article.publication_date','Article.photo1_url','Article.title','Article.id_event')
          .where('Article.id_event', id_event)
          .then(data1 => {
            return sqlDb('Event')
                  .where('id_event', '=', id_event)
                  .select('name')
                  .then((data2) => {
                      return {'articles':data1,'name':data2[0].name};
                  });
          });
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
          .select('Person.id_person', 'Person.name')[0];
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
          .where('ServicesEvents.id_event', id_event)
          .then(data => {
            return data.map(e => {
              e.presentation = e.presentation.substring(0,71);
              e.photo_url = e.photo_url[0];
              return e;
            })
          });
}


/**
 * Get events items
 *
 * offset Integer Pagination offset
 * search String Text search
 * returns List
 **/
exports.getEventsItems = function(offset,search,month) {
  let limVal=12
  
  //seaarch&month
  if (search != "" && search != null && search != undefined) {
    //11
    if (month != 0 && month != null && month != undefined) {
      if (month < 10) {
        month = "0"+month;
      } else {
        month = ""+month;
      }

      return sqlDb('Event')
          .where('name','like','%'+search+'%')
          .andWhereRaw('EXTRACT(MONTH FROM date::date) = ?', [month])
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_event','location','date','name','photo_url')
          .then(data => {
            return data.map(e => {
              e.photo_url = e.photo_url[0];
              return e;
            })
          });
    //10
    } else {
      return sqlDb('Event')
          .where('name','like','%'+search+'%')
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_event','location','date','name','photo_url')
          .then(data => {
            return data.map(e => {
              e.photo_url = e.photo_url[0];
              return e;
            })
          });
    }
  } else {
    //01
    if (month != 0 && month != null && month != undefined) {
      if (month < 10) {
        month = "0"+month;
      } else {
        month = ""+month;
      }
      
      return sqlDb('Event')
          .whereRaw('EXTRACT(MONTH FROM date::date) = ?', [month])
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_event','location','date','name','photo_url')
          .then(data => {
            return data.map(e => {
              e.photo_url = e.photo_url[0];
              return e;
            })
          });
    //00
    } else {
      return sqlDb('Event')
          .limit(limVal)
          .offset(offset*limVal)
          .select('id_event','location','date','name','photo_url')
          .then(data => {
            return data.map(e => {
              e.photo_url = e.photo_url[0];
              return e;
            })
          });
    }
  }
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
        })
        .then(data => {
          return data.map(e => {
            e.photo_url = e.photo_url[0];
            return e;
          })
        });;
}

