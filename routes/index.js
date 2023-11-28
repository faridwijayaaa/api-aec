const express = require("express");
const route = express.Router();
const userRoutes = require("./user.route");

route.get("/", (req, res) => {
  res.json({
    msg: "Server is running",
  });
});

route.use("/users", userRoutes);

module.exports = route;
