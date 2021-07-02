const model = require("./../models");

const reviewMeta = {
  get: async (req, res) => {
    const reviewMeta = await model.reviewsMeta.get(
      parseInt(req.params.productid)
    );
    res.send(reviewMeta);
  },
};

module.exports = reviewMeta;
