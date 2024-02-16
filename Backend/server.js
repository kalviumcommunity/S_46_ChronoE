const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const theoryRoutes = require("./routes")
const theorySchema = require("./model/theoryModel");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/theories', theoryRoutes)


mongoose
  .connect(process.env.mongoUri)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & Api is running on port`, process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
