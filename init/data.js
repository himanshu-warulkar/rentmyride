/*const sampleListings = [
  {
      title: 'Car 1',
      image: 'car1.jpg',
      price: 100,
      description: 'A great car for rent',
  },
  {
      title: 'Car 2',
      image: 'car2.jpg',
      price: 150,
      description: 'Another great car for rent',
  },
];*/
//module.exports = sampleListings;

const sampleListings = [
  {
    id: 1,
    title: "Wagon R",
    description: "A compact car perfect for city driving.",
    price: 3000,
    location: "Kothrud, Pune",
    image: "https://images.unsplash.com/photo-1699163104448-9229093992d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Fnb25SfGVufDB8fDB8fHww",
    cubicCapacity: 1200,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: 12000,
    vehicleType: "Car",
    fuelEfficiency: 25, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  },
  {
    id: 2,
    title: "Tata Punch",
    description: "A luxury SUV with all the amenities.",
    price: 5000, 
    location: "Bavdhan, Pune",
    image: "https://images.unsplash.com/photo-1697355931232-ff710c377c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0YSUyMHB1bmNofGVufDB8fDB8fHww",
    cubicCapacity: 2000,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    mileage: 8000,
    vehicleType: "SUV",
    fuelEfficiency: 15, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  },
  {
    id: 3,
    title: "Royal Enfield Classic 350",
    description: "A classic motorcycle with a vintage look.",
    price: 1500,
    location: "Katraj, Pune",
    image: "https://images.unsplash.com/photo-1667711407301-900469b4eb30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm95YWwlMjBlbmZpZWxkJTIwY2xhc3NpYyUyMDM1MHxlbnwwfHwwfHx8MA%3D%3D",
    cubicCapacity: 350,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 2,
    mileage: 3000,
    vehicleType: "Motorcycle",
    fuelEfficiency: 35, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  },
  {
    id: 4,
    title: "Mahindra Bolero",
    description: "A rugged SUV for off-road adventures.",
    price: 4000,
    location: "Hadapsar, Pune",
    image: "https://images.unsplash.com/photo-1740937560536-a0d922aa7d3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFoaW5kcmElMjBCb2xlcm8lMjBjYXJ8ZW58MHx8MHx8fDA%3D",
    cubicCapacity: 2500,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 7,
    mileage: 10000,
    vehicleType: "SUV",
    fuelEfficiency: 18, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates ( longitude, latitude)
    }
  },
  {
    id: 5,
    title: "Yamaha RX100",
    description: "A legendary motorcycle known for its performance.",
    price: 1200,
    location: "Viman Nagar, Pune",
    image: "https://images.unsplash.com/photo-1627911033433-59575df8b7dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFtYWhhJTIwcngxMDB8ZW58MHx8MHx8fDA%3D",
    cubicCapacity: 98,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 2,
    mileage: 2000,
    vehicleType: "Motorcycle",
    fuelEfficiency: 40, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  },
  {
    id: 6,
    title: "Honda City",
    description: "A spacious sedan with a comfortable interior.",
    price: 3500,
    location: "Kalyani Nagar, Pune",
    image: "https://images.unsplash.com/photo-1708402087179-6becaacc1c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9uZGElMjBjaXR5JTIwY2FyfGVufDB8fDB8fHww",
    cubicCapacity: 1500,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: 9000,
    vehicleType: "Car",
    fuelEfficiency: 20, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  },
  {
    id: 7,
    title: "Yezdi Roadking",
    description: "A classic motorcycle with a unique design.",
    price: 1800,
    location: "Baner, Pune",
    image: "https://images.unsplash.com/photo-1591076816073-70d60fb34a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWV6ZGklMjByb2Fka2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    cubicCapacity: 250,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 2,
    mileage: 2500,
    vehicleType: "Motorcycle",
    fuelEfficiency: 30, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  },
  {
    id: 8,
    title: "Royal Enfield GT 650",
    description: "A modern classic motorcycle with a retro design.",
    price: 2500,
    location: "Aundh, Pune",
    image: "https://images.unsplash.com/photo-1662788019557-443ef532cccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3QlMjA2NTB8ZW58MHx8MHx8fDA%3D",
    cubicCapacity: 648,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 2,
    mileage: 4000,
    vehicleType: "Motorcycle",
    fuelEfficiency: 25, // km/l
    coordinates: {
        type: "Point", 
        coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)   
    }
  },
  {
    id: 9,
    title: "Mahendra Scorpio",
    description: "A robust SUV with excellent off-road capabilities.",
    price: 6000,
    location: "Wakad, Pune",
    image: "https://plus.unsplash.com/premium_photo-1748909098966-1b941030e4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFoZW5kcmElMjBzY29ycGlvJTIwY2FyfGVufDB8fDB8fHww",
    cubicCapacity: 2400,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 7,
    mileage: 12000,
    vehicleType: "MPV",
    fuelEfficiency: 15, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  },
  {
    id: 10,
    title: "Mazda CX-5",
    description: "A stylish SUV with advanced features.",
    price: 7000,
    location: "Kothrud, Pune",  
    image: "https://images.unsplash.com/photo-1613565681173-f3dd7517c53b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFoaW5kcmElMjBCb2xlcm8lMjBjYXJ8ZW58MHx8MHx8fDA%3D",
    cubicCapacity: 3000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    mileage: 15000,
    vehicleType: "SUV",
    fuelEfficiency: 12, // km/l
    coordinates: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
    }
  }
]; 

module.exports = sampleListings;
  
