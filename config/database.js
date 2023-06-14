const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connection Successful");
    })
    .catch((error) => {
      console.log("Database Connection Failed", "\n", error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
