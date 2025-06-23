const express = require('express');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');
const app = express();
const PORT = 8080;
const MONGO_URI = 'mongodb://localhost:27017/rentmyride';

main()
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((error) => {
        console.log(error);
    });
async function main() {
    await mongoose.connect(MONGO_URI);
}

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.send('Hello, this is root!');
});

app.get('/testListing', async (req, res) => {
    try {
      const exists = await Listing.findOne({ title: "Test Vehicle" });
      if (exists) {
        return res.send("Test listing already exists.");
      }
  
      const sampleListing = new Listing({
        title: "Test Vehicle",
        image: "https://your-image-link",
        price: 50,
        description: "This is a test vehicle for RentMyRide."
      });
  
      await sampleListing.save();
      res.send("Sample listing created successfully.");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error.");
    }
  });
  

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    await Listing.deleteMany({ title: "Test Vehicle" });
    res.render("listings/index.ejs", { allListings });
});

//new route
app.get('/listings/new', (req, res) => {
  res.render("listings/new.ejs");
});

//show route
app.get('/listings/:id', async (req, res) => {
  const { id } = req.params; // Correctly access the id from req.params
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
});



