/* eslint-disable */

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
module.exports.connectWithDB = () => {
  mongoose.connect("mongodb+srv://israr0119:0349A24799@cluster0.haoob.mongodb.net/crudApp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.once("error", (err) => {
    console.log("Error in connecting to DB");
    console.log(err);
  });

  db.once("open", () => {
    console.log("Connected to DB successfully..!");
  });
};

module.exports.closeConnection = () => {
    mongoose.connection.close()
}