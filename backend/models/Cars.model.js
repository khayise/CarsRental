const { default: mongoose } = require("mongoose");

const CarSchema = new mongoose.Schema({
    name: String,
    img: String,
    year: Number,
    transmition: String,
    engineCapacity: Number,
    seats: Number,
    consumptionOn100: Number,
    basePrice: Number,
    benefits: [String]
})

const Cars = mongoose.model('Cars', CarSchema);

module.exports = Cars