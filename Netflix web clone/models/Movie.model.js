const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  MovieName: {
    type: String,
    require: true,
  },
  Type: {
    type: String,
    require: true
  },
  AgeLimit: {
    type: String,
    require: true,
  },
  charges: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Movie = mongoose.model("MovieSchema", MovieSchema);
module.exports = Movie;
