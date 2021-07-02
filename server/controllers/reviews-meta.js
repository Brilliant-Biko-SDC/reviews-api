const model = require("./../models");

const reviewMeta = {
  get: (req, res) => {
    console.log("meta-controller req", req);
  },
};

module.exports = reviewMeta;
