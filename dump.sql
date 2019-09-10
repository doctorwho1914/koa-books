create database books;

create table Books
(
	id int auto_increment primary key unique ,
	title varchar(128) null,
	date datetime default current_timestamp null,
	author varchar(128) null,
	description varchar(256) null,
	image varchar(256) null
);

INSERT INTO books.Books (id, title, date, author, description, image) VALUES (1, 'title1', '2019-09-10 00:21:28', 'piter piterson', 'desdescription', 'fdf');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (2, 'title2', '2019-09-10 01:32:42', 'piter piterson', 'zxc', 'asd');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (3, 'title3', '2019-09-10 01:32:42', 'piter piterson', null, null);
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (4, 'title4', '2019-09-10 01:32:42', 'stepanov', 'dddddd', 'ffffffffff');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (5, 'title5', '2019-09-10 01:32:42', 'petrov', null, null);
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (6, 'title6', '2019-09-10 01:32:42', 'sidorov', null, null);
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (7, 'title7', '2019-09-10 01:32:42', 'piter piterson', 'desdescription', 'fdf');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (8, 'title8', '2019-09-10 01:32:42', 'piter piterson', 'desdescription', 'fdf');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (9, 'title9', '2019-09-10 01:32:42', 'piter piterson', 'desdescription', 'fdf');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (10, 'title10', '2019-09-10 01:32:42', 'piter piterson', 'dddddd', 'ffffffffff');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (11, 'title11', '2019-09-10 01:32:42', 'piter piterson', 'dddddd', 'ffffffffff');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (12, 'title12', '2019-09-10 01:32:42', 'piter piterson', 'dddddd', 'ffffffffff');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (13, 'title13', '2019-09-10 01:32:42', 'piter piterson', 'dddddd', 'ffffffffff');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (14, 'title14', '2019-09-10 01:32:42', 'piter piterson', 'dddddd', 'ffffffffff');
INSERT INTO books.Books (id, title, date, author, description, image) VALUES (15, 'title15', '2019-09-10 01:32:42', 'piter piterson', 'dddddd', 'ffffffffff');
