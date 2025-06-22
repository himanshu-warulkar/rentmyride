const mongoose = require('mongoose');
const Listing = require('../models/listing');
const listingsData = require('./data');
const { data: listingsDato } = require('./data.js'); // Adjust the import based on your data.js structure


const MONGO_URI = 'mongodb://localhost:27017/rentmyride';

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    await Listing.deleteMany({});
    console.log("🗑️ Cleared existing listings");

    await Listing.insertMany(listingsData);
    console.log("🚗 Listings from data.js inserted");

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    mongoose.connection.close();
  }
}

seedDatabase();
