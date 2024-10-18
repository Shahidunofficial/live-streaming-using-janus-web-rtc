const express = require('express');
const {
    registerStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
} = require('../controllers/StudentAuthController'); // Assuming this is the correct path
const router = express.Router();

// Route to register a new student
router.post('/', registerStudent);

// Route to get all students
router.get('/', getAllStudents);

// Route to get a specific student by ID
router.get('/studentId', getStudentById);

// Route to update student details
router.put('/studentId', updateStudent);

module.exports = router;
