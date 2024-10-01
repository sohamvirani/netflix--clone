const { MovieSchema } = require("../models");

const addMovie = (body) => {
  return MovieSchema.create(body);
};

const getMovie = () => {
  return MovieSchema.find();
};

const deleteMovie = (id) => {
  return MovieSchema.findByIdAndDelete(id);
};

const updateMovie = (id, body) => {
  return MovieSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addMovie,
  getMovie,
  deleteMovie,
  updateMovie,
};
