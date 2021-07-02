const controller = require("./controllers");
const { Router } = require("express");

const router = Router();

// // Connect controller methods to their corresponding routes
router.get("/:productid", controller.reviews.get);
// localhost:3158/api/reviews/21678

// router.post('/:productid', controller.reviews.post);

// router.get('/meta/:productid', controller.meta.get);

module.exports = router;
