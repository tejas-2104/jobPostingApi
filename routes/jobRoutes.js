const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/jobs/create', jobController.createJob);
router.put('/jobs/update/:id', jobController.updateJob);
router.delete('/jobs/delete/:id', jobController.deleteJob);
router.get('/jobs', jobController.getAllJobs);

module.exports = router;
