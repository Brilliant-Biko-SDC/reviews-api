const mongoose = require("mongoose");
const schemas = require("./../../db/model.js");

// const ReviewMeta = mongoose.model("ReviewMeta", schemas.reviewMeta);
const Review = mongoose.model("Review", schemas.review);
const CharacteristicTypes = mongoose.model(
  "Characteristic-type",
  schemas.characteristicTypes
);
const CharacteristicValues = mongoose.model(
  "Characteristic-value",
  schemas.characteristicValues
);

// const getCharacteristicValues = async (characteristicTypes) => {
//   await CharacteristicValues.find({
//     product_id: productid,
//   });
// };

const reviewMeta = {
  get: async (productid) => {
    try {
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
      ratings["1"] = ratings["1"].toString();
      ratings["2"] = ratings["2"].toString();
      ratings["3"] = ratings["3"].toString();
      ratings["4"] = ratings["4"].toString();
      ratings["5"] = ratings["5"].toString();
      recommended.true = recommended.true.toString();
      recommended.false = recommended.false.toString();

      // Create object to store characteristic meta
      const characteristics = {};

      // Get characteristic types
      const getCharacteristicTypes = async (productid) => {
        // // Create array to store given product's characteristic types
        // let characteristicTypesArray = [];

        // Update array with characteristic types

        const characteristicTypesArray = await CharacteristicTypes.find({
          product_id: productid,
        });
        // Iterate through characteristic type array to populate characteristics object
        for (let i = 0; i < characteristicTypesArray.length; i++) {
          console.log("test", characteristicTypesArray[i]);
          characteristics[characteristicTypesArray[i].name] = {
            id: characteristicTypesArray[i].id,
            value: 0,
          };
        }
        return characteristicTypesArray;
      };

      const populateCharacteristicsObject = await getCharacteristicTypes(
        productid
      );

      // Add productid, ratings, recommended, and characteristics to meta object
      meta.product_id = productid.toString();
      meta.ratings = ratings;
      meta.recommended = recommended;
      meta.characteristics = characteristics;
      return meta;
    } catch (error) {
      console.log(error);
    }
  },
};

// Query the characteristic-types collection by product_id

// For each characteristic type, query the characteristic-values
// collection by characteristic id

// Find the averages

module.exports = reviewMeta;
