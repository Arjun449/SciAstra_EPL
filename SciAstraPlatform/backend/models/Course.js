// backend/models/Course.js
const db = require('../config/db');

const Course = {
    create: (name, description, price, discount, callback) => {
        const query = "INSERT INTO Course (name, description, price, discount) VALUES (?, ?, ?, ?)";
        db.query(query, [name, description, price, discount], callback);
    },

    getAll: (callback) => {
        const query = "SELECT * FROM Course";
        db.query(query, callback);
    },

    getById: (id, callback) => {
        const query = "SELECT * FROM Course WHERE id = ?";
        db.query(query, [id], callback);
    },

    update: (id, name, description, price, discount, callback) => {
        const query = "UPDATE Course SET name = ?, description = ?, price = ?, discount = ? WHERE id = ?";
        db.query(query, [name, description, price, discount, id], callback);
    },

    delete: (id, callback) => {
        const query = "DELETE FROM Course WHERE id = ?";
        db.query(query, [id], callback);
    }
};

module.exports = Course;
