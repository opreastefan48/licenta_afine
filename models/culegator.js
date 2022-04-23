const mongoose = require('mongoose');


//schema
const Schema =mongoose.Schema;

const CulegatorSchema = new Schema({
    name: String,
    date:{
        type: String,
        default: Date.now()
    }
})

//Model

const Culegator = mongoose.model('Culegator', CulegatorSchema)  // Culegator = collection name


module.exports = Culegator;