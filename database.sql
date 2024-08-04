SELECT * FROM category;

/*INSERT INTO products (
    title,
    description,
    price,
    category_name
) VALUES (
    'iphone 8',
    'iPhone 8 Plus 
64G
🔋 100%',
    8600,
    'iphone'
), (
    'iphone 13',
    'iPhone 13 
128G
🔋 100%',
    30000,
    'iphone'
); */

/*CREATE TABLE category (
    id SERIAL,
    name VARCHAR(255) PRIMARY KEY
); */

/*CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(155),
    thumbnail VARCHAR(255),
    description VARCHAR(255),
    price INT,
    category_name VARCHAR(255),
    FOREIGN KEY (category_name) REFERENCES category (name)
); */
