/* eslint-disable */
const express = require("express");
const port = 3501;
const app = express();
const connection = require("./connection/index")
app.listen(port, (err) => {
  if (err) {
    console.log("Error in listening at " + port);
    console.log(err);
    return;
  }
  console.log("Server Started Successfully..!");
  connection.connectWithDB();
});
