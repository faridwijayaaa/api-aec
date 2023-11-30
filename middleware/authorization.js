const { User, JoinClass } = require("../models");

module.exports = {
  authorizationUser: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const authenticationUser = res.dataUser;

      const userById = await User.findOne({
        where: {
          id: +userId,
        },
      });

      if (!userById) {
        return res.status(404).json({ message: "User not found" });
      }
      if (
        userById.id === authenticationUser.id ||
        authenticationUser.username === "admin"
      ) {
        return next();
      } else {
        return res.status(403).json({
          message: "FORBIDDEN",
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  authorizationClass: async (req, res, next) => {
    try {
      const { joinId } = req.params;
      const authenticationUser = res.dataUser;
      const joinById = await JoinClass.findOne({
        where: {
          id: +joinId,
        },
      });

      if (!joinById) {
        return res.status(404).json({ message: "Join Class not found" });
      }
      if (
        joinById.UserId === authenticationUser.id ||
        authenticationUser.username === "admin"
      ) {
        return next();
      } else {
        return res.status(403).json({ message: "FORBIDDEN" });
      }
    } catch (error) {
      console.log("auth class error");
      return res.status(500).json(error);
    }
  },
};
