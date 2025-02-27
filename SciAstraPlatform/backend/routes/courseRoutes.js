// backend/routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const { getAllCourses, createCourse, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');

// Route to get all courses
router.get('/', getAllCourses);

// Route to create a new course
router.post('/', createCourse);

// Route to get a course by ID
router.get('/:id', getCourseById);

// Route to update a course by ID
router.put('/:id', updateCourse);

// Route to delete a course by ID
router.delete('/:id', deleteCourse);

module.exports = router;
