const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Organization = require('./organization');
const Item = require('./item');

const Pricing = sequelize.define('Pricing', {
  zone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  base_distance_in_km: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Organization.hasMany(Pricing);
Pricing.belongsTo(Organization);

Item.hasMany(Pricing);
Pricing.belongsTo(Item);

export default Pricing;