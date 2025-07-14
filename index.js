const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  PORT,
} = require("./config/config");

const app = express();
const port = PORT;

mongoose
  .connect(
    `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => {
    console.log("successfully connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
