const model = require("./../models");

const reviewMeta = {
  get: async (req, res) => {
    const reviews = await model.reviewsMeta.get(parseInt(req.params.productid));
    res.send(reviews);
  },
};

module.exports = reviewMeta;
