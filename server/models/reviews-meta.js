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
      let amountOfRatings = 0;
      amountOfRatings +=
        ratings["1"] +
        ratings["2"] +
        ratings["3"] +
        ratings["4"] +
        ratings["5"];
      let sum =
        ratings["1"] +
        ratings["2"] * 2 +
        ratings["3"] * 3 +
        ratings["4"] * 4 +
        ratings["5"] * 5;
      let avg = (sum / amountOfRatings).toFixed(1);

      ratings["1"] = ratings["1"].toString();
      ratings["2"] = ratings["2"].toString();
      ratings["3"] = ratings["3"].toString();
      ratings["4"] = ratings["4"].toString();
      ratings["5"] = ratings["5"].toString();
      // recommended.true = recommended.true.toString();
      // recommended.false = recommended.false.toString();

      // Create object to store characteristic meta
      const characteristics = {};

      const characteristicIDsArray = [];

      // Get characteristic types
      // Query the characteristic-types collection by product_id
      const getCharacteristicTypes = async (productid) => {
        // // Create array to store given product's characteristic types
        // let characteristicTypesArray = [];

        // Update array with characteristic types

        const characteristicTypesArray = await CharacteristicTypes.find({
          product_id: productid,
        });
        // Iterate through characteristic type array to populate characteristics object
        for (let i = 0; i < characteristicTypesArray.length; i++) {
          characteristics[characteristicTypesArray[i].name] = {
            id: characteristicTypesArray[i].id,
            value: 0,
          };
          // Get an array of all characteristic ids
          characteristicIDsArray.push(characteristicTypesArray[i]);
        }
        return characteristicTypesArray;
      };

      const populateCharacteristicsObject = await getCharacteristicTypes(
        productid
      );

      let characteristicValueSum = 0;

      const getCharacteristicValues = async (characteristicID) => {
        const characteristicValuesArray = await CharacteristicValues.find({
          characteristic_id: characteristicID,
        });
        return characteristicValuesArray;
      };
      // For each characteristic type, query the characteristic-values
      // collection by characteristic id
      for (let i = 0; i < characteristicIDsArray.length; i++) {
        const findValues = await getCharacteristicValues(
          characteristicIDsArray[i].id
        );

        characteristicValueSum = 0;
        let name;
        for (let j = 0; j < findValues.length; j++) {
          characteristicValueSum += findValues[j].value;
        }
        let average = characteristicValueSum / findValues.length;
        name = characteristicIDsArray[i].name;
        characteristics[name].value = average.toString();
      }

      // Add productid, ratings, recommended, and characteristics to meta object
      // avg: 3.6,
      // totalReviews: 20,
      // recommended: "87%",
      meta.avg = avg;
      meta.totalReviews = reviews.length;
      meta.product_id = productid.toString();
      meta.ratings = ratings;
      meta.recommendedTotals = recommended;
      meta.recommended =
        Math.round(
          (recommended["true"] / (recommended["true"] + recommended["false"])) *
            100
        ).toString() + "%";
      meta.characteristics = characteristics;
      return meta;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = reviewMeta;
