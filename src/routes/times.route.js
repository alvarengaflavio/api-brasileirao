const router = require('express').Router();
const timesController = require('../controllers/times.controller');

/* GET_ALL */
router.get('/find_times', timesController.findAllTimesControler);
/* GET_BY_ID */
router.get('/find_time/:id', timesController.findByIdTimeController);
/* GET_TABELA */
router.get('/find_tabela', timesController.findAllTimesByPositionController);
/* POST_TIME */
router.post('/create', timesController.createTimeController);
/* UPDATE_BY_ID */
router.put('/update/:id', timesController.updateTimeController);
/* DELETE_BY_ID */
router.delete('/delete/:id', timesController.deleteTimeController);

module.exports = router;
