// backend/controllers/authController.js
const db = require('../config/db');

// Function to handle user registration
exports.registerUser = (req, res) => {
    const { username, password, email } = req.body;  // Ensure that username, password, and email fields are included in request
    const query = "INSERT INTO Users (username, password, email) VALUES (?, ?, ?)";

    db.query(query, [username, password, email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "User registered successfully", userId: results.insertId });
    });
};

// Function to handle user login
exports.loginUser = (req, res) => {
    const { email, password } = req.body;  // Assuming login with email and password
    const query = "SELECT * FROM Users WHERE email = ? AND password = ?";

    db.query(query, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.json({ message: "User logged in successfully", user: results[0] });
    });
};
