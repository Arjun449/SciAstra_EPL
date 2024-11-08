// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Define route for user registration
router.post('/register', registerUser);

// Define route for user login
router.post('/login', loginUser);

module.exports = router;
