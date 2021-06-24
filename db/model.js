const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review_id: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  summary: {
    type: String,
    minLength: 3,
    maxLength: 99,
  },
  recommend: {
    type: Boolean,
  },
  response: {
    type: String,
    minLength: 3,
    maxLength: 999,
  },
  body: {
    type: String,
    minLength: 3,
    maxLength: 999,
  },
  date: {
    // what to do here?
  },
  reviewer_name: {
    type: String,
    maxLength: 60,
  },
  helpfulness: {
    type: Number,
  },
  photos: [
    {
      photo_id: Number,
      url: String,
    },
  ],
  characteristics: [{}],
});

const productSchema = new mongoose.Schema({
  product_id: Number,
  ratings: {
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number,
  },
  recommended: {
    true: Number,
    false: Number,
  },
  // This will not be the same for every product
  characteristics: [{}],
  reviews: [{ type: reviewSchema }],
});
//exports is a property of all module
//writes this code module.exports = {}

module.exports.product = productSchema;
module.exports.review = reviewSchema;
