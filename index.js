require("dotenv").config();

const express = require("express");
const cors = require("cors");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(formidable());
//Utilisation du middleware morgan
app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI);

//import des routes
const userRoutes = require("./routes/users");
app.use(userRoutes);
const characterRoutes = require("./routes/characters");
app.use(characterRoutes);
const comicRoutes = require("./routes/comics");
app.use(comicRoutes);

app.get("/", (req, res) => {
  return res.json(
    "« No mistakes. No do-overs. Look out for each other. This is the fight of our lives.» ~ Steve Rogers, Avengers: Endgame"
  );
});

app.all("*", (req, res) => {
  return res.json(
    "« Part of the journey is the end.» ~ Tony Stark, Avengers: Endgame"
  );
});

app.listen(process.env.PORT || 4000, () => {
  console.log("« We are Groot.»");
});
