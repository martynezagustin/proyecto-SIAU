const mongoose = require("mongoose")
const ClientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    address: {type: String, required: true},
    vehicleBrand: {type: String, required: true},
    vehicleModel: {type: String, required: true},
    reforms: [{type: mongoose.Schema.Types.ObjectId, ref: "Reform"}]
})
module.exports = mongoose.model("Client", ClientSchema)