const express = require("express");
const validate = require("../middlewares/validate");
const { MovieController } = require("../controllers");
const MovieValidation  = require("../validation/Movie.validation")
const route = express.Router();

route.get("/get", MovieController.getMovie);
route.post("/add", validate(MovieValidation.addMovie), MovieController.addMovie);
route.put(
  "/update/:id",
  validate(MovieValidation.addMovie),
  MovieController.updateMovie
);
route.delete(
  "/delete/:id",
  MovieController.deleteMovie
);

module.exports = route;
