const express = require('express');
const router = express.Router();

const Names = require('../models/names');
const Culegator = require('../models/culegator');
const Problems = require('../models/probleme');
const Account = require('../models/accounts');


//routes
router.post('/save',  (req, res) =>{
    const data = req.body;
    const newCulegator = new Culegator(data);
    newCulegator.save((error) =>{
        if(error){
            return res.status(500).json({msg:'SSorry, error saving data'});
        }
    });
    
});


router.post('/savepb',  (req, res) =>{

  //console.log('Problems: ', req.body);

  const data = req.body;

  const newProblem = new Problems(data);

  newProblem.save((error) =>{
      if(error){
          res.status(500).json({msg:'SSorry, error saving data'});
          return;
      }

      return res.json({
          msg:'Problems DATA SAVED TO DB'
      });
      
  });
  
});

router.post('/savse_names',  (req, res) =>{
    const data = req.body;

    const newName = new Names(data);

    newName.save((error) =>{
        if(error){
            return res.status(500).json({msg:'SSorry, error saving data'});
        }
        return res.json({
            msg:' newName SAVED TO DB'
        });
        
    });
    
});


router.get('/culegator',  (req, res) =>{

  Culegator.find({ })
      .then((data) =>{
          res.json(data);
      })
      .catch((error) =>{
          console.log('error: ', error)
      })
});



router.get('/names',  (req, res) =>{

    Names.find({ })
        .then((data) =>{
            res.json(data);
        })
        .catch((error) =>{
            console.log('error: ', error)
        })
  });

router.get('/problems',  (req, res) =>{

    Problems.find().then(problems => res.json(problems));
  });

router.delete('/deletePB/:id', function(req, res) {
    const id = req.params.id;
    Problems.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("Problem deleted");
        } else {
            console.log(err);
        }
    })
});

router.delete('/deleteCules/:id', function(req, res) {
    const id = req.params.id;
    Culegator.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("Culegator deleted");
        } else {
            console.log(err);
        }
    })
});

router.get('/getAccount',  (req, res) =>{

    Account.find({ })
        .then((data) =>{
            res.json(data);
        })
        .catch((error) =>{
            console.log('error: ', error)
        })
  });
  
module.exports = router;
