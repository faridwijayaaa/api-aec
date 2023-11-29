const { Mentor } = require("../models");

module.exports = {
  createMentor: async (req, res) => {
    try {
      const { name, address } = req.body;
      const createMentor = await Mentor.create({
        name,
        address,
      });

      return res
        .status(201)
        .json({ msg: "successfully create mentor", data: createMentor });
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
  getAllMentor: async (req, res) => {
    try {
      const mentors = await Mentor.findAll();

      return res.status(200).json({
        msg: "successfully get all data Mentor",
        data: mentors,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getMentorById: async (req, res) => {
    try {
      const { mentorId } = req.params;

      const mentor = await Mentor.findOne({
        where: {
          id: mentorId,
        },
      });

      if (!mentor) {
        return res.status(400).json({ msg: "Mentor is not found" });
      }

      return res.status(200).json({
        msg: "successfully get mentor by id",
        data: mentor,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updateMentorById: async (req, res) => {
    try {
      const { mentorId } = req.params;
      const { name, address } = req.body;

      await Mentor.update(
        {
          name,
          address,
        },
        {
          where: {
            id: mentorId,
          },
        }
      );

      const mentor = await Mentor.findOne({
        where: {
          id: mentorId,
        },
      });

      if (!mentor) {
        return res.status(400).json({ msg: "Mentor is not found" });
      }

      return res.status(200).json({
        msg: "update Mentor successfully",
        data: mentor,
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
  deleteMentorById: async (req, res) => {
    try {
      const { mentorId } = req.params;

      const mentor = await Mentor.findOne({
        where: {
          id: mentorId,
        },
      });

      if (!mentor) {
        return res.status(400).json({ msg: "Mentor is not found" });
      }

      await Mentor.destroy({
        where: {
          id: mentorId,
        },
      });

      return res.status(200).json({ msg: "Mentor successfully deleted" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
