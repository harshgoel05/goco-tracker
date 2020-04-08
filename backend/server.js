const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const MongoClient = require("mongodb").MongoClient;
// Connecting to MongoDB using MongoClient
const dburl = "mongodb+srv://hackon:hackon123@cluster0-x5lvb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(dburl, { useNewUrlParser: true });

client.connect((err, db) => {
	if (err) {
		console.log("Error: ", err);
	} else {
		console.log("Connected to Database");
		database = db.db("admin").collection("admincoll");
		// console.log(database);
	}
});
// Connecting to MongoEnds

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(cors());

// Routes
const apiroutings = require("./routes/routes");
app.use("/api", apiroutings);
// Create a port
const port = process.env.PORT;
const server = app.listen(port, () => {
	console.log("Connected to port " + port);
});
