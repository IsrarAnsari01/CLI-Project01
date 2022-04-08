const userModel = require("../models/userModel");
const connection = require("../../connection/index");
module.exports = class userRepo {
  constructor() {
    connection.connectWithDB();
  }

  async saveUser(userDetails) {
    try {
      const newUser = new userModel.user(userDetails);
      const savedUser = await newUser.save();
      connection.closeConnection();
      if (savedUser) {
        console.info(`User Saved Successfully ${savedUser}`);
        return;
      }
      console.error("Unable to save User", savedUser);
    } catch (error) {
      console.error("Error in Save User", error);
    }
  }

  async loginUser(userDetails) {
    return await userModel.user.findOne({ email: userDetails.email }).exec();
  }

  async deleteUser(id) {
    const deletedUser = await userModel.user.findOneAndDelete({ _id: id });
    if (deletedUser) {
      console.info("Users Information Successfully Deleted");
      connection.closeConnection();
      return;
    }
    console.error("Unable to delete user information");
    connection.closeConnection();
  }

  async updateUser(id, updatedInfo) {
    const updatedUser = await userModel.user.updateOne(
      { _id: id },
      updatedInfo
    );
    if (updatedUser) {
      console.info("Users Information Successfully Updated");
      connection.closeConnection();
      return;
    }
    console.error("Something went wrong in updating information", updatedUser);
    connection.closeConnection();
  }

  async findAll() {
    const allUser = await userModel.user.find();
    if (allUser.length) {
      console.info("Users Found Successfully", allUser);
      connection.closeConnection();
      return;
    }
    console.error("Something went wrong", allUser);
    connection.closeConnection();
  }

  async singleUser(userStr) {
    try {
      const user = await userModel.user.find({ name: userStr });

      if (user.length >= 1) {
        console.info(`User Found Successfully ${user}`);
        connection.closeConnection();
        return;
      }
      console.error("Unable to find User");
      connection.closeConnection();
    } catch (error) {
      console.error("Error in find User", error);
    }
  }
};
