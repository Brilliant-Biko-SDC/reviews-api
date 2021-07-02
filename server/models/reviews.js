const mongoose = require("mongoose");
const schemas = require("./../../db/model.js");

// const Product = mongoose.model("Product", schemas.product);
const Review = mongoose.model("Review", schemas.review);

const review = {
  get: async (productid) => {
    try {
      console.log("productid", productid);
      const reviews = await Review.find({ product_id: productid });
      return reviews;
    } catch (error) {
      console.log(error);
    }
  },
  post: async (productid) => {
    try {
      const newReview = new Review();
      const review = await newReview.save();
      return review;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = review;
