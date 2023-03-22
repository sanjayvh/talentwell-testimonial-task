const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");

const Testimonial = sequelize.define("testimonial", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    testimonial_photo_url: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    testimonial_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    testimonial_post: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    testimonial_description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    testimonial_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = Testimonial;
