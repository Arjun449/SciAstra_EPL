const express = require('express');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');
dotenv.config();
const cors = require('cors');

const app = express(); // Initialize app before using middleware

// CORS configuration
app.use(cors({
    origin: 'http://127.0.0.1:3000', // Allow requests from this frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies or authentication tokens to be sent
}));

// Body parser middleware (for parsing JSON)
app.use(express.json());

// Define your routes
app.use('/blogs', blogRoutes);
app.use('/courses', courseRoutes);
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
