const { LiveClass, Mentor } = require("../models");

module.exports = {
  createLiveClass: async (req, res) => {
    try {
      const {
        title,
        description,
        start_date,
        poster_img_url,
        img_url1,
        img_url2,
        img_url3,
        img_url4,
        MentorId,
      } = req.body;

      const data = {
        title,
        description,
        start_date,
        poster_img_url,
        img_url1,
        img_url2,
        img_url3,
        img_url4,
        MentorId,
      };

      const createLiveClass = await LiveClass.create(data);

      return res
        .status(201)
        .json({ msg: "succesfully create Class", data: createLiveClass });
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
  getAllLiveClass: async (req, res) => {
    try {
      const liveClasses = await LiveClass.findAll({
        include: [
          {
            model: Mentor,
            attributes: [`name`, "address"],
          },
        ],
      });
      return res.status(200).json({
        msg: "successfully get all live class data",
        data: liveClasses,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getLiveClassById: async (req, res) => {
    try {
      const { classId } = req.params;

      const liveClass = await LiveClass.findOne({
        where: {
          id: classId,
        },
        include: [
          {
            model: Mentor,
            attributes: [`name`, "address"],
          },
        ],
      });

      if (!liveClass) {
        return res.status(400).json({ msg: "Live class not found" });
      }

      return res.status(200).json({
        msg: "successfully get live class by id",
        data: liveClass,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updateLiveClassById: async (req, res) => {
    try {
      const { classId } = req.params;

      const {
        title,
        description,
        start_date,
        poster_img_url,
        img_url1,
        img_url2,
        img_url3,
        img_url4,
        MentorId,
      } = req.body;

      const data = {
        title,
        description,
        start_date,
        poster_img_url,
        img_url1,
        img_url2,
        img_url3,
        img_url4,
        MentorId,
      };

      await LiveClass.update(data, {
        where: {
          id: +classId,
        },
      });

      const liveClass = await LiveClass.findOne({
        where: {
          id: classId,
        },
      });

      if (!liveClass) {
        return res.status(400).json({ msg: "Live Class not found" });
      }

      return res.status(200).json({
        msg: "update Class Successfully",
        data: liveClass,
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
  deleteLiveClassById: async (req, res) => {
    try {
      const { classId } = req.params;

      const liveClass = await LiveClass.findOne({
        where: {
          id: classId,
        },
      });

      if (!liveClass) {
        return res.status(400).json({ msg: "Live Class not found" });
      }

      await LiveClass.destroy({
        where: {
          id: classId,
        },
      });

      return res.status(200).json({ msg: "Class succesfully delete" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
