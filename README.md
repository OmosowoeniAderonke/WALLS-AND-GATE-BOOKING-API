# 🏗️ Walls and Gate Booking API

A backend API for managing bookings in the Walls and Gate reservation system. Built with Node.js, Express, MongoDB, and Prisma, this API handles booking operations, input validation, and data storage for wall and gate reservations.

## 🛠️ Tech Stack

-   **Node.js** – JavaScript runtime environment
-   **Express.js** – Web framework for Node.js
-   **MongoDB** – NoSQL database
-   **Prisma** – Next-generation ORM for MongoDB
-   **validate.js** – Lightweight input validation
-   **dotenv** – Environment variable loader
-   **nodemon** (dev) – Monitors for changes and restarts server during development

## 📦 Features

-   Create and retrieve bookings
-   Input validation with validate.js
-   Modular project structure with clean separation of concerns
-   MongoDB integration using Prisma
-   Global error handling middleware

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

## 📡 API Documentation

### Endpoints

#### Create a Booking

-   **URL:** `/api/bookings`
-   **Method:** `POST`
-   **Request Body:**

```json
{
	"fullName": "test",
	"email": "test@gmail.com",
	"department": "INNOVATIVE_TECHNOLOGY_SOLUTIONS",
	"preferredDate": "2024-12-22",
	"phoneNumber": "988819121",
	"message": "I need it" // optional
}
```

#### Get Bookings

-   **URL:** `/api/bookings`
-   **Method:** `GET`
-   **Query Parameters:**
    -   `page` (required): Page number for pagination (e.g., `1`)
    -   `size` (required): Number of items per page (e.g., `10`)
    -   `term` (optional): Search term
    -   `department` (optional): Filter by department
    -   `startDate` (optional): Filter bookings from this date
    -   `endDate` (optional): Filter bookings to this date

**Example Request:**

```
GET localhost:5000/api/bookings?page=1&size=10&term=ehre&department=INNOVATIVE_TECHNOLOGY_SOLUTIONS&startDate=2024-01-01&endDate=2024-12-31
```

## ✅ Validation

All incoming requests are validated using validate.js. If any required data is missing or invalid, the API responds with a clear error message and a 400 Bad Request status.
