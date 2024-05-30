CREATE DATABASE Netflix;
USE Netflix;

CREATE TABLE movies(
idMovies INT auto_increment primary key,
title VARCHAR (45) not null,
genre VARCHAR (45) not null,
image VARCHAR (1000) not null,
category VARCHAR (45) not null,
year SMALLINT
);

CREATE TABLE Users(
idUser INT auto_increment primary key,
user VARCHAR (45) not null,
password VARCHAR (45) not null,
name VARCHAR (45) not null,
email VARCHAR (45) not null,
plan_details VARCHAR (45) not null
);

CREATE TABLE Actors(
idActor INT auto_increment primary key,
name VARCHAR (45) not null,
lastname VARCHAR (45) not null,
country VARCHAR (45) not null,
birthday DATE
);

INSERT INTO movies (title, genre, image, category, year)
VALUES ('Pulp Fiction', 'Crimen', 'https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg', 'Top 10', '1994')
