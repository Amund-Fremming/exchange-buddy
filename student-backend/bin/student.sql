DROP TABLE IF EXISTS teststudent;

CREATE TABLE teststudent
(
	sid SERIAL PRIMARY KEY,
	name VARCHAR,
	studentnr INTEGER
);