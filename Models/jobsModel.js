const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobsSchema = new Schema({
    position: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true,
    },
    job_pipeline: {
        type: String,
        requied: true,
    },
    add_location: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    min_salary: {
        type: Number,
        required: true,
    },
    max_salary: {
        type: Number,
        required: true,
    },
    skills_required: {
        type: String,
        required: true,
    },
    intern_responsibilites: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('jobs', JobsSchema);