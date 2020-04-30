CREATE DATABASE VoluntaryAssociation;

-- Main entities

CREATE TABLE Service {
    id_service int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name char(50) NOT NULL UNIQUE,
    presentation char(500) NOT NULL,
    informations char(500) NOT NULL,
    location char(100) NOT NULL,
    photo_url char(150) NOT NULL
};
CREATE TABLE Person {
    id_person int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name char(50) NOT NULL UNIQUE,
    role char(50) NOT NULL,
    email_address char(50) NOT NULL UNIQUE,
    phone_number char(10) NOT NULL,
    description char(500) NOT NULL,
    photo_url char(150) NOT NULL,
    starting_date DATE NOT NULL
};
CREATE TABLE Event {
    id_event int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_person int NOT NULL FOREIGN KEY REFERENCES Person(id_person),
    name char(50) NOT NULL UNIQUE,
    date DATE NOT NULL,
    location char(50) NOT NULL,
    description char(500) NOT NULL,
    pract_info char(500) NOT NULL,
    photo_url char(150) NOT NULL
};

-- Other entities

CREATE TABLE Article {
    id_article int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_service int NOT NULL FOREIGN KEY REFERENCES Service(id_service),
    id_event int NOT NULL FOREIGN KEY REFERENCES Event(id_event),
    author char(50) NOT NULL,
    publication_date DATE NOT NULL,
    title char(50) NOT NULL,
    bosy char(500) NOT NULL,
    photo_url char(150) NOT NULL
};
CREATE TABLE Contact {
    id_contact int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name char(50) NOT NULL UNIQUE,
    phone char(10) NOT NULL UNIQUE,
    email char(50) NOT NULL UNIQUE,
    location char(50) NOT NULL,
}

-- Related relations

CREATE TABLE RelatedServices {
    id_service1 NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Service(id_service),
    id_service2 NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Service(id_service),
}
CREATE TABLE RelatedEvents {
    id_event1 NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Service(id_service),
    id_event2 NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Service(id_service),
}
CREATE TABLE RelatedArticles {
    id_article1 NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Article(id_article),
    id_article2 NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Article(id_article),
}

-- Other relations

CREATE TABLE ServiceEvents {
    id_service NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Service(id_service),
    id_event NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Event(id_event),
}
CREATE TABLE PeopleServices {
    id_person NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Person(id_person),
    id_service NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES Service(id_service),
}