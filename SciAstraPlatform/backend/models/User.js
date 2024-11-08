// backend/models/User.js
const db = require('../config/db');

const User = {
    create: (email, callback) => {
        const query = "INSERT INTO User (email) VALUES (?)";
        db.query(query, [email], callback);
    },

    findByEmail: (email, callback) => {
        const query = "SELECT * FROM User WHERE email = ?";
        db.query(query, [email], callback);
    },

    updateOTP: (email, otp, otp_expiration, callback) => {
        const query = "UPDATE User SET otp = ?, otp_expiration = ? WHERE email = ?";
        db.query(query, [otp, otp_expiration, email], callback);
    },

    verifyOTP: (email, otp, callback) => {
        const query = "SELECT * FROM User WHERE email = ? AND otp = ? AND otp_expiration > NOW()";
        db.query(query, [email, otp], callback);
    }
};

module.exports = User;
