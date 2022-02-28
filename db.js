const mongoose = require('mongoose');
const db = "mongodb+srv://rootUser:uXi3CKqmnbbnQjdl@sss.x10cv.mongodb.net/psf?retryWrites=true&w=majority";
console.log("db: ", db);
const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch(err) {
        console.log("Error");
        console.error(err.message);
        process.exit();
    }
    
};
module.exports = connectDB;
