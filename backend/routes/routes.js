const express = require("express");
const Routes = express.Router();

Routes.route("/").get((req, res) => {
	console.log("Works");
	res.status(200).send({ success: true });
});
Routes.route("/addstore").post((req, res) => {
	console.log("Works");
	res.status(200).send({ success: true });
});

module.exports = Routes;
