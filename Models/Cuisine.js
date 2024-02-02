import mongoose from "mongoose";

const CuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  text: {
    type: String,
    require: true,
  },

  image: {
    data: Buffer,
    contentType: String,
  },

  type: {
    type: String,
    enum: ["breakfast", "launch", "dinner"],
    require: true,
  },
});

const Cuisine = mongoose.model("Cuisne", CuisineSchema);

export default Cuisine;
