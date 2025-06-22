const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Listing', listingSchema);

/*const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    price: Number,
    location: String,
    image: {
        type: String,
        set: (v) =>
            !v || v.trim() === ""
                ? "https://sdmntpritalynorth.oaiusercontent.com/files/00000000-b32c-6246-862d-31e884dc6942/raw?se=2025-06-22T08%3A26%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=8fd42ef0-dd7d-52b0-9729-69c96bae7c71&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-21T16%3A26%3A16Z&ske=2025-06-22T16%3A26%3A16Z&sks=b&skv=2024-08-04&sig=AS%2B6EvZ6o7iTO6Jb45eUHW8z/sf2/BVzbD3G95lXYmw%3D"
                : v,
        default: "https://sdmntpritalynorth.oaiusercontent.com/files/00000000-b32c-6246-862d-31e884dc6942/raw?se=2025-06-22T08%3A26%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=8fd42ef0-dd7d-52b0-9729-69c96bae7c71&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-21T16%3A26%3A16Z&ske=2025-06-22T16%3A26%3A16Z&sks=b&skv=2024-08-04&sig=AS%2B6EvZ6o7iTO6Jb45eUHW8z/sf2/BVzbD3G95lXYmw%3D"
    },
    
    color: {
        type: String,
        enum: ['Red', 'Blue', 'Green', 'Black', 'White', 'Silver', 'Yellow', 'Orange', 'Purple', 'Gray'],
        required: false
    },
    year: {
        type: Number,
        min: 1886,
        validate: {
            validator: function (v) {
                return v <= new Date().getFullYear();
            },
            message: props => `${props.value} is not a valid year`
        }
    },
    make: {
        type: String,
        required: false,
        maxlength: 50 // Limit the length of the make string
    },
    model: {
        type: String,
        required: false,
        maxlength: 50 // Limit the length of the model string
    },
    vehicleType: {
        type: String,
        enum: ['Car', 'Truck', 'Motorcycle', 'Van', 'SUV', 'Bus', 'Bicycle'],
        required: false
    },
    fuelEfficiency: {
        type: Number,
        required: false,
        min: 0 // Fuel efficiency cannot be negative
    },   
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: false
        }
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false // Owner is not required for the listing to be crea
    },
    cubicCapacity: {
        type: Number,
        required: false
    },
    fuelType: {
        type: String,
        enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
        required: false
    },
    transmission: {
        type: String,
        enum: ['Manual', 'Automatic'],
        required: false
    },
    seats: {
        type: Number,
        required: false,
        min: 1,
        max: 9 // Assuming a maximum of 9 seats for a vehicle
    },
    mileage: {
        type: Number,
        required: false,
        min: 0 // Mileage cannot be negative
    },
    availability: {
        type: Boolean,
        default: true // Listing is available by default
    },
    reviews: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        rating: {
            type: Number,
            required: false,
            min: 1,
            max: 5 // Rating between 1 and 5
        },
        comment: {
            type: String,
            required: true,
            maxlength: 500 // Limit comment length
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});        

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
*/
