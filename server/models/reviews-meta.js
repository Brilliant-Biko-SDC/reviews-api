const mongoose = require("mongoose");
const schemas = require("./../../db/model.js");

const ReviewMeta = mongoose.model("ReviewMeta", schemas.reviewMeta);
const Review = mongoose.model("Review", schemas.review);

const reviewMeta = {
  get: () => {
    console.log("meta model");
  },
};

module.exports = reviewMeta;
