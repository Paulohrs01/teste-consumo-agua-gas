'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Measure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Measure.init({
    uuid: DataTypes.STRING,
    customer_code: DataTypes.STRING,
    measure_datetime: DataTypes.DATE,
    measure_type: DataTypes.STRING,
    measure_value: DataTypes.INTEGER,
    has_confirmed: DataTypes.BOOLEAN,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Measure',
  });
  return Measure;
};