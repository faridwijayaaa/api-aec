const express = require("express");
const {
  login,
  register,
  userUpdateById,
  getAllUser,
  deleteUserById,
  getUserById,
  changePasswordById,
} = require("../controllers/User.controllers");
const {
  authentication,
  authenticationAdmin,
} = require("../middleware/authentication");
const { authorizationUser } = require("../middleware/authorization");
const route = express.Router();

route.get("/", authenticationAdmin, getAllUser);
route.get("/:userId", authenticationAdmin, getUserById);
route.post("/register", register);
route.post("/login", login);
route.put("/:userId", [authentication, authorizationUser], userUpdateById);
route.put(
  "/change-password/:userId",
  [authentication, authorizationUser],
  changePasswordById
);
route.delete("/:userId", [authentication, authorizationUser], deleteUserById);

module.exports = route;
