const express = require('express');
const bankController = require('../controllers/bank.controller');

const router = express.Router();

router.get('/:id', bankController.getById)
      .put('/:id', bankController.find,bankController.update);


module.exports = router;