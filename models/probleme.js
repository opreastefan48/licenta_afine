const mongoose = require('mongoose');


//schema
const Schema =mongoose.Schema;

const ProblemaSchema = new Schema({
    problem:String,
    plantatie:String,
    rand:String,
    planta:String,
})

//Model

const Problems = mongoose.model('Problem', ProblemaSchema)  // Culegator = collection name


module.exports = Problems;