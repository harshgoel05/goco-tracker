const express = require("express");
const Routes = express.Router();
const Store = require("../models/store");
const axios = require("axios");

/*
INDEX
1. Add stores to Database
2. Get all the stores from the Database
3. To get the no of counting stats of patients in INDIA ( not tallying with  John wala data)
4. To get the no of hospitals and beds
5. To get the helpline contacts
6. To get the Notifications by officials
7. WORLD DATA
8. World Data Country Wise
9. World Data Country Wise

*/

/************************************************************
					APIS FOR DATABASE
*************************************************************/
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
/************************************************************
					APIS FOR COVID 19 DATA
*************************************************************/

// To get the no of counting stats of patients in INDIA
Routes.route("/covidIndiaPatientCountStats").get((req, response) => {
	try {
		axios.get("https://api.rootnet.in/covid19-in/stats/latest").then((res) => {
			// console.log(res.data.data);
			response.status(200).send(res.data.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
// Confirmed Patients COORDINATES IN INDIA
Routes.route("/covidIndiaPatientCountStats").get((req, response) => {
	try {
		axios.get("https://api.covid19api.com/country/india/status/confirmed/live").then((res) => {
			// console.log(res.data.data);
			response.status(200).send(res.data.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
// To get the no of hospitals and beds
Routes.route("/covidIndiaHospitalBeds").get((req, response) => {
	try {
		axios.get("https://api.rootnet.in/covid19-in/hospitals/beds").then((res) => {
			// console.log(res.data.data);
			response.status(200).send(res.data.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
// To get the helpline contacts
Routes.route("/covidIndiaContacts").get((req, response) => {
	try {
		axios.get("https://api.rootnet.in/covid19-in/contacts").then((res) => {
			// console.log(res.data.data);
			response.status(200).send(res.data.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
// To get the Notifications by officials
Routes.route("/covidIndiaNotifs").get((req, response) => {
	try {
		axios.get("https://api.rootnet.in/covid19-in/notifications").then((res) => {
			// console.log(res.data.data);
			response.status(200).send(res.data.data.notifications);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});

// WORLD DATA
Routes.route("/covidWorld").get((req, response) => {
	try {
		axios.get("https://corona.lmao.ninja/all").then((res) => {
			// console.log(res.data.data);
			response.status(200).send(res.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
// World Data Country Wise
Routes.route("/covidWorldCountryWise").get((req, response) => {
	try {
		axios.get("https://corona.lmao.ninja/v2/jhucsse").then((res) => {
			// console.log(res.data.data);
			response.status(200).send(res.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
// World Data Histocial
Routes.route("/covidWorldHistory").get((req, response) => {
	try {
		axios.get("https://corona.lmao.ninja/v2/historical").then((res) => {
			console.log(res.data);
			response.status(200).send(res.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
module.exports = Routes;
