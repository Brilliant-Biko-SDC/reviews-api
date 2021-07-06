const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  product_id: {
    type: Number,
    index: true,
  },
  rating: {
    type: Number,
  },
  date: {
    type: Date,
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
  reviewer_name: {
    type: String,
    maxLength: 60,
  },
  //don't have reviewer email
  reported: {
    type: Boolean,
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

const photosSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  review_id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

const characteristicTypeSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  product_id: {
    type: Number,
    index: true,
  },
  name: {
    type: String,
  },
});

const characteristicValueSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  characteristic_id: {
    type: Number,
    index: true,
  },
  value: {
    type: Number,
  },
});

// const reviewMetaSchema = new mongoose.Schema({
//   product_id: Number,
//   ratings: {
//     1: Number,
//     2: Number,
//     3: Number,
//     4: Number,
//     5: Number,
//   },
//   recommended: {
//     true: Number,
//     false: Number,
//   },
//   // characteristics will not be the same for every product
//   characteristics: [{}],
//   //
//   reviews: [{ type: reviewSchema }],
// });

//exports is a property of all module
//writes this code module.exports = {}
// module.exports.reviewMeta = reviewMetaSchema;
module.exports.review = reviewSchema;
module.exports.photos = photosSchema;
module.exports.characteristicTypes = characteristicTypeSchema;
module.exports.characteristicValues = characteristicValueSchema;
