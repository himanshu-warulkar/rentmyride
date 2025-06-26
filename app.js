const express = require('express');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');
const app = express();
const PORT = 8080;
const MONGO_URI = 'mongodb://localhost:27017/rentmyride';
const methodOverride = require('method-override');

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
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


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


app.use(express.urlencoded({ extended: true }));

app.post('/listings', async (req, res) => {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.redirect("/listings");
});

// Edit route
app.get('/listings/:id/edit', async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("listings/edit.ejs", { listing });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
}); 

// Update route
app.put('/listings/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
    if (!updatedListing) {
      return res.status(404).send("Listing not found");
    }
    res.redirect(`/listings/${updatedListing._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
});

// Delete route
app.delete('/listings/:id', async (req, res) => {
  const {id } = req.params; // Correctly access the id from req.params
  try {
    console.log("Deleting listing with ID:", id); // Debugging line
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      return res.status(404).send("Listing not found");
    }
    res.redirect('/listings');  
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");  
  }
});

// 404 route
app.use((req, res) => {
  res.status(404).send("Page not found");
}); 

// Review route
app.post('/listings/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { review } = req.body; // Assuming review is a string
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    listing.reviews.push(review);
    await listing.save();
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
});