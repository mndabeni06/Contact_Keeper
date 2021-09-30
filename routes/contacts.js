const express = require('express');
const router = express.Router();


//@route GET api/contact
//@desc Register a user contacts
//@access Prrivate
router.get('/' , (req, res) => {
    res.send('Get all contacts');
});


//@route POST api/contacts
//@desc Add new contact
//@access Private
router.post('/' , (req, res) => {
    res.send('Add Contact');
});



//@route PUT api/contacts
//@desc Update contact
//@access Private
router.post('/:id' , (req, res) => {
    res.send('Update contact');
});


//@route DELETE api/contacts
//@desc Delte contact
//@access Private
router.delete('/:id' , (req, res) => {
    res.send('Delete contact');
});


module.exports =  router;

