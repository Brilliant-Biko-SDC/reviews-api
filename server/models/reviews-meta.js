const mongoose = require("mongoose");
const schemas = require("./../../db/model.js");

const ReviewMeta = mongoose.model("ReviewMeta", schemas.reviewMeta);
const Review = mongoose.model("Review", schemas.review);

const reviewMeta = {
  // get: () => {
  //   console.log("meta model");
  // },
  // get ratings
  // get characteristics
  // get recommendations
  get: async (productid) => {
    try {
      // console.log("productid", productid);
      const reviews = await Review.find({ product_id: productid });
      const meta = {};
      const ratings = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
      const recommended = {
        true: 0,
        false: 0,
      };
      let rating;
      for (let i = 0; i < reviews.length; i++) {
        rating = reviews[i].rating.toString();
        ratings[rating]++;
        if (reviews[i].recommend === true) {
          recommended.true++;
        } else if (reviews[i].recommend === false) {
          recommended.false++;
        }
      }
      meta.ratings = ratings;
      recommended.true = recommended.true.toString();
      recommended.false = recommended.false.toString();
      meta.recommended = recommended;
      return meta;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = reviewMeta;

// {
//   "product_id": "2",
//   "ratings": {
//     2: 1,
//     3: 1,
//     4: 2,
//     // ...
//   },
//   "recommended": {
//     0: 5
//     // ...
//   },
//   "characteristics": {
//     "Size": {
//       "id": 14,
//       "value": "4.0000"
//     },
//     "Width": {
//       "id": 15,
//       "value": "3.5000"
//     },
//     "Comfort": {
//       "id": 16,
//       "value": "4.0000"
//     },
//     // ...
// }
