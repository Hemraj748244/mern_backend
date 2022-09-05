const express = require('express');
const router = express.Router();
// const User = require('../models/Users');

router.get('/',(req,res)=>{
  console.log("auth exec");
//  console.log(req.body);
// // const user = User(req.body);
// // user.save();
// res.json({message : req.body})
res.send("register page") 
})

module.exports = router;