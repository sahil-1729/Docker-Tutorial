module.exports = {
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_IP: process.env.MONGO_IP || "mongo",
  PORT: process.env.PORT || 8080,
};
