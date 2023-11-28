const express = require("express");
const route = express.Router();
const adminRoutes = require("./admin.route");
const userRoutes = require("./user.route");

route.get("/", (req, res) => {
  res.json({
    msg: "Server is running",
  });
});

route.use("/admins", adminRoutes);
route.use("/users", userRoutes);

module.exports = route;
