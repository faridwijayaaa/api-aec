const { User } = require("../models");
const { hashPassword, comparePassword } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");

module.exports = {
  register: async (req, res) => {
    try {
      let { username, email, password } = req.body;

      if (!password) {
        return res.status(400).json({ message: "password cannot be empty" });
      }

      const hashedPassword = hashPassword(password);
      await User.create({
        username,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({
        username,
        email,
      });
    } catch (error) {
      let errorMes = error.name;
      if (
        errorMes === "SequelizeUniqueConstraintError" ||
        errorMes === "SequelizeValidationError"
      ) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json({ msg: error });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      } else {
        const compare = comparePassword(password, user.password);
        if (!compare) {
          return res.status(400).json({ message: "password is wrong" });
        } else {
          const token = generateToken({
            id: user.id,
            username: user.username,
            email: user.email,
          });
          return res.status(200).json({ token: token });
        }
      }
    } catch (error) {
      let errorMes = error.name;
      if (
        errorMes === "SequelizeUniqueConstraintError" ||
        errorMes === "SequelizeValidationError"
      ) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json({ msg: error });
    }
  },
  userUpdateById: async (req, res) => {
    try {
      const { userId } = req.params;
      const { email, username } = req.body;

      const data = { email, username };

      await User.update(data, {
        where: {
          id: +userId,
        },
      });

      return res.status(200).json({
        msg: "update data successfully",
        data: data,
      });
    } catch (error) {
      let errorMes = error.name;
      if (
        errorMes === "SequelizeUniqueConstraintError" ||
        errorMes === "SequelizeValidationError"
      ) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json(error);
    }
  },
  getAllUser: async (req, res) => {
    try {
      const data = await User.findAll();

      return res.status(200).json({
        msg: "succesfully get all data user",
        data: data,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const { userId } = req.params;

      const data = await User.findOne({
        where: {
          id: userId,
        },
      });

      if (!data) {
        return res.status(404).json({ msg: "data not found" });
      }

      return res
        .status(200)
        .json({ msg: "succesfully get user by id", data: data });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  changePasswordById: async (req, res) => {
    try {
      const { userId } = req.params;
      const { oldPassword, newPassword } = req.body;

      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      const compare = comparePassword(oldPassword, user.password);
      if (!compare) {
        return res.status(400).json({ message: "password old is wrong" });
      }
      
      const data = { password: hashPassword(newPassword) };

      await User.update(data, {
        where: {
          id: +userId,
        },
      });

      return res.status(200).json({
        msg: "change password has successfully",
      });
    } catch (error) {
      let errorMes = error.name;
      if (
        errorMes === "SequelizeUniqueConstraintError" ||
        errorMes === "SequelizeValidationError"
      ) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json(error);
    }
  },
  deleteUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return res
        .status(200)
        .json({ msg: "Your account has been successfully deleted" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
