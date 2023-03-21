'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Map extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'map_id',
      });
      this.hasMany(models.Detail, {
        foreignKey: 'map_id',
      });
      this.hasMany(models.Rating, {
        foreignKey: 'map_id',
      });
    }
  }
  Map.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    distance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    finish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Map',
  });
  return Map;
};
