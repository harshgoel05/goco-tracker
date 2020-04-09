const express = require("express");
const Routes = express.Router();
const Store = require("../models/store");
Routes.route("/").get((req, res) => {
	console.log("Works");
	res.status(200).send({ success: true });
});
Routes.route("/addstore").post((req, res) => {
	console.log("Adding Store with data", req.body);
	let store = new Store(req.body);
	store.save();
	res.status(200).send({ success: true });
});

module.exports = Routes;
