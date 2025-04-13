⸻

WALLS-AND-GATE-BOOKING-API

This is the backend API for a booking system called Walls and Gate, built with Node.js, Express, MongoDB, and Prisma. The API handles bookings, validations, and data storage for wall and gate reservation requests.

⸻

🛠 Tech Stack
• Node.js – Runtime environment
• Express.js – Server framework
• MongoDB – Database
• Prisma – ORM for MongoDB
• validate.js – Input validation
• dotenv – Environment variable management
• nodemon (dev) – Auto-restarting during development

⸻

📦 Features
• Booking creation and retrieval
• Validations with validate.js
• MongoDB integration using Prisma
• Clean project structure with modular routing
• Error handling middleware

⸻

📁 Project Structure

walls-and-gate-booking-api/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── services/
│ ├── constraints/
│ ├── utils/
│ ├── main.js
├── .env
├── package.json
└── README.md

⸻

🚀 Getting Started

1. Clone the repository

git clone https://github.com/OmosowoeniAderonke/WALLS-AND-GATE-BOOKING-API.git
cd walls-and-gate-booking-api

2. Install dependencies

npm install

3. Setup your .env file

DATABASE_URL="your_mongodb_connection_string"
PORT=5000

4. Generate Prisma client

npx prisma generate

5. Start the development server

npm run dev

⸻

🧪 Example Endpoints
• POST /api/bookings – Create a new booking
• GET /api/bookings – Retrieve all bookings

⸻

✅ Validation

All incoming requests are validated using validate.js. If the input data is invalid.

⸻
