const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'Open' },
    assignedTo: { type: String },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    createdBy: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Bug', bugSchema);
