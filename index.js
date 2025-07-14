const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;
mongoose
  .connect("mongodb://abcefgh:ijklmno@172.21.0.2:27017/authSource=admin")
  .then(() => {
    console.log("successfully connected");
  });

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
