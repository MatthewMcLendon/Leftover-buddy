require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mealRoutes = require("./routes/mealRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");

const port = process.env.PORT;
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
};

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/calorieCounter")
  .then(() => {
    console.log("Database conected");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/meals", mealRoutes);

app.use("/ingredients", ingredientRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
