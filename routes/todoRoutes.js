const express = require('express');
const router = express.Router();

//get todo controllers
const todoController = require('../controllers/todoControllers');

router.get('/all', todoController.getAllTodos);

router.post('/add', todoController.addTodos);

router.put('/update/:id', todoController.updateTodo);

router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;