/* eslint-disable */
const mongoose = require("mongoose");
require("mongoose-type-email");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[A-Za-z .0-9]{3,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Name!`,
    },
    required: true,
  },
  email: { type: mongoose.SchemaTypes.Email, unique: true, required: true },
  password: {
    type: String,
    minlength: 8,
    maxlength: 1000,
    required: true,
  },
  phoneNumber: {
    type: Number,
    minlength: 4,
    maxlength: 25,
    required: true,
  },
});
const user = new mongoose.model("users", userSchema);
module.exports.user = user;
