const db = require('../config/db');

exports.getAllBlogs = (req, res) => {
    const query = "SELECT * FROM Blog";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createBlog = (req, res) => {
    const { title, content, scheduled_publish_date } = req.body;
    const query = "INSERT INTO Blog (title, content, scheduled_publish_date) VALUES (?, ?, ?)";
    db.query(query, [title, content, scheduled_publish_date], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Blog created successfully", id: result.insertId });
    });
};
