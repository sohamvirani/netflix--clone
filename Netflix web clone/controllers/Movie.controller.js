const { MovieService } = require("../services");

// ADD Moviearunt

const addMovie = async (req, res) => {
  try {
    const body = req.body;

    console.log(body);

    const Movie = await MovieService.addMovie(body);
    if (!Movie) {
      throw new Error("something went wrong");
    }
    /* for Ejs output */
    res.render("./data", { Movie: Movie });

    /* for json output */
    
    // res.status(200).json({
    //   message: "Movieaurant add success",
    //   data: Movie,
    // });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// GET Moviearunt

const getMovie = async (req, res) => {
  const Movie = await MovieService.getMovie();

  // console.log(Movie, "get");

    /* for Ejs output */

  res.render("./allMovie", { message: Movie });

    /* for json output */

  // res.status(200).json({
  //   message: "Movieaurant get success",
  //   data: Movie,
  // });
};

// UPDATE Moviearunt

const updateMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);

    if (!Movie) {
      throw new Error("something went wrong");
    }
    const Movie = await MovieService.updateMovie(id, body);

    res.status(200).json({
      message: "Movieaurnt Updated success",
      data: Movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE Moviearunt

const deleteMovie = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const Movie = await MovieService.deleteMovie(id);
    if (!Movie) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "Movie delete success",
      data: Movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = {
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
