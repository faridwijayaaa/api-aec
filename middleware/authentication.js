const { verifyToken } = require("../helper/jwt");
const { Admin } = require("../models");

module.exports = {
  authenticationAdmin: async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const adminDecoded = verifyToken(token);
      console.log(adminDecoded);

      const adminById = await Admin.findOne({
        where: {
          id: adminDecoded.id,
        },
      });

      if (!adminById) {
        return res.status(401).json({
          message: "No Active account found with the given credentials",
        });
      }

      res.dataAdmin = adminById;
      return next();
    } catch (error) {
      console.log("scope erorr authentication");
      return res.status(500).json({ msg: error });
    }
  },
};
