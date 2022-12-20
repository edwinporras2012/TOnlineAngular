START TRANSACTION;
CREATE DATABASE t_online;

CREATE TABLE usuarios (
	id_usuarios INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50),
   	pass VARCHAR(255),
    nombre VARCHAR (100),
    created_at TIMESTAMP DEFAULT CURRENT_TIME
);

DESCRIBE usuarios;

CREATE TABLE productos (
	id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (200),
    precio DOUBLE,
    existencia INT
);

ALTER TABLE productos
    add descripcion VARCHAR(500),
    add categoryId INT,
    add rating VARCHAR(200),
    add img VARCHAR(250),
    add disponibilidad boolean,
    add color VARCHAR(100),
    add review INT;

CREATE TABLE categorias (
	id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (200)
);

ALTER TABLE productos
    ADD CONSTRAINT `fk_id_categoria` FOREIGN KEY (categoryId)
        REFERENCES categorias (id_categoria);
        
COMMIT;