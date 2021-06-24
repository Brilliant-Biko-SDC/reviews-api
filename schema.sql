DROP DATABASE IF EXISTS ratingAndReviews;

CREATE DATABASE ratingAndReviews;

DROP TABLE IF EXISTS Product;

DROP TABLE IF EXISTS Reviews;

DROP TABLE IF EXISTS Helpfulness;

DROP TABLE IF EXISTS Photos;

DROP TABLE IF EXISTS Characteristics_Product;

DROP TABLE IF EXISTS Characteristics_Review;

CREATE TABLE Product (
  product_id INT PRIMARY KEY
);

CREATE TABLE Reviews (
  review_id INT PRIMARY KEY,
  rating INT,
  recommend BOOLEAN,
  body VARCHAR(999),
  response VARCHAR(999),
  reported BOOLEAN,
  reviewer_name VARCHAR (30),
  email VARCHAR(30),
  helpfulness,
  photos,
);

-- What to do for helpfulness and photos?

CREATE TABLE Helpfulness (

);

CREATE TABLE Photos (

);

CREATE TABLE Characteristics_Product (

);

CREATE TABLE Characteristics_Review (

);
