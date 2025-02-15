const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://omar:OmarAh123@cluster0.76cbz.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0 "
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
