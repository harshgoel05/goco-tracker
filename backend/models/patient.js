const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const patientSchema = new Schema({
    name: String,
    contactnum: String,
    address: String,
    symptoms: String,
});
module.exports = mongoose.model("patient", patientSchema, "patientDb");
