const mongoose = require("mongoose");
const Listing = require("../models/listing"); // adjust path if needed
const sampleListings = require("./data");     // no need for `.data`, just export array directly

const MONGO_URI = "mongodb://localhost:27017/rentmyride";

main()
  .then(() => {
    console.log("✅ MongoDB connected");
    return seedDatabase();
  })
  .catch((err) => {
    console.error("❌ Connection failed:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URI);
}

async function seedDatabase() {
  try {
    await Listing.deleteMany({});
    console.log("🗑️ Cleared existing listings");

    await Listing.insertMany(sampleListings);
    console.log("✅ Seeded sample listings successfully");

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  }
}
