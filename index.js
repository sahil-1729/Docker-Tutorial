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
const postRouter = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const port = PORT;
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("successfully connected!");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use("/api/posts", postRouter);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
