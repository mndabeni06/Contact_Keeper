const express = require('express');
const router = express.Router();


//@route GET api/auth
//@desc GET logged in user
//@access Private
router.get('/' , (req, res) => {
    res.send('Get logged in user');
});




//@route POST api/auth
//@desc auth user & get token
//@access Public
router.post('/' , (req, res) => {
    res.send('Login user');
});

module.exports =  router;
