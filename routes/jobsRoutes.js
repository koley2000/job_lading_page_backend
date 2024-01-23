const express = require('express');
const jobsModel = require('../Models/jobsModel');
const router = express.Router();
const Jobs = require('../Models/jobsModel')

//Route 1: Get all the jobs
router.get('/fetchalljobs', async (req, res) => {
    try {
        const data = await jobsModel.find({});
        res.json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//Route 2: Add a new Job
router.post('/addjob', async (req, res) => {
    try {
        const {
            position, company_name, job_pipeline,
            add_location, min_salary, max_salary, skills_required,
            intern_responsibilites
        } = req.body;

        const job = new Jobs({
            position, company_name, job_pipeline,
            add_location, min_salary, max_salary, skills_required,
            intern_responsibilites
        });
        const savedJob = await job.save();
        res.json(savedJob);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//Route 3: Update the job
router.put('/updatejob/:id', async (req, res) => {
    try {
        const { id, ...rest } = req.body;
        let job = await Jobs.findById(req.params.id);
        if (!job) return res.status(404).send('Not Found');

        job = await Jobs.updateOne({ _id: req.params.id }, { $set: rest }, { new: true })
        res.json({ "Sucess": "Job has been Updated" })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//Route 3: Delete the job
router.delete('/deletejob/:id', async (req, res) => {
    try {
        let job = await Jobs.findById(req.params.id);
        if (!job) { return res.status(504).send('Not Found') };

        job = await Jobs.findByIdAndDelete(req.params.id);
        res.json({ "Sucess": "Job has been deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;