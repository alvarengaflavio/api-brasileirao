const router = require('express').Router();
const timesController = require('../controllers/times.controller');

// GET_ALL
router.get('/find_times', timesController.findAllTimesControler);
// GET_BY_ID
router.get('/find_time/id', timesController.findByIdTimeController);

module.exports = router;
