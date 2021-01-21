'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project.hasMany(models.userPermission, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false
        }
      })
      project.hasMany(models.puzzle, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false
        }
      })
      project.hasMany(models.image, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  project.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    isFinish: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};