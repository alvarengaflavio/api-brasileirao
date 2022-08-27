const router = require('express').Router();
const tableController = require('../controllers/table.controller');

/*    GET_TABELA    */
router.get('/find_tabela', tableController.findAllTimesByPositionController);

module.exports = router;
