const express = require("express");
const Routes = express.Router();
const Store = require("../models/store");
const axios = require("axios");

/*
INDEX
1. Add stores to Database                                                Working
2. Get all the stores from the Database									 Working
3. State wise in India (less than 5916 )								 Not Working
4. To get the no of hospitals and beds									 Working
5. To get the helpline contacts											 Working
6. To get the Notifications by officials								 Working
7. WORLD DATA															 Working
8. World Data Country Wise (5916)										 Working
9. World Data India TimeLine (5916) 									 Working

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
		axios.get("https://api.covid19india.org/data.json").then((res) => {
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

// India Data Timeline
Routes.route("/covidWorldHistory").get((req, response) => {
	try {
		axios.get("https://thevirustracker.com/free-api?countryTimeline=IN").then((res) => {
			console.log(res.data);
			response.status(200).send(res.data);
		});
	} catch (err) {
		// console.error(err);
		response.status(500).send(err);
	}
});
// Get the GeoLocation of User
const NodeGeocoder = require("node-geocoder");

Routes.route("/getmylocation").get((req, response) => {
	const options = {
		provider: "google",

		// Optional depending on the providers
		fetch: customFetchImplementation,
		apiKey: "YOUR_API_KEY", // for Mapquest, OpenCage, Google Premier
		formatter: null, // 'gpx', 'string', ...
	};

	const geocoder = NodeGeocoder(options);
	const res = geocoder.geocode("29 champs elysée paris");
	console.log(res);
});

module.exports = Routes;
