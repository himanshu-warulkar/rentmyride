const mongoose = require('mongoose');
const sampleListings = require('./data.js'); // Import the array directly
const Listing = require('../models/listing.js');

const MONGO_URI = 'mongodb://localhost:27017/rentmyride';

main()
    .then(async () => {
        console.log('Connected to MongoDB successfully');
        await Listing.deleteMany({}); // Clear existing listings
        await Listing.insertMany(sampleListings); // Insert sample listings
        console.log('Sample listings inserted successfully');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB or inserting sample listings:', error);
        mongoose.connection.close();
    });

async function main() {
    await mongoose.connect(MONGO_URI);
}


const initDB = async () => {
    await Listing.deleteMany({}); // Clear existing listings
    await Listing.insertMany(initData.data); // Insert sample listings
    console.log('Database initialized with sample listings');
};