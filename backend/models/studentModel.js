const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures that emails are unique in the collection
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Regex validation for email format
    },
    nic: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // NIC can either be 12 digits or 1 letter followed by 11 numbers
                return /^[A-Za-z]\d{11}$|^\d{12}$/.test(v);
            },
            message: props => `${props.value} is not a valid NIC!`
        }
    },
    age: {
        type: Number,
        required: true,
        min: [10, 'Age must be at least 10'], // You can set a minimum age if needed
    },
    birthDate: {
        type: Date,
        required: true,
    },
    contactnum: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Contact number should be 9 or 10 digits
                return /^\d{9,10}$/.test(v);
            },
            message: props => `${props.value} is not a valid contact number!`
        }
    }
});

module.exports = mongoose.model('Student', StudentSchema);
