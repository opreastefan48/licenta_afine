const express = require('express');
const router = express.Router();

const Culegator = require('../models/culegator');

//routes
router.get('/',  (req, res) =>{

  Culegator.find({ })
      .then((data) =>{
          console.log('Data: ',data)
          res.json(data);
      })
      .catch((error) =>{
          console.log('error: ', error)
      })
});

router.post('/save',  (req, res) =>{
    console.log('Cantitate: ', req.KG);
    res.json({
        msg:' We got the data'
    });
})



router.get('/name',  (req, res) =>{
  const data = {
      username: 'peterson',
      age: 5
  }
  res.json(data);
})

module.exports = router;