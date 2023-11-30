const { comparePassword } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");
const { Admin } = require("../models");

module.exports = {
  loginAdmin: async (req, res) => {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({
        where: {
          email,
        },
      });

      if (!admin) {
        return res.status(400).json({ msg: "Admin not found" });
      } else {
        const compare = comparePassword(password, admin.password);
        if (!compare) {
          return res.status(400).json({ msg: "password is wrong" });
        } else {
          const token = generateToken({
            id: admin.id,
            username: admin.username,
            email: admin.email,
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
        return res.status(400).json({ msg: error.errors[0].message });
      }
      return res.status(500).json({ msg: error });
    }
  },
};
