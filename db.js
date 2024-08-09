const mongoose = require("mongoose");
const mongoURL = 'mongodb://localhost:27017/';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongo DB connection successful');
});

db.on('error', (err) => {
    console.log('Mongo DB connection failed:', err);
});

module.exports = mongoose;