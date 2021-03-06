const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', userController.get)
      .get('/:id', userController.find,userController.getById)
      .post('/', userController.post)
      .post('/authentication', userController.authentication)
      .put('/:id', userController.find,userController.put);


module.exports = router;