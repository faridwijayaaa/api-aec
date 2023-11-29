const { verifyToken } = require("../helper/jwt");
const { Admin, User } = require("../models");

module.exports = {
  authenticationAdmin: async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const adminDecoded = verifyToken(token);

      const adminById = await Admin.findOne({
        where: {
          id: adminDecoded.id,
        },
      });

      if (!adminById) {
        return res.status(401).json({
          message: "No Active account found with the given admin credentials",
        });
      }

      res.dataAdmin = adminById;
      return next();
    } catch (error) {
      console.log("scope erorr authentication admin");
      return res.status(500).json({ msg: "Login admin for given credentials" });
    }
  },
  authentication: async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const userDecoded = verifyToken(token);

      const userById = await User.findOne({
        where: {
          id: userDecoded.id,
        },
      });

      const adminById = await Admin.findOne({
        where: {
          id: userDecoded.id,
        },
      });

      if (adminById) {
        res.dataUser = adminById;
      } else if (userById) {
        res.dataUser = userById;
      } else {
        return res.status(401).json({
          message: "No Active account found with the given user credentials",
        });
      }

      return next();
    } catch (error) {
      console.log("scope err authentication user");
      return res.status(500).json({ msg: error });
    }
  },
};
