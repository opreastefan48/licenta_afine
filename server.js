const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const CONNECTION_STRING = "mongodb+srv://DanoStefan:Romania900@afine.dhfem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to DataBase!!!!');
})


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors());
app.options('*', cors());
//httpss request logger

app.use(morgan('tiny'));
app.use('/api',routes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/licenta/build')))

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'licenta', 'build', index.html));
    })
}else{
    app.get('/',(req,res)=>{
        res.send('API FUGE');
    });
}


app.listen(PORT, console.log(`Server is starting at ${PORT}`))