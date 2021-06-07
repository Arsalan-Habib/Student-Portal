const mongoose = require("mongoose");

// connecting to the db
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // required options by mongoose docs
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message} `);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
};
