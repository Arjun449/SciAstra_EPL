// backend/models/Transaction.js
const db = require('../config/db');

const Transaction = {
    create: (user_id, course_id, callback) => {
        const query = "INSERT INTO Transaction (user_id, course_id) VALUES (?, ?)";
        db.query(query, [user_id, course_id], callback);
    },

    getAll: (callback) => {
        const query = "SELECT * FROM Transaction";
        db.query(query, callback);
    },

    getByUserId: (user_id, callback) => {
        const query = "SELECT * FROM Transaction WHERE user_id = ?";
        db.query(query, [user_id], callback);
    }
};

module.exports = Transaction;
