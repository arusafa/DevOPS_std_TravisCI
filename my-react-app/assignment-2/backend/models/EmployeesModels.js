const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email_id: {
        type: String,
        required: true,
        unique: true,
        maxLength: 50
    }
});

const Employee = mongoose.model("employee",employeeSchema);
module.exports = Employee;