CREATE TABLE rol (
    id_role INT AUTO_INCREMENT,
    name VARCHAR(20) unique NOT NULL,
    PRIMARY KEY (id_role)
);

CREATE TABLE user (
    id_user INT AUTO_INCREMENT,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL, 
    PRIMARY KEY (id_user),
    FOREIGN KEY (role_id) REFERENCES rol(id_role)
);

CREATE TABLE product (
    id_product INT AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    created_by INT NOT NULL,
    PRIMARY KEY (id_product),
    FOREIGN KEY (created_by) REFERENCES user(id_user)
);

CREATE TABLE product_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    log_message VARCHAR(20) NOT NULL,
    log_time DATETIME NOT NULL
);

CREATE TRIGGER product_inserted_at 
AFTER INSERT ON product
FOR EACH ROW
INSERT INTO product_logs (id_product, log_message, log_time)
VALUES (NEW.id_product, 'New product added', NOW());