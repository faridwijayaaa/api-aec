const express = require("express");
const {
  getAllMentor,
  getMentorById,
  createMentor,
  updateMentorById,
  deleteMentorById,
} = require("../controllers/Mentor.controllers");
const { authenticationAdmin } = require("../middleware/authentication");
const route = express.Router();

route.get("/", getAllMentor);
route.get("/:mentorId", getMentorById);
route.post("/", authenticationAdmin, createMentor);
route.put("/:mentorId", authenticationAdmin, updateMentorById);
route.delete("/:mentorId", authenticationAdmin, deleteMentorById);

module.exports = route;
