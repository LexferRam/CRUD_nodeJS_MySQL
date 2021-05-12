CREATE DATABASE crudnodejsmysql;

USE crudnodejsmysql;

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
     address VARCHAR(100) NULL NULL,
     phone VARCHAR(15)
);

SHOW TABLES;

DESCRIBE customer;