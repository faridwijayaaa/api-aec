"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LiveClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.JoinClass);
      this.belongsTo(models.Mentor);
    }
  }
  LiveClass.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "live class title cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            args: true,
            msg: "description cannot be empty",
          },
        },
      },
      start_date: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            args: true,
            msg: "start_date cannot be empty",
          },
        },
      },
      poster_img_url: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            args: true,
            msg: "poster_img_url cannot be empty",
          },
          isUrl: {
            args: true,
            msg: "please enter valid url format",
          },
        },
      },
      img_url1: {
        type: DataTypes.TEXT,
        validate: {
          isUrl: {
            args: true,
            msg: "please enter valid url format",
          },
        },
      },
      img_url2: {
        type: DataTypes.TEXT,
        validate: {
          isUrl: {
            args: true,
            msg: "please enter valid url format",
          },
        },
      },
      img_url3: {
        type: DataTypes.TEXT,
        validate: {
          isUrl: {
            args: true,
            msg: "please enter valid url format",
          },
        },
      },
      img_url4: {
        type: DataTypes.TEXT,
        validate: {
          isUrl: {
            args: true,
            msg: "please enter valid url format",
          },
        },
      },
      MentorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "LiveClass",
    }
  );
  return LiveClass;
};
