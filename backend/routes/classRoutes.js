const express = require('express');
const {
    createClass,
    editClass,
    enrollStudent,
    getAllClasses,
    getClassDetails,
} = require('../controllers/Classcontroller'); // Assuming this is the correct path
const router = express.Router();

// Route to create a new class
router.post('/', createClass);

// Route to edit an existing class
router.put('/:classId', editClass);

// Route to enroll a student in a class
router.post('/enroll', enrollStudent);

// Route to get all classes
router.get('/', getAllClasses);

// Route to get details of a specific class
router.get('/:classId', getClassDetails);

module.exports = router;
