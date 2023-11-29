const express = require("express");
const {
  createArticle,
  getAllArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} = require("../controllers/Article.controllers");
const { authenticationAdmin } = require("../middleware/authentication");
const route = express.Router();

route.get("/", getAllArticle);
route.get("/:articleId", getArticleById);
route.post("/", authenticationAdmin, createArticle);
route.put("/:articleId", authenticationAdmin, updateArticleById);
route.delete("/:articleId", authenticationAdmin, deleteArticleById);

module.exports = route;
