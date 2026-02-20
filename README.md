# RentMyRide 🚗🏍️  
A modern vehicle rental platform built with **Next.js App Router**.

---

## 🔗 Live Demo
👉 https://rentmyride.vercel.app

---

## 📌 About the Project

**RentMyRide** is a vehicle rental web application where users can browse available bikes and cars and view detailed information for each vehicle.

This project was built to gain **hands-on experience with Next.js App Router**, dynamic routing, and server-side rendering, while following production-ready best practices.

The application currently uses **mock data** and is structured in a way that allows easy future integration with a real backend (database, authentication, bookings).

---

## ✨ Features

- Home page with clear call-to-action
- Browse available vehicles
- Dynamic vehicle detail pages using route parameters
- Graceful handling of invalid routes (Vehicle not found)
- Server Components with direct data access
- Route-level loading and error handling
- Responsive UI built with Tailwind CSS
- Deployed on Vercel

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript
- **Deployment:** Vercel
- **Data Source:** Mock data (local)

---

## 📂 Project Structure

```txt
app/
├── api/
│   └── vehicles/
│       └── route.js        # API route (mock data)
├── vehicles/
│   ├── page.js             # Vehicles listing page
│   └── [id]/
│       └── page.js         # Dynamic vehicle details page
├── loading.js              # Global loading UI
├── error.js                # Global error boundary
├── layout.js               # App layout
├── page.js                 # Home page
lib/
└── data.js                 # Mock vehicle data
components/
└── Navbar.js               # Navigation bar


## THe Main Page:
<img width="1919" height="998" alt="image" src="https://github.com/user-attachments/assets/ce04a07d-f7f9-4bfc-88d9-3f7a110cd5d1" />

## The Login Page:
<img width="1920" height="1003" alt="image" src="https://github.com/user-attachments/assets/e258ac10-2d98-49d4-b285-f5ac634c5fc3" />


## The Vehicle Page:
<img width="1920" height="999" alt="image" src="https://github.com/user-attachments/assets/80d61249-5278-4353-b9fc-a49389f1b58a" />


