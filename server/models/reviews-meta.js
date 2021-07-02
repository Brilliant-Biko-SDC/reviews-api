const mongoose = require("mongoose");
const schemas = require("./../../db/model.js");

const ReviewMeta = mongoose.model("ReviewMeta", schemas.reviewMeta);
const Review = mongoose.model("Review", schemas.review);

const reviewMeta = {
  get: () => {
    console.log("meta model");
  },
  // get ratings
  // get characteristics
  // get recommendations
  get: async (productid) => {
    try {
      console.log("productid", productid);
      // const reviews = await Review.find({ product_id: productid });
      // return reviews;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = reviewMeta;
