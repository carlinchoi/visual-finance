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
    portfolio_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL, -- This links the portfolio to a specific user
    stock_name VARCHAR(255) NOT NULL,
    dollars_invested DECIMAL(10, 2) NOT NULL,
    number_of_shares INT NOT NULL,
    stock_price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT FK_user_portfolio FOREIGN KEY (user_id) REFERENCES users(user_id)
);

COMMIT TRANSACTION;
