const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "your_database",
  "your_username",
  "your_password",
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

export default syncDB
