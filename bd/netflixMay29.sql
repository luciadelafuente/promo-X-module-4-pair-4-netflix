USE netflix;

#peliculas
SELECT * FROM movies;
SELECT title, genre FROM movies WHERE year >= 1990 ;
SELECT * FROM movies WHERE category = 'Top 10';

#cambio fecha la vida es bella
UPDATE movies SET year = '1997' ;

#actores info
SELECT * FROM actors;
SELECT * FROM actors WHERE birthday >= '1950-01-01' and birthday <= '1959-12-31';
SELECT name , lastname FROM actors WHERE country = "Estados Unidos"; 

#usuarios info
SELECT * FROM users WHERE plan_details = "Standard";
#eliminar usuario con letra m al comienzo
DELETE FROM users WHERE name LIKE 'M%';

#BONUS: agregar campos a las tablas
ALTER TABLE actors ADD image varchar(1000) ; 

#crear y borrar tabla
CREATE TABLE prueba (
	name varchar (45),
    date date
);
DROP TABLE prueba;

