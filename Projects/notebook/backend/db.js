const mongoose = require('mongoose');
const mongooseURI = "mongodb://0.0.0.0:27017/inotebook?tls=false&readPreference=primary";

// Connect to MongoDB using Mongoose.
const connectToMongo = ()=>{
    mongoose.connect(mongooseURI).then(()=>{
        console.log("Connected to Mongo")}).catch((e)=>console.log(e.message));
    }



module.exports = connectToMongo;