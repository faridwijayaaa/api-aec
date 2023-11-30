const express = require("express");
const {
  getAllLiveClass,
  getLiveClassById,
  createLiveClass,
  updateLiveClassById,
  deleteLiveClassById,
} = require("../controllers/LiveClass.controllers");
const { authenticationAdmin } = require("../middleware/authentication");
const route = express.Router();

route.get("/", getAllLiveClass);
route.get("/:classId", getLiveClassById);
route.post("/", authenticationAdmin, createLiveClass);
route.put("/:classId", authenticationAdmin, updateLiveClassById);
route.delete("/:classId", authenticationAdmin, deleteLiveClassById);

module.exports = route;
