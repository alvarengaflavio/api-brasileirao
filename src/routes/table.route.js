const router = require('express').Router();
const tableController = require('../controllers/table.controller');
const {
  validadeTeamBody,
  validateID,
  validateBodyId,
} = require('../middlewares/table.middleware');

/*    GET_TABELA    */
router.get('/find', tableController.findAllTeamsByPositionController);
/*    CREATE_TABELA    */
router.post(
  '/create',
  validateBodyId,
  tableController.createTableByIdController,
);

module.exports = router;
