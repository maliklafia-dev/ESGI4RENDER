const { Sequelize } = require("sequelize");

// Database
const sequelize = new Sequelize(
  (process.env.DATABASE_URL =
    "postgresql://esgi_for_render_db_user:9Hwo7pHHUVRPwMbDfEnUdlCD87Bsq1uy@dpg-csh3odggph6c73bvqme0-a/esgi_for_render_db"),
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: "added",
      updatedAt: "updated",
    },
  }
);

sequelize.authenticate();
sequelize.sync();

module.exports = sequelize;
