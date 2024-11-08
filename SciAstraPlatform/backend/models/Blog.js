// backend/models/Blog.js
const db = require('../config/db');

const Blog = {
    create: (title, content, scheduled_publish_date, callback) => {
        const query = "INSERT INTO Blog (title, content, scheduled_publish_date) VALUES (?, ?, ?)";
        db.query(query, [title, content, scheduled_publish_date], callback);
    },

    getAll: (callback) => {
        const query = "SELECT * FROM Blog";
        db.query(query, callback);
    },

    getById: (id, callback) => {
        const query = "SELECT * FROM Blog WHERE id = ?";
        db.query(query, [id], callback);
    },

    update: (id, title, content, publish_date, callback) => {
        const query = "UPDATE Blog SET title = ?, content = ?, publish_date = ? WHERE id = ?";
        db.query(query, [title, content, publish_date, id], callback);
    },

    delete: (id, callback) => {
        const query = "DELETE FROM Blog WHERE id = ?";
        db.query(query, [id], callback);
    }
};

module.exports = Blog;
