const sequelize = require("./sequelize-con");
const Sequelize = require("sequelize");

const widget = sequelize.define('widget', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    config: {
        type: Sequelize.STRING
    },
    widgetId: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: true
});

// widget.sync().catch(err => console.log(err));

module.exports = widget;