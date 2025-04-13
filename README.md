# 🏗️ Walls and Gate Booking API

A backend API for managing bookings in the Walls and Gate reservation system. Built with Node.js, Express, MongoDB, and Prisma, this API handles booking operations, input validation, and data storage for wall and gate reservations.

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Prisma** – Next-generation ORM for MongoDB
- **validate.js** – Lightweight input validation
- **dotenv** – Environment variable loader
- **nodemon** (dev) – Monitors for changes and restarts server during development

## 📦 Features

- Create and retrieve bookings
- Input validation with validate.js
- Modular project structure with clean separation of concerns
- MongoDB integration using Prisma
- Global error handling middleware

## 📁 Project Structure

```
walls-and-gate-booking-api/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── constraints/   # Validation schemas
│   ├── controllers/   # Route handlers
│   ├── routes/        # API route definitions
│   ├── services/      # Business logic
│   ├── utils/         # Utility functions
│   └── main.js        # Entry point
├── .env               # Environment configuration
├── package.json       # Project metadata and scripts
└── README.md          # Project documentation
```

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/OmosowoeniAderonke/WALLS-AND-GATE-BOOKING-API.git
cd walls-and-gate-booking-api
```

### 2. Install Dependencies

```
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```
DATABASE_URL="your_mongodb_connection_string"
PORT=5000
```

### 4. Generate Prisma Client

```
npx prisma generate
```

### 5. Start the Development Server

```
npm run dev
```

## 📡 Example Endpoints

- **POST /api/bookings** – Create a new booking
- **GET /api/bookings** – Retrieve all bookings

## ✅ Validation

All incoming requests are validated using validate.js. If any required data is missing or invalid, the API responds with a clear error message and a 400 Bad Request status.