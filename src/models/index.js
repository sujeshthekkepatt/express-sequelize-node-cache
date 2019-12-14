const widget = require("./widgets")

const sequelize = require("./sequelize-con");

sequelize.sync({
    force: true,
});

module.exports = {
    widget,
    sequelize
}
