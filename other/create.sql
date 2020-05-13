CREATE DATABASE VoluntaryAssociation;

-- Main entities

CREATE TABLE Service (
    id_service SERIAL NOT NULL PRIMARY KEY,
    name char(50) NOT NULL UNIQUE,
    presentation char(500) NOT NULL,
    informations char(500) NOT NULL,
    location char(100) NOT NULL,
    photo_url char(150) NOT NULL
);
CREATE TABLE Person (
    id_person SERIAL NOT NULL PRIMARY KEY,
    name char(50) NOT NULL UNIQUE,
    role char(50) NOT NULL,
    email_address char(50) NOT NULL UNIQUE,
    phone_number char(10) NOT NULL,
    description char(500) NOT NULL,
    photo_url char(150) NOT NULL,
    starting_date DATE NOT NULL
);
CREATE TABLE Event (
    id_event SERIAL NOT NULL PRIMARY KEY,
    id_person int NOT NULL,
    name char(50) NOT NULL UNIQUE,
    date DATE NOT NULL,
    location char(50) NOT NULL,
    description char(500) NOT NULL,
    pract_info char(500) NOT NULL,
    photo_url char(150) NOT NULL,
	FOREIGN KEY(id_person) REFERENCES Person(id_person)
);

-- Other entities

CREATE TABLE Article (
    id_article SERIAL NOT NULL PRIMARY KEY,
    id_service int NOT NULL ,
    id_event int NOT NULL,
    author char(50) NOT NULL,
    publication_date DATE NOT NULL,
    title char(50) NOT NULL,
    bosy char(500) NOT NULL,
    photo_url char(150) NOT NULL,
	FOREIGN KEY(id_service) REFERENCES Service(id_service),
	FOREIGN KEY(id_event) REFERENCES Event(id_event)
);
CREATE TABLE Contact (
    id_contact SERIAL NOT NULL PRIMARY KEY,
    name char(50) NOT NULL UNIQUE,
    phone char(10) NOT NULL UNIQUE,
    email char(50) NOT NULL UNIQUE,
    location char(50) NOT NULL
);

-- Related relations

CREATE TABLE RelatedServices (
    id_service1 int NOT NULL,
    id_service2 int NOT NULL,
	FOREIGN KEY(id_service1) REFERENCES Service(id_service),
	FOREIGN KEY(id_service2) REFERENCES Service(id_service),
	PRIMARY KEY(id_service1,id_service2)
);
CREATE TABLE RelatedEvents (
    id_event1 int NOT NULL,
    id_event2 int NOT NULL,
	FOREIGN KEY(id_event1) REFERENCES Service(id_service),
	FOREIGN KEY(id_event2) REFERENCES Service(id_service),
	PRIMARY KEY(id_event1,id_event2)
);
CREATE TABLE RelatedArticles (
    id_article1 int NOT NULL,
    id_article2 int NOT NULL,
	FOREIGN KEY(id_article1) REFERENCES Article(id_article),
	FOREIGN KEY(id_article2) REFERENCES Article(id_article),
	PRIMARY KEY(id_article1,id_article2)
);

-- Other relations

CREATE TABLE ServiceEvents (
    id_service int NOT NULL,
    id_event int NOT NULL,
	FOREIGN KEY(id_service) REFERENCES Service(id_service),
	FOREIGN KEY(id_event) REFERENCES Event(id_event),
	PRIMARY KEY(id_service,id_event)
);
CREATE TABLE PeopleServices (
    id_person int NOT NULL,
    id_service int NOT NULL,
	FOREIGN KEY(id_person) REFERENCES Person(id_person),
	FOREIGN KEY(id_service) REFERENCES Service(id_service),
	PRIMARY KEY(id_person,id_service)
);