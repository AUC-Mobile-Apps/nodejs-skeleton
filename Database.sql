FLUSH PRIVILEGES;
ALTER USER "root"@"localhost" IDENTIFIED BY "password";
Create database my_database;

Create table Country(
    id int AUTO_INCREMENT,
    name varchar(30) not null,
    code char(2) not null unique,
    Primary Key(id)
);

Insert into Country values
    ("Egypt", "EG"),
    ("United States", "US")
    ;
    