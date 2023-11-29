const express = require("express");
const {
  getAllJoinClass,
  createJoinClass,
  getJoinClassById,
  deleteJoinClassById,
} = require("../controllers/JoinClass.controllers");
const {
  authenticationUser,
  authentication,
} = require("../middleware/authentication");
const { authorizationClass } = require("../middleware/authorization");
const route = express.Router();

route.get("/", getAllJoinClass);
route.get("/:joinId", getJoinClassById);
route.post("/", authenticationUser, createJoinClass);
route.delete(
  "/:joinId",
  authentication,
  authorizationClass,
  deleteJoinClassById
);

module.exports = route;
