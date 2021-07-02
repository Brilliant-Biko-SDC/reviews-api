const mongoose = require("mongoose");
const schemas = require("./../../db/model.js");

// const ReviewMeta = mongoose.model("ReviewMeta", schemas.product);
const Review = mongoose.model("Review", schemas.review);

module.exports = {
  get: (product_id, cb) => {},
};

const reviewMeta = {};

module.exports = reviewMeta;
