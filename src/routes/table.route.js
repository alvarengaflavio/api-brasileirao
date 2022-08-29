const router = require('express').Router();
const tableController = require('../controllers/table.controller');
const {
  validadeTeamBody,
  validateID,
  validateBodyId,
} = require('../middlewares/table.middleware');

/*    GET_TABELA    */
router.get(
  '/table/brasileirao',
  tableController.findAllTeamsByPositionController,
);
/*    CREATE_TABELA    */
router.post(
  '/table/create',
  validateBodyId,
  tableController.createTableByIdController,
);

module.exports = router;
