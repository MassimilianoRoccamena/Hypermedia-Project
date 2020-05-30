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

Main components which realize the business logic are: Service, Event, Person, Article, Contact, Message.

### API

#### REST compliance

Describe here to what extent did you follow REST principles and what are the reasons for which you might have decided to diverge. Note, you must not describe the whole API here, just the design decisions.

#### OpenAPI Resource models

Mostly each resource provided by the API can be mapped to one or more database table projected models. For mostly each entity, one projection of the the table is always used: the entity item model, which is used to represent one topic inside one small list element. Each semantic relation request produces only presentation significant data. Each to-n relation request produces an array of items, except for RelatedArticles which incapsulates the array with the subject name. Person and Article are represented using one page, so there is one model representing the page data. Service and Event are two page presented, so there are two models for each presentation projection. Contact and Message can only be read/posted.

Group requests also produces an array, but is also implemented paginating (with fixed limit) and filtering the related table. For example you can search page 2 of a name and month filtered event with the request /events?offset=1&search=name&month=July.

### Data model

Below the related database tables diagram is presented. Each request minimizes presentation information needed, refining and increasing overall data transmission efficiency as described in previous section.

## Implementation

### Tools used

- connect: web application framework
- swagger-tools: provides a middleware for easy OpenAPI server implementation
- js-yaml: for loading .yaml swagger specification
- serve-static: provides static assets (html,css,img..) request handling
- knex: exposes useful db query methods
- pg: provides postgres dbms handling
- heroku: handles project deployment on Heroku cloud

### Discussion

Describe here:
- How did you make sure your web application adheres to the provided OpenAPI specification? Which method did you use to test all APIs endpoints against the expected response?
- Why do you think your web application adheres to common practices to partition a REST-based web application (static assets vs. application data)
- Describe synthetically why and how did you manage session state, what are the state change triggering actions (e.g., POST to login etc..).
- Which technology did you use (relational or a no-SQL database) for managing the data model?

## Other information

### Task assignment

- Massimiliano: Design 10%, Frontend 29%, OpenAPI 28%, Backend 29%, Documentation 4%
- Lorenzo: Design 10%, Frontend 40%, OpenAPI 10%, Backend 40%, Documentation 0%
- Elena: Design 85%, Frontend 15%, OpenAPI 0%, Backend 0%, Documentation 0%

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
