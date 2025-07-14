const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const redis = require("redis");
const { RedisStore } = require("connect-redis");

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  PORT,
  REDIS_URL,
  SESSION_SECRET,
  REDIS_PORT,
} = require("./config/config");

let redisClient = redis.createClient({
  url: `redis://${REDIS_URL}:${REDIS_PORT}`,
});
redisClient.connect().catch(console.error);

const app = express();
const postRouter = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const port = PORT;
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("mongo db successfully connected!");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      resave: false,
      saveUninitialized: false,
      httpOnly: true,
      maxAge: 30000,
    },
  })
);

app.use(express.json());
app.use("/api/posts", postRouter);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
