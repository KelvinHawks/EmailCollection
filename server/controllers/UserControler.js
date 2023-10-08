//const HttpError = require("../models/http-error");
//const { validationResult } = require("express-validator");
const { User } = require("../models/user");

const addUsers = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User arleady exist!" });
    } else {
      const newUser = await new User({
        username,
        email,
      });
      await newUser.save();
      res.status(200).json({
        message: "You have subscribed successfully",
      });
    }
  } catch (error) {
    console.log(`Error is ${error}`);
  }
};
// const getuser = (req, res, next) => {
//   const userId = req.params.uid;
//   const user = DUMMY_USERS.find((user) => {
//     return user.id === userId;
//   });
//   if (!user) {
//     throw new HttpError("Could not find user with that Id", 404);
//   } else {
//     res.json({ user });
//   }
// };

// const deleteUser = (req, res, next) => {
//   const userId = req.params.uid;
//   DUMMY_USERS = DUMMY_USERS.filter((user) => user.id !== userId);
//   res.json({ Message: "User successfully deleted" });
// };

exports.addUsers = addUsers;
// exports.getuser = getuser;
// exports.deleteUser = deleteUser;
