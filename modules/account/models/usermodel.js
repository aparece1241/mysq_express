'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelizeConnection = require('../msql_connection');

module.exports = (sequelize) => {
  class userModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userModel.init({
    id: {type: DataTypes.INTEGER,primaryKey:true},
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize: sequelizeConnection,
    modelName: 'user',
  });
  return userModel;
};