const mongoose = require('mongoose');

// Define the schema for the class
const ClassSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',  // Assuming there is a Teacher model
        required: true,
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student', // Referencing the Student model
        }
    ],
    subject: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        required: true,
        enum: [6, 7, 8, 9, 10, 11], // Only allows grades between 6 and 11
        message: 'Grade must be between 6 and 11',
    },
    schedule: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Class', ClassSchema);
