const express = require('express');

const router = express.Router();

// middleware to validate the route
router.post('/:math', (req, res, next) => {
  if(!req.body.num1 && !req.body.num2){
    return res.status(432).json({message: 'No data'});
  }

  next();
});

// routes for the api
router.post('/add', (req, res, next) => {
  res.json({result: req.body.num1 + req.body.num2});
});

module.exports = router;
