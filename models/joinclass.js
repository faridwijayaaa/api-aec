'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JoinClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.belongsTo(models.LiveClass)
    }
  }
  JoinClass.init({
    UserId: DataTypes.INTEGER,
    LiveClassId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JoinClass',
  });
  return JoinClass;
};