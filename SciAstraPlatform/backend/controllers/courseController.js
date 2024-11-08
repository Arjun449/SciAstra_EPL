// backend/controllers/courseController.js
const db = require('../config/db');

// Function to get all courses
exports.getAllCourses = (req, res) => {
    const query = "SELECT * FROM Course";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Function to create a new course
exports.createCourse = (req, res) => {
    const { name, description } = req.body;  // Assuming the course has a name and description
    const query = "INSERT INTO Course (name, description) VALUES (?, ?)";

    db.query(query, [name, description], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Course created successfully", courseId: results.insertId });
    });
};

// Function to get a course by ID
exports.getCourseById = (req, res) => {
    const courseId = req.params.id;
    const query = "SELECT * FROM Course WHERE id = ?";

    db.query(query, [courseId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Course not found" });
        res.json(results[0]);
    });
};

// Function to update a course by ID
exports.updateCourse = (req, res) => {
    const courseId = req.params.id;
    const { name, description } = req.body;
    const query = "UPDATE Course SET name = ?, description = ? WHERE id = ?";

    db.query(query, [name, description, courseId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: "Course not found" });
        res.json({ message: "Course updated successfully" });
    });
};

// Function to delete a course by ID
exports.deleteCourse = (req, res) => {
    const courseId = req.params.id;
    const query = "DELETE FROM Course WHERE id = ?";

    db.query(query, [courseId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: "Course not found" });
        res.json({ message: "Course deleted successfully" });
    });
};
