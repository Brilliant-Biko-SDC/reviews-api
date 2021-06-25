DROP DATABASE IF EXISTS ratingAndReviews;

CREATE DATABASE ratingAndReviews;

DROP TABLE IF EXISTS Product;

DROP TABLE IF EXISTS Reviews;

DROP TABLE IF EXISTS Helpfulness;

DROP TABLE IF EXISTS Photos;

DROP TABLE IF EXISTS Characteristics_Product;

CREATE TABLE Product (
  product_id INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE Reviews (
  review_id INT PRIMARY KEY AUTO_INCREMENT,
  rating INT,
  recommend BOOLEAN,
  body VARCHAR(999),
  response VARCHAR(999),
  reported BOOLEAN,
  reviewer_name VARCHAR (30),
  email VARCHAR(30),
  helpfulness INT,
  FOREIGN KEY (product_id),
  REFERENCES Product (product_id)
);

CREATE TABLE Photos (
  photo_id INT PRIMARY KEY AUTO_INCREMENT,
  url TEXT
  FOREIGN KEY (review_id),
  REFERENCES Reviews (review_id)
);

CREATE TABLE Characteristics_Product (
  review_id INT PRIMARY KEY,
  -- fit INT,
  -- length INT,
  -- comfort INT,
  -- quality INT
);

-- Use this table to keep track of what chars a product has
-- Think more about this table

CREATE TABLE Characteristics_Review (
  review_id INT PRIMARY KEY,
  -- fit INT,
  -- length INT,
  -- comfort INT,
  -- quality INT
);

-- Join table: two foreign keys
-- Think more about this table
