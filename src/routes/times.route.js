const router = require('express').Router();
const timesController = require('../controllers/times.controller');

// GET_ALL
router.get('/find_times', timesController.findAllTimesControler);
// GET_BY_ID
router.get('/find_time/:id', timesController.findByIdTimeController);
// GET_BY_POSITION
router.get('/find_tabela/:pos', timesController.findByPositionTimeController);

module.exports = router;
