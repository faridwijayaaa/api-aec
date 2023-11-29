const { json } = require("sequelize");
const { JoinClass, LiveClass, Mentor, User } = require("../models");

module.exports = {
  createJoinClass: async (req, res) => {
    try {
      const { classId } = req.body;
      const UserId = res.dataUser.id;

      const data = {
        UserId,
        LiveClassId: classId,
      };

      await JoinClass.create(data);

      return res
        .status(201)
        .json({ msg: "succesfully join class", data: data });
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
  getAllJoinClass: async (req, res) => {
    try {
      const joinClasses = await JoinClass.findAll({
        include: [
          {
            model: User,
            attributes: [`email`, `username`],
          },
          {
            model: LiveClass,
            attributes: [`title`],
            include: {
              model: Mentor,
              attributes: [`name`],
            },
          },
        ],
      });

      return res.status(200).json({
        msg: "sucessfully get all join class",
        data: joinClasses,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getJoinClassById: async (req, res) => {
    try {
      const { joinId } = req.params;

      const joinClass = await JoinClass.findOne({
        where: {
          id: joinId,
        },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: User,
            attributes: [`email`, `username`],
          },
          {
            model: LiveClass,
            attributes: [`title`],
            include: {
              model: Mentor,
              attributes: [`name`],
            },
          },
        ],
      });

      if (!joinClass) {
        return res.status(400).json({ msg: "Join class not found" });
      }

      return res
        .status(200)
        .json({ msg: "sucesfully get data by id", data: joinClass });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteJoinClassById: async (req, res) => {
    try {
      const { joinId } = req.params;
      await JoinClass.destroy({
        where: {
          id: joinId,
        },
      });

      return res.status(200).json({ msg: "Canceled join class" });
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
};
