const express = require("express");
const app = express();
const { PORT } = require("./helpers/constants");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const sequelize = require("./config/dbConfig.js");

const testimonialRoutes = require("./controllers/testimonialController");

const Testimonial = require("./models/testimonialModel.js");

app.use(testimonialRoutes);

sequelize
    .sync()
    .then(() => {
        console.log("Connected to database successfully");
        app.listen(PORT, (err) => {
            if (err) console.log(err.message);
            else console.log("App listening on port " + PORT);
        });
    })
    .catch((err) => {
        console.log("Error Connecting: " + err.message);
    });
