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
      console.info(`User Saved Successfully ${savedUser}`);
    } catch (error) {
      console.error("Error in Save User", error);
    }
  }

  async loginUser(userDetails) {
    return await userModel.user.findOne({ email: userDetails.email }).exec();
  }

  async deleteUser(id) {
    return await userModel.user.findOneAndDelete({ _id: id });
  }

  async updateUser(id, user) {
    return await userModel.user.updateOne({ _id: id }, user);
  }

  async singleUser(userStr) {
    try {
      const user = await userModel.user.findOne({
        $or: [
          { name: userStr },
          { email: userStr },
          { phoneNumber: parseInt(userStr) },
        ],
      });
    //   const user = await userModel.user.findOne({ name: userStr });
      connection.closeConnection();
      console.info(`User Found Successfully ${user}`);
    } catch (error) {
      console.error("Error in find User", error);
    }
  }
};
