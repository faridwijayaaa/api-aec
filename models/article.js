"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "article title cannot be empty",
          },
        },
      },
      paragraph1: DataTypes.TEXT,
      paragraph2: DataTypes.TEXT,
      paragraph3: DataTypes.TEXT,
      paragraph4: DataTypes.TEXT,
      paragraph5: DataTypes.TEXT,
      paragraph6: DataTypes.TEXT,
      paragraph7: DataTypes.TEXT,
      paragraph8: DataTypes.TEXT,
      paragraph9: DataTypes.TEXT,
      paragraph10: DataTypes.TEXT,
      poster_img_url: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            args: true,
            msg: "article image url cannot be empty",
          },
          isUrl: {
            args: true,
            msg: "please enter valid url format",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
