const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const MovieRoute = require("./Movie.route");

route.use("/user", userRoute);
route.use("/Movieaurant", MovieRoute);

module.exports = route;
