const model = require("./../models");

const review = {
  get: async (req, res) => {
    const reviews = await model.reviews.get(parseInt(req.params.productid));
    res.send(reviews);
  },
};

module.exports = review;
