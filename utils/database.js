const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "food_delivery",
  "postgres",
  "123456",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

async function syncDB() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connected");
  } catch (error) {
    console.error("error synching database", error);
  }
}

module.exports = { syncDB, sequelize }
