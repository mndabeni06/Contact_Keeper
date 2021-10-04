const mongoose =  require('mongoose');
const config = require ('config');
const db = config.get('mongoURI');


//Parameter to align with the version of new mangoos
const connectDB =  async () => {
    try {
         await mongoose.connect (db, {
            useNewUrlParser: true,
            // userCreateIndex: true,
            // userFindAndModify: false
        });

        console.log('MongoDb Connected....');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
         
    }
};

module.exports = connectDB;
