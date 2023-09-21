BEGIN TRANSACTION;

DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
	user_id SERIAL,
	password_hash VARCHAR(200) NOT NULL,
	role VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE stock_portfolio (
    stock_id SERIAL,
    stock
);
COMMIT TRANSACTION;
