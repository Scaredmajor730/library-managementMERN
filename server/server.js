require("dotenv").config();

const express = require("express");
const bookRoutes = require("./routes/books");
const mongoose = require("mongoose");
const { error } = require("console");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/books", bookRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening to requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & listening on port`, process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
