const mongoose = require('mongoose');


//schema
const Schema =mongoose.Schema;


const NamesSchema = new Schema({
    nume:String,
    total: Number
})

//Model

const Names = mongoose.model('Name', NamesSchema)  //  = collection name


module.exports = Names;