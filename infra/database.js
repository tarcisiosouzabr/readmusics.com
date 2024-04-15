const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
);

async function connect() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

export default {
  connect,
};
