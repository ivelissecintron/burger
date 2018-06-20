-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create a database called programming_db --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255),
devoured BOOLEAN DEFAULT TRUE,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ("Bacon Cheeseburger");
INSERT INTO burgers (burger_name) VALUES ("Classic Double Cheeseburger");
INSERT INTO burgers (burger_name) VALUES ("Sunnyside Up Cheeseburger");
