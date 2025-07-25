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

// Search route - GET request to show search form
app.get('/listings/search', async (req, res) => {
  try {
    console.log('Search route accessed with query:', req.query);
    const { q, location, minPrice, maxPrice, fuelType, transmission, vehicleType, seats } = req.query;

    let query = {};
    let allListings = [];

    // If there are search parameters, perform the search
    if (q || location || minPrice || maxPrice || fuelType || transmission || vehicleType || seats) {
      // Text search in title and description
      if (q) {
        query.$or = [
          { title: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } }
        ];
      }

      // Location search
      if (location) {
        query.location = { $regex: location, $options: 'i' };
      }

      // Price range filter
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = parseFloat(minPrice);
        if (maxPrice) query.price.$lte = parseFloat(maxPrice);
      }

      // Fuel type filter
      if (fuelType && fuelType !== 'all') {
        query.fuelType = fuelType;
      }

      // Transmission filter
      if (transmission && transmission !== 'all') {
        query.transmission = transmission;
      }

      // Vehicle type filter
      if (vehicleType && vehicleType !== 'all') {
        query.vehicleType = vehicleType;
      }

      // Seats filter
      if (seats && seats !== 'all') {
        query.seats = parseInt(seats);
      }

      allListings = await Listing.find(query);
    }

    res.render("listings/search.ejs", {
      allListings: allListings || [],
      searchParams: req.query || {}
    });
  } catch (err) {
    console.error('Search route error:', err);
    res.status(500).send("Server error.");
  }
});

// Filter route - GET request to show filter form
app.get('/listings/filter', async (req, res) => {
  try {
    const { fuelType, transmission, vehicleType, minPrice, maxPrice, seats, availability } = req.query;

    let query = {};
    let allListings = [];

    // If there are filter parameters, perform the filtering
    if (fuelType || transmission || vehicleType || minPrice || maxPrice || seats || availability) {
      // Fuel type filter
      if (fuelType && fuelType !== 'all') {
        query.fuelType = fuelType;
      }

      // Transmission filter
      if (transmission && transmission !== 'all') {
        query.transmission = transmission;
      }

      // Vehicle type filter
      if (vehicleType && vehicleType !== 'all') {
        query.vehicleType = vehicleType;
      }

      // Price range filter
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = parseFloat(minPrice);
        if (maxPrice) query.price.$lte = parseFloat(maxPrice);
      }

      // Seats filter
      if (seats && seats !== 'all') {
        query.seats = parseInt(seats);
      }

      // Availability filter
      if (availability && availability !== 'all') {
        query.availability = availability === 'true';
      }

      allListings = await Listing.find(query);
    }

    res.render("listings/filter.ejs", {
      allListings: allListings || [],
      filterParams: req.query || {}
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
});

// Sort route - GET request to show sorted listings
app.get('/listings/sort', async (req, res) => {
  try {
    const { sortBy, order } = req.query;

    let allListings = [];
    let sortOptions = {};

    // Default sort by creation date (newest first)
    if (!sortBy) {
      sortOptions = { createdAt: -1 };
    } else {
      const sortOrder = order === 'asc' ? 1 : -1;

      switch (sortBy) {
        case 'price':
          sortOptions = { price: sortOrder };
          break;
        case 'title':
          sortOptions = { title: sortOrder };
          break;
        case 'createdAt':
          sortOptions = { createdAt: sortOrder };
          break;
        case 'seats':
          sortOptions = { seats: sortOrder };
          break;
        case 'mileage':
          sortOptions = { mileage: sortOrder };
          break;
        default:
          sortOptions = { createdAt: -1 };
      }
    }

    allListings = await Listing.find({}).sort(sortOptions);

    res.render("listings/sort.ejs", {
      allListings: allListings || [],
      sortParams: req.query || {}
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
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



// Combined search, filter, and sort route
app.get('/listings/advanced', async (req, res) => {
  try {
    const {
      q, location, minPrice, maxPrice, fuelType, transmission,
      vehicleType, seats, availability, sortBy, order
    } = req.query;

    let query = {};
    let sortOptions = {};

    // Build search query
    if (q || location || minPrice || maxPrice || fuelType || transmission || vehicleType || seats || availability) {
      // Text search in title and description
      if (q) {
        query.$or = [
          { title: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } }
        ];
      }

      // Location search
      if (location) {
        query.location = { $regex: location, $options: 'i' };
      }

      // Price range filter
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = parseFloat(minPrice);
        if (maxPrice) query.price.$lte = parseFloat(maxPrice);
      }

      // Fuel type filter
      if (fuelType && fuelType !== 'all') {
        query.fuelType = fuelType;
      }

      // Transmission filter
      if (transmission && transmission !== 'all') {
        query.transmission = transmission;
      }

      // Vehicle type filter
      if (vehicleType && vehicleType !== 'all') {
        query.vehicleType = vehicleType;
      }

      // Seats filter
      if (seats && seats !== 'all') {
        query.seats = parseInt(seats);
      }

      // Availability filter
      if (availability && availability !== 'all') {
        query.availability = availability === 'true';
      }
    }

    // Build sort options
    if (!sortBy) {
      sortOptions = { createdAt: -1 };
    } else {
      const sortOrder = order === 'asc' ? 1 : -1;

      switch (sortBy) {
        case 'price':
          sortOptions = { price: sortOrder };
          break;
        case 'title':
          sortOptions = { title: sortOrder };
          break;
        case 'createdAt':
          sortOptions = { createdAt: sortOrder };
          break;
        case 'seats':
          sortOptions = { seats: sortOrder };
          break;
        case 'mileage':
          sortOptions = { mileage: sortOrder };
          break;
        default:
          sortOptions = { createdAt: -1 };
      }
    }

    const allListings = await Listing.find(query).sort(sortOptions);

    res.render("listings/advanced.ejs", {
      allListings,
      searchParams: req.query
    });
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