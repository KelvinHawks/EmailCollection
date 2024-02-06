const express = require("express");
const usersRoutes = require("./routes/users-Routes");
const orderRoutes = require("./routes/users-order");
const HttpError = require("./models/http-error");

const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./connectDB");
app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/api/users", usersRoutes);
app.use("/api", orderRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});
connection();
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Unknown error occured" });
});

app.listen(5001, () => {
  console.log("App listening on port 5001");
});
