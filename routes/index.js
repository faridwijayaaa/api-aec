const express = require("express");
const route = express.Router();
const adminRoutes = require("./admin.route");
const userRoutes = require("./user.route");
const articleRoutes = require("./article.route");
const liveClassRoutes = require("./liveClass.route");
const mentorRoutes = require("./mentor.route");
const joinClasses = require("./joinClass.route");

route.get("/", (req, res) => {
  res.json({
    msg: "Server is running",
  });
});

route.use("/admins", adminRoutes);
route.use("/users", userRoutes);
route.use("/articles", articleRoutes);
route.use("/liveClasses", liveClassRoutes);
route.use("/mentors", mentorRoutes);
route.use("/joinClasses", joinClasses);

module.exports = route;
