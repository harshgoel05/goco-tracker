const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const MongoClient = require("mongodb").MongoClient;
// Connecting to MongoDB using MongoClient
const dburl = "mongodb+srv://hackon:hackon123@cluster0-x5lvb.mongodb.net/test?retryWrites=true&w=majority";
mongoose
	.connect(dburl)
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
const port = process.env.PORT;
const server = app.listen(port, () => {
	console.log("Connected to port " + port);
});

// Routes
const apiroutings = require("./routes/routes");
app.use("/api", apiroutings);
// Create a port
