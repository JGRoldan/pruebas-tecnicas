CREATE TABLE agricultor (
    id TINYINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL, -- Hashed password
    refresh_token VARCHAR(255), -- Refresh token for JWT
);

CREATE TABLE cultivo (
    id TINYINT PRIMARY KEY AUTO_INCREMENT,
    agricultor_id TINYINT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    fecha_siembre DATE NOT NULL,
    ubicacion_id TINYINT NOT NULL,
    rendimiento_esperado FLOAT NOT NULL,
    FOREIGN KEY (agricultor_id) REFERENCES agricultor(id) ON DELETE CASCADE, -- If agricultor is deleted, delete all his crops
    FOREIGN KEY (ubicacion_id) REFERENCES ubicacion(id) ON DELETE CASCADE -- If location is deleted, delete all crops in that location
);

CREATE TABLE condiciones_climaticas (
    id TINYINT PRIMARY KEY AUTO_INCREMENT,
    cultivo_id TINYINT NOT NULL,
    temperatura FLOAT NOT NULL,
    humedad FLOAT NOT NULL,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (cultivo_id) REFERENCES cultivo(id) ON DELETE CASCADE -- If crop is deleted, delete all its weather conditions
);

CREATE TABLE ubicacion (
    id TINYINT PRIMARY KEY AUTO_INCREMENT,
    latitud FLOAT NOT NULL,
    longitud FLOAT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
);

--INSERT data into the tables
INSERT INTO agricultor (username, password) 
VALUES ('agricultor1', 'agricultor1'), 
       ('agricultor2', 'agricultor2');

INSERT INTO cultivo (agricultor_id, nombre, fecha_siembre, ubicacion_id, rendimiento_esperado)
VALUES (1, 'cultivo1', '2021-01-01', 1, 100.5),
       (1, 'cultivo2', '2021-01-01', 2, 200.5),
       (2, 'cultivo3', '2021-01-01', 3, 300.5);

INSERT INTO condiciones_climaticas (cultivo_id, temperatura, humedad, fecha)
VALUES (1, 10.5, 10.5, '2021-01-01 10:00:00'),
       (1, 20.5, 20.5, '2021-01-01 11:00:00'),
       (1, 30.5, 30.5, '2021-01-01 12:00:00'),
       (2, 30.5, 40.5, '2021-01-01 15:00:00'),
       (2, 15.5, 50.5, '2021-01-01 16:00:00'),
       (2, 50.5, 60.5, '2021-01-01 17:00:00');

INSERT INTO ubicacion (latitud, longitud, nombre)
VALUES (10.5, 20.5, 'ubicacion1'),
       (10.5, 20.5, 'ubicacion2'),
       (10.5, 20.5, 'ubicacion3');
