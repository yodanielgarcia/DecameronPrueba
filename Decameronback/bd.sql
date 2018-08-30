
CREATE DATABASE "DecameronDB"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Spanish_Colombia.1252'
       LC_CTYPE = 'Spanish_Colombia.1252'
       CONNECTION LIMIT = -1;

CREATE TABLE usuarios (
  id int  NOT NULL,
  nombre varchar(255) NOT NULL,
  identificacion int NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  remember_token varchar(100) NOT NULL,
  f_creacion timestamp ,
  f_actualizacion timestamp,
  deleted_at timestamp,
  tipo_u int NOT NULL,
  activo_inactivo int NOT NULL
) 

CREATE TABLE Hoteles (
  id int  NOT NULL,
  nombre varchar(255) NOT NULL,
  nit int NOT NULL,
  direccion varchar(255) NOT NULL,
  ciudad varchar(255) NOT NULL,
  no_habitaciones int NOT NULL,
  f_creacion timestamp 
) 

INSERT INTO usuarios (id, nombre, identificacion, email, password, remember_token, f_creacion, f_actualizacion, deleted_at, tipo_u, activo_inactivo) VALUES
(1, 'Daniel', 1515, 'admin@admin.com', '123456', 'hhhhhh', '2018-08-29 16:37:11', '2018-08-29 16:37:11', '2018-08-29 16:37:11', 1, 1);

insert into Hoteles (id,nombre,nit,direccion,ciudad,no_habitaciones,f_creacion) values 
  (1,'Hotel vista linda',123141,'carrera 9 #14-44','cali',22,'2018-08-29 16:37:11');
