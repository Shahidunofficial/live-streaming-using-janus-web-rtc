const express = require('express');
const { registerTeacher, loginTeacher } = require('../controllers/TeacherAuthController'); // Assuming this is the correct path
const router = express.Router();

// Route for teacher registration
router.post('/register', registerTeacher);

// Route for teacher login
router.post('/login', loginTeacher);

module.exports = router;
