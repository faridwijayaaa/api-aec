const { Article } = require("../models");

module.exports = {
  createArticle: async (req, res) => {
    try {
      const {
        title,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        paragraph6,
        paragraph7,
        paragraph8,
        paragraph9,
        paragraph10,
        poster_img_url,
      } = req.body;

      const data = {
        title,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        paragraph6,
        paragraph7,
        paragraph8,
        paragraph9,
        paragraph10,
        poster_img_url,
      };

      const createArticle = await Article.create(data);

      return res.status(201).json({ article: createArticle });
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
  getAllArticle: async (req, res) => {
    try {
      const articles = await Article.findAll();
      return res.status(200).json({
        msg: "successfully get all data article",
        data: articles,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getArticleById: async (req, res) => {
    const { articleId } = req.params;

    const article = await Article.findOne({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      return res.status(400).json({ msg: "article not found" });
    }

    return res.status(200).json({
      msg: "succesfully get article by id",
      data: article,
    });
  },
  updateArticleById: async (req, res) => {
    try {
      const { articleId } = req.params;

      const {
        title,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        paragraph6,
        paragraph7,
        paragraph8,
        paragraph9,
        paragraph10,
        poster_img_url,
      } = req.body;

      const data = {
        title,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        paragraph6,
        paragraph7,
        paragraph8,
        paragraph9,
        paragraph10,
        poster_img_url,
      };

      await Article.update(data, {
        where: {
          id: +articleId,
        },
      });

      const article = await Article.findOne({
        where: {
          id: articleId,
        },
      });

      if (!article) {
        return res.status(400).json({ msg: "article not found" });
      }

      return res.status(200).json({
        msg: "update article sucessfully",
        data: article,
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
  deleteArticleById: async (req, res) => {
    try {
      const { articleId } = req.params;

      const article = await Article.findOne({
        where: {
          id: articleId,
        },
      });

      if (!article) {
        return res.status(400).json({ msg: "article not found" });
      }

      await Article.destroy({
        where: {
          id: articleId,
        },
      });

      return res.status(200).json({ msg: "Article succesfully delete" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
