const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const axios = require("axios");
require("dotenv").config();
const app = express();
const path = require("path");
// Connecting to MongoDB using MongoClient
mongoose
    .connect(process.env.DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.error("Database connection error");
    });
// Connecting to MongoEnds

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(cors());

app.use(express.static(__dirname + "/stats/dist/client"));
const apiroutings = require("./backend/routes/routes");
app.use("/api", apiroutings);
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/stats/dist/client/index.html");
});
// Create a port

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log("Connected to port " + port);
});
// Routes
