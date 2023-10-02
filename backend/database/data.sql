BEGIN TRANSACTION;

INSERT INTO users (email,password_hash,role,first_name,last_name) VALUES ('user@gmail.com','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER','userFirstName','userLastName');
INSERT INTO users (email,password_hash,role,first_name,last_name) VALUES ('admin@gmail.com','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN','adminFirstName','adminLastName');
INSERT INTO users (email,password_hash,role,first_name,last_name) VALUES('carlinchoi@gmail.com','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER','Carlin','Choi');

INSERT INTO stock_portfolio (user_id,stock_name,dollars_invested,number_of_shares,stock_price) VALUES(1,'Microsoft',10000,8.3,183.30);
INSERT INTO stock_portfolio (user_id,stock_name,dollars_invested,number_of_shares,stock_price) VALUES(1,'Apple',12000,6.3,302.24);
INSERT INTO stock_portfolio (user_id,stock_name,dollars_invested,number_of_shares,stock_price) VALUES(1,'Google',20000,10,110.22);
INSERT INTO stock_portfolio (user_id,stock_name,dollars_invested,number_of_shares,stock_price) VALUES(1,'Amazon',16000,7.2,993.38);
INSERT INTO stock_portfolio (user_id,stock_name,dollars_invested,number_of_shares,stock_price) VALUES(1,'Facebook',11000,5.8,538.22);

COMMIT TRANSACTION;
