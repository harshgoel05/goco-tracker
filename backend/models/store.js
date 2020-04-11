const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: String,
    category: String,
    ownername: String,
    contactno: String,
    address: String,
    city: String,
    state: String,
});
module.exports = mongoose.model("store", storeSchema, "StoreDb");
