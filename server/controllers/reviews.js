const model = require("./../models");

const review = {
  get: async (req, res) => {
    const reviews = await model.reviews.get(parseInt(req.params.productid));
    res.send(reviews);
  },
  post: async (req, res) => {
    const newReview = await model.reviews.post(req);
    res.send(newReview);
  },
};

module.exports = review;
