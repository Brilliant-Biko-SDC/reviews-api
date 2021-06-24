const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  product_id: Number,
  ratings: {
    ratings: {
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number
    },
    recommended: {
      true: Number,
      false: Number
    },
    characteristics: {
      Size: {
        value: String
      },
      Width: {
        value: String
      },
      Comfort: {
        value: String
      }
    }
  }
  reviews: [
    review_id: {
      type: Number
    },
    rating: {
      type: Number
    },
    summary: {
      type: String,
      maxLength: 99
    }
    recommend: {
      type: Boolean
    },
    response: {
      type: String,
      maxLength: 999
    },
    body: {
      type: String,
      maxLength: 999
    },
    date: {
      // what to do here?
    },
    reviewer_name: {
      type: String,
      maxLength: 60
    },
    helpfulness: {
      type: Number
    },
    photos: [
      {
        photo_id: Number,
        url: String
      }
    ],
    characteristics: {
      Size: {
        id: Number,
        value: Number
      },
      Width: {
        id: Number,
        value: Number
      },
      Comfort: {
        id: Number,
        value: Number
      },
      Quality: {
        id: Number,
        value: Number
      },
      Length: {
        id: Number,
        value: Number
      },
      Fit: {
        id: Number,
        value: Number
      }
    },
  ]
});
