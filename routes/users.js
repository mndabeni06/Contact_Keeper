const express = require('express');
const router = express.Router();

//Transfering a user from Modules Folder
const User = require('../models/User') ;

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/' , (req, res) => {
    res.send(req.body); 
});


module.exports =  router;