'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http'),
    serveStatic = require('serve-static');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Data layer
var {setupDataLayer}= require("./service/DataLayer");

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Provide public static assets
  app.use(serveStatic(__dirname + '/public'));

  // Setup data layer
  setupDataLayer();

  // Start the server
  let port = process.env.PORT || serverPort;

  http.createServer(app).listen(port, function () {
    console.log('Your server is listening on (http://localhost:%d)', port);
    console.log('Swagger-ui is available on http://localhost:%d/docs', port);
  });

});
