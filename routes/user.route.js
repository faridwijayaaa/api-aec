const express = require("express");
const { login, register } = require("../controllers/User.controllers");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({ msg: "Users Route running" });
});

route.post("/register", register);
route.post("/login", login);

module.exports = route;
