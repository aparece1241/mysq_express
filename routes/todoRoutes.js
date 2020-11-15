const express = require('express');
const router = express.Router();

//get todo controllers
const todoController = require('../controllers/todoControllers');

router.get('/all', todoController.getAllTodos);

router.post('/add', todoController.addTodos);

module.exports = router;