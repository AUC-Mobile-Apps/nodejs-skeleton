FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
Create database my_database;

Create table Country(
    name varchar(30),
    code char(2),
    Primary Key(code)
);

Insert into Country values
    ('Egypt', 'EG'),
    ('United States', 'US');