CREATE DATABASE IF NOT EXISTS compañiadb;

USE compañiadb;

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
    (1, 'Santiago', 2500),
    (2, 'Marco', 2500),
    (3, 'Juan', 2500),
    (4, 'Jenny', 2500),
    (5, 'Maria', 2500),
    (6, 'Juana', 2500);