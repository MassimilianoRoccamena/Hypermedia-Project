# Documentation of the Backend part

> Deliverable D1

## General group information

| Member n. | Role          | First name   | Last Name | Matricola | Email address   |
|-----------|---------------|--------------|-----------|-----------|-----------------|
| 1         | administrator | Massimiliano | Roccamena |           |                 |
| 2         | member        | Lorenzo      | Romanò    |           |                 |
| 3         | member        | Elena        | Buttolo   |           |                 |

## Links to other deliverables

- Deliverable D0: the web application is accessible at [this address](https://child4help.herokuapp.com).
- Deliverable D2: the YAML or JSON file containing the specification of the app API can be found at [this address](https://child4help.herokuapp.com/backend/spec.yaml).
- Deliverable D3: the SwaggerUI page of the same API is available at [this address](https://child4help.herokuapp.com/backend/swaggerui).
- Deliverable D4: the source code of D0 is available as a zip file at [this address](https://child4help.herokuapp.com/backend/app.zip).
- Deliverable D5: the address of the online source control repository is available [this address](https://github.com/MassimilianoRoccamena/Hypermedia-Project.git). We hereby declare that this is a private repository and, upon request, we will give access to the instructors.

## Specification

### Web Architecture

The web application is based on a Service Oriented Application pattern, as a 3-tiered web site application. Presentation layer is realized using Html+Javscript+CSS+Bootstrap web pages, served by the web server at addresses / (home page) and /pages (other pages). Application layer is implemented in Node.js and provides static assets (pages,scripts,styles,media) and application endpoints at address /api. Data layer is implemented using a PostgreSQL DBMS connected to the application server. Application and database servers are both hosted on Heroku and Heroku Postgres PaaS cloud.

### API

#### REST compliance

Describe here to what extent did you follow REST principles and what are the reasons for which you might have decided to diverge. Note, you must not describe the whole API here, just the design decisions.

#### OpenAPI Resource models

Describe here synthetically, which models you have introduced for resources.

### Data model

Describe with an ER diagram the model used in the data layer of your web application. How these map to the OpenAPI data model?

## Implementation

### Tools used
The application implementation includes the following packages dependencies:
>- connect: web application framework
>- swagger-tools: provides a middleware for easy OpenAPI server implementation
>- js-yaml: for loading .yaml swagger specification
>- serve-static: provides static assets (html,css,img..) request handling
>- knex: exposes useful db query methods
>- pg: provides postgres dbms handling

### Discussion

Describe here:
- How did you make sure your web application adheres to the provided OpenAPI specification? Which method did you use to test all APIs endpoints against the expected response?
- Why do you think your web application adheres to common practices to partition a REST-based web application (static assets vs. application data)
- Describe synthetically why and how did you manage session state, what are the state change triggering actions (e.g., POST to login etc..).
- Which technology did you use (relational or a no-SQL database) for managing the data model?

## Other information

### Task assignment

Describe here how development tasks have been subdivided among members of the group:
> - Massimiliano: Design 10%, Frontend 29%, OpenAPI 28%, Backend 29%, Documentation 4%
> - Lorenzo: Design 10%, Frontend 40%, OpenAPI 10%, Backend 40%, Documentation 0%
> - Elena: Design 98%, Frontend 2%, OpenAPI 0%, Backend 0%, Documentation 0%

### Analysis of existing API

Describe here the research of (full or part of) existing APIs that are similar in objectives and scope to the one implemented, that have possibly guided implementation choices (these should not be necessarily OpenAPI implementations). Toy APIs (such as the Swagger's Pet Store) or the example shown during lectures are not a valid response.
Use TWO or more items of the form:
> We took (full/partial) inspiration from API <XYZ>(link) for the part of the > API that manages <ABC> because of <REASON>.
Or
> For the part of the API that manages <ABC> we considered/studied <XYZ>(link) > because of <REASON> but wasn't completely fitting to our purpose because of > <REASON>.
> 
### Learning outcome

What was the most important thing all the members have learned while developing this part of the project, what questions remained unanswered, how you will use what you've learned in your everyday life?
Examples:
- Foo learned to write SQL queries and Javascript but wanted to know more about caching, he's probably going to create his own startup with what she has learned - Bar learned how to deploy on a cloud platform, he would have liked to know more about promises for asynchronous code..
