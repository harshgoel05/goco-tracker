const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DoctorSchema = new Schema({
	name: String,
    email:String,
    password:String,
    hospital_name:String,
    adress:Object,
    doctor_number:Number
});
module.exports = mongoose.model("doctor", DoctorSchema, "StoreDb");