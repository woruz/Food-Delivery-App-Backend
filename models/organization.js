const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Organization = sequelize.define('Organization', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Organization };