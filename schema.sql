DROP DATABASE IF EXISTS ratingAndReviews;

CREATE DATABASE ratingAndReviews;

DROP TABLE IF EXISTS Product;

DROP TABLE IF EXISTS Reviews;

DROP TABLE IF EXISTS Helpfulness;

DROP TABLE IF EXISTS Photos;

DROP TABLE IF EXISTS Characteristics_Product;

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

-- How to link things

CREATE TABLE Helpfulness (
  review_id INT PRIMARY KEY,
  positive INT,
  negative INT
);

CREATE TABLE Photos (
  review_id INT PRIMARY KEY,
  url TEXT,
);

CREATE TABLE Characteristics_Product (
  review_id INT PRIMARY KEY,
  fit TEXT,
  length TEXT,
  comfort TEXT,
  quality TEXT,
);
