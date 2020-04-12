const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const patientSchema = new Schema({
    name: String,
    contactnum: String,
    address: String,
    symptoms: String,
    status: {
        type: String,
        default: "notupdated",
    },
});
module.exports = mongoose.model("patient", patientSchema, "patientDb");
