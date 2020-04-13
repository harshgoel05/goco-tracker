const express = require("express");
const Routes = express.Router();
const Store = require("../models/store");
const Patient = require("../models/patient");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const doctor_details = require("../models/doctor_details");

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
					APIS FOR Stores
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
					APIS FOR Patient
*************************************************************/
// Get all the patient from the Database
Routes.route("/getpatients").get((req, res) => {
    console.log("Getting all Stores");
    Patient.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(data);
        }
    });
});
// Add patient to Database
Routes.route("/addPatient").post((req, res) => {
    // console.log("Adding Store with data", req.body);
    let p = new Patient(req.body);
    p.save(function (err) {
        if (err) {
            console.log("Error while adding patient from at backend");
            res.status(500).send({ success: false });
        }
        res.status(200).send({ success: true });
    });
});
//Mark Patient Positive
Routes.route("/markpatientpostive/:id").put((req, res) => {
    console.log("Called", req.params.id);
    Patient.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                status: "Positive",
            },
        },
        (error, data) => {
            if (error) {
                console.log(error);
                res.status(500).send("Error");
            } else {
                res.json(data);
                console.log("Data updated successfully");
            }
        }
    );
});
//Mark Patient Negative
Routes.route("/markpatientnegative/:id").put((req, res) => {
    console.log("Called", req.params.id);
    Patient.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                status: "Negative",
            },
        },
        (error, data) => {
            if (error) {
                console.log(error);
                res.status(500).send("Error");
            } else {
                res.json(data);
                console.log("Data updated successfully");
            }
        }
    );
});

/************************************************************
					APIS FOR Adminlogin
*************************************************************/
Routes.route("/login").post((req, res) => {
    let userData = req.body;
    console.log(userData);
    doctor_details.findOne({ email: userData.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send("Invalid Email!");
            } else {
                if (user.password != userData.password) {
                    console.log("The user: ", userData);
                    res.status(401).send("Wrong Password!");
                } else {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, "KEYYYY");
                    res.status(200).send({ token });
                }
            }
        }
    });
});
Routes.route("/verifylogin").post((req, res) => {
    console.log("verify called");
    let token = req.body.token;
    try {
        let data = jwt.verify(token, "KEYYYY");
        console.log("Yes token is correct");
        res.send("true");
    } catch (err) {
        console.log(err);
        res.status(401).send("false");
    }
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
        axios
            .get("https://api.rootnet.in/covid19-in/hospitals/beds")
            .then((res) => {
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
            response.status(200).send(res.data.data.contacts);
        });
    } catch (err) {
        // console.error(err);
        response.status(500).send(err);
    }
});
// To get the Notifications by officials
Routes.route("/covidIndiaNotifs").get((req, response) => {
    try {
        axios
            .get("https://api.rootnet.in/covid19-in/notifications")
            .then((res) => {
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
        axios.get("https://corona.lmao.ninja/countries?sort=country").then((res) => {
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
        axios
            .get("https://thevirustracker.com/free-api?countryTimeline=IN")
            .then((res) => {
                console.log(res.data);
                response.status(200).send(res.data);
            });
    } catch (err) {
        // console.error(err);
        response.status(500).send(err);
    }
});
module.exports = Routes;
