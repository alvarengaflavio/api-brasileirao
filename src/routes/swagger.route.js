const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const router = require('express').Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
