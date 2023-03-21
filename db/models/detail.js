'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Map, {
        foreignKey: 'map_id',
      });
    }
  }
  Detail.init({
    map_id: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    p1: DataTypes.STRING,
    p2: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};
