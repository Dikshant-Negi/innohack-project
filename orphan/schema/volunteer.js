
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
})

const volunteer = mongoose.model('volunteer', volunteerSchema);

module.exports = volunteer;
