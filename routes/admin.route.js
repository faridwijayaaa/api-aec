const express = require("express");
const { loginAdmin } = require("../controllers/Admin.controllers");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({ msg: "Admins Route running" });
});

route.post("/login", loginAdmin);

module.exports = route;
