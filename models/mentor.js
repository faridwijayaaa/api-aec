"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.LiveClass);
    }
  }
  Mentor.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "name of mentor cannot be empty",
          },
        },
      },
      address: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            args: true,
            msg: "address cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Mentor",
    }
  );
  return Mentor;
};
