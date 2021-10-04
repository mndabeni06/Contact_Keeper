const express = require('express');
const router = express.Router();
const connectDB = require ('./config/db');
 

//Initializing express
const app = express();

//Init Middleware
app.use(express.json({
    extended: false
}));


//Connect Database
connectDB();
 

//Server port to listen on
const  PORT  = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Adding a first route
app.get('/', (req, res) => 
    res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

module.exports =  router;
