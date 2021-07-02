const mongoose = require("mongoose");
const schemas = require("./../../database/model.js");

const Product = mongoose.model("Product", schemas.product);
const Review = mongoose.model("Review", schemas.review);
// const Product = mongoose.model("productSchema", "./../db/model.js");
//first input to mongoose.connect is a uri with the last part of the uri being the database
// mongoose.connect(
//   "mongodb://localhost:27017/reviews",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (error) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log("connected");

//   }
// );

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/reviews', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected");
  } catch (error) {
      console.log(error)
  }
}

connectToMongo()
