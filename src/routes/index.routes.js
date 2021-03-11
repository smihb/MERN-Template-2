const express = require('express');
const controller = require('../controllers/index.controller')
const router = express.Router();

router.get('/api', controller.read);

router.post('/api', controller.create);

router.put('/api/:id', controller.update);

router.delete('/api/:id', controller.delete);

module.exports = router;