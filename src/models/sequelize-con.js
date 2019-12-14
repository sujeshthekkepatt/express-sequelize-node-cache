const Sequelize = require("sequelize");
const sequelize = new Sequelize('sample', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;