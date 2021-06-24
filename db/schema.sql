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
  product_id INT FOREIGN KEY,
  rating INT,
  recommend BOOLEAN,
  body VARCHAR(999),
  response VARCHAR(999),
  reported BOOLEAN,
  reviewer_name VARCHAR (30),
  email VARCHAR(30),
  helpfulness INT
);

-- Check foreign key syntax
-- How to link things

CREATE TABLE Photos (
  photo_id INT PRIMARY KEY AUTO_INCREMENT,
  review_id INT FOREIGN KEY,
  url TEXT
);

CREATE TABLE Characteristics_Product (
  review_id INT PRIMARY KEY,
  fit INT,
  length INT,
  comfort INT,
  quality INT
);

-- Use this table to keep track of what chars a product has
-- Think more about this table

CREATE TABLE Characteristics_Review (
  review_id INT PRIMARY KEY,
  fit INT,
  length INT,
  comfort INT,
  quality INT
);

-- Join table: two foreign keys
-- Think more about this table
