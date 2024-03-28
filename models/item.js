const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Item = sequelize.define('Item', {
  type: {
    type: DataTypes.ENUM('perishable', 'non-perishable'),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Item };