const mongoose = require("mongoose");
// const schemas = require("./../../database/model.js");

// const Product = mongoose.model("Product", schemas.product);
// const Review = mongoose.model("Review", schemas.review);
// const Photos = mongoose.model("Photos", schemas.photos);

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/reviews", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
    // for (let i = 1; i <= 5774952; i++) {
    //   const photos = await Photos.find({ review_id: i });
    //   await Review.updateOne({ id: i }, { photos: photos });
    //   console.log(`review_id ${i} updated`);
    // }
  } catch (error) {
    console.log(error);
  }
};

connectToMongo();

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
