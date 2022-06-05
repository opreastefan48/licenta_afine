const mongoose = require('mongoose');


//schema
const Schema =mongoose.Schema;
const currentDate = new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}); 
console.log('date: ', currentDate);
const CulegatorSchema = new Schema({
    nume:String,
    kilograme: String,
    plantatie: String,
    rand: String,
    date:{
        type: String,
        default: currentDate
    }
})

//Model

const Culegator = mongoose.model('Culegator', CulegatorSchema)  // Culegator = collection name


module.exports = Culegator;