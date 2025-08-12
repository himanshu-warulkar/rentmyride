# Rent My Ride

Rent My Ride is a full-stack web application for listing, searching, and renting vehicles. Built with Node.js, Express, MongoDB (Mongoose), and EJS, it allows users to view available vehicles, create new listings, and search/filter listings by various criteria.

## Features

- View all vehicle listings
- Create, edit, and delete listings
- Search and filter listings by location, price, fuel type, transmission, vehicle type, seats, etc.
- View detailed information for each listing
- Responsive UI with Tailwind CSS

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Frontend:** EJS templates, Tailwind CSS
- **Other:** Font Awesome, method-override

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/rentmyride.git
   cd rentmyride
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - Make sure MongoDB is running locally, or update the `MONGO_URI` in `app.js` to your MongoDB Atlas connection string.

4. **Seed the database (optional):**
   ```bash
   node init/seed.js
   ```

5. **Start the server:**
   ```bash
   npm start
   ```
   The app will run on [http://localhost:8080](http://localhost:8080).

## Project Structure

```
MajorWebDevProject/
├── app.js
├── models/
│   └── listing.js
├── views/
│   └── listings/
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
├── public/
│   └── (static assets)
├── init/
│   ├── data.js
│   └── seed.js
├── package.json
└── README.md
```

## Deployment

- **Local:** Follow the steps above.
- **Production:** Deploy on platforms that support Node.js (e.g., Render, Railway, Heroku, Vercel with API routes).
- **Note:** Netlify only supports static sites and cannot run Express/MongoDB apps.

## Environment Variables

You can use a `.env` file for sensitive data:

```
MONGO_URI=your_mongodb_connection_string
PORT=8080
```

## License

MIT

---

**Made with ❤️
## /listing page
![image](https://github.com/user-attachments/assets/52c77f95-4449-45f1-b701-00b05d575378)
![image](https://github.com/user-attachments/assets/13aae30d-313d-408b-b0f8-8152fd1d0fb5)

## updated Listing page index route
![image](https://github.com/user-attachments/assets/f7417254-b55a-41d9-b37e-27e6875e5100)

## show route images
![image](https://github.com/user-attachments/assets/1db7b9d6-a0eb-4b01-b2d4-39c8edc06703)


## create new listing
![image](https://github.com/user-attachments/assets/4784c2ad-753f-468f-85cc-20e7779eedde)

## HomePage V1
![image](https://github.com/user-attachments/assets/a6275b3a-4656-48cf-9826-92cd8ba9ba53)

## Updated New Listing Page 
![image](https://github.com/user-attachments/assets/2f2f66a4-4b76-4868-8db2-989e390feae6)


## show.ejs V2
![image](https://github.com/user-attachments/assets/94116652-4f9f-40e5-a986-fed71f7bae67)

## edit.ejs V2
![image](https://github.com/user-attachments/assets/518054ad-290a-43bc-b4e7-7f5ab5c2b6a7)
