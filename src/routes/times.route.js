const router = require('express').Router();
const timesController = require('../controllers/times.controller');
const {
  validateID,
  validateBodyObject,
} = require('../middlewares/team.middleware');

/*    GET_ALL       */
router.get('/find_times', timesController.findAllTimesControler);
/*    GET_BY_ID     */
router.get(
  '/find_time/:id',
  validateID,
  timesController.findByIdTimeController,
);
/*    GET_TABELA    */
router.get('/find_tabela', timesController.findAllTimesByPositionController);
/*    POST_TIME     */
router.post(
  '/create',
  validateBodyObject,
  timesController.createTimeController,
);
/*    UPDATE_BY_ID  */
router.put(
  '/update/:id',
  validateBodyObject,
  validateID,
  timesController.updateTimeController,
);
/*    DELETE_BY_ID  */
router.delete('/delete/:id', validateID, timesController.deleteTimeController);

module.exports = router;
