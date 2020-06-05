const sqlDbFactory = require("knex");

let { articleDbSetup } = require("./ArticleService");
let { contactDbSetup } = require("./ContactService");
let { eventDbSetup } = require("./EventService");
let { personDbSetup } = require("./PersonService");
let { serviceDbSetup } = require("./ServiceService");

let sqlDb = sqlDbFactory({
    debug: true,
    client: "pg", 
    connection: process.env.DATABASE_URL, 
    ssl: true 
});

function setupDataLayer() { 
    console.log("Setting up data layer");
    articleDbSetup(sqlDb);
    contactDbSetup(sqlDb);
    eventDbSetup(sqlDb);
    personDbSetup(sqlDb);
    serviceDbSetup(sqlDb);
    console.log('Data layer ready at ' + process.env.DATABASE_URL);
}

module.exports = { database: sqlDb, setupDataLayer };