const express = require("express");
const Routes = express.Router();
const Store = require("../models/store");

// Add stores to Database
Routes.route("/addstore").post((req, res) => {
	console.log("Adding Store with data", req.body);
	let store = new Store(req.body);
	store.save(function (err) {
		if (err) {
			return next(err);
		}
		res.status(200).send({ success: true });
	});
});

// Get all the stores from the Database
Routes.route("/getstores").get((req, res) => {
	console.log("Getting all Stores");
	Store.find((err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).send({ stores: data });
		}
	});
});
module.exports = Routes;
