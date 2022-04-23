const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const CONNECTION_STRING = "mongodb+srv://DanoStefan:Romania900@afine.dhfem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!!!!');
})

//httpss request logger
app.use(morgan('tiny'));
app.use('/api',routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`))