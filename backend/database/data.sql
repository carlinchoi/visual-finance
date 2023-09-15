BEGIN TRANSACTION;

INSERT INTO users (email,password_hash,role,first_name,last_name) VALUES ('user@gmail.com','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER','userFirstName','userLastName');
INSERT INTO users (email,password_hash,role,first_name,last_name) VALUES ('admin@gmail.com','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN','adminFirstName','adminLastName');
INSERT INTO users (email,password_hash,role,first_name,last_name) VALUES('carlinchoi@gmail.com','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER','Carlin','Choi');

COMMIT TRANSACTION;
