const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DoctorSchema = new Schema({
    email: String,
    password: String,
});
module.exports = mongoose.model("doctor", DoctorSchema, "adminDb");
