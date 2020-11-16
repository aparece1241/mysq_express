const sequelize = require("../msql_connection");

//import dependencies
const {DataTypes} = require('sequelize');

//get connection
const sequelizeConnection = require('../msql_connection');

//get Todo schema
const TodoSchema = require('../models/SchemaValidator/todoSchema');


//get the model
const Todo = require('../models/todo')(sequelizeConnection, DataTypes);

module.exports = {
    //get all todos
    async getAllTodos(req, res){
        try {
            const todos = await Todo.findAll();
            if(!todos) return res.status(400).json({message: "something went wrong"});
            res.render('todo',{data: todos});
        } catch (error) {
            res.status(500).json({error: true, message: error});
        }
    },
    //add todo
    async addTodos(req, res) {
        const {error, value} = TodoSchema.validate(req.body);
        if(error) return res.status(400).json({message: error, error: true});
        try {
            const todoToSave = await Todo.create(value);
            const todo = await todoToSave.save();
            if(!todo) return res.status(500).json({message: "Something went wrong"});
            // res.json({message: "ok", todo: todo});
            res.redirect('/todos/all');
        } catch (error) {
            res.status(500).json({error: true, message: error});
        }
    },
    async updateTodo(req, res) {
        const id = req.params.id;
        const {error, value} = TodoSchema.validate(req.body);
        console.log(value);
        if(error) return res.status(400).json({message: error, error: true});
        try {
            const todo = await Todo.update(value,{
                where: {
                    id: id
                }
            });
            if(!todo) return res.status(500).json({message: "Something went wrong"});
            // res.json({message: "ok", todo: todo});
            res.redirect('/todos/all');

        } catch (error) {
            res.status(500).json({error: true, message: error});
        }
    },
    async deleteTodo(req, res) {
        const id = req.params.id;
        try {
            const todo = await Todo.destroy({
                where: {
                    id: id
                }
            });
            if(!todo) return res.status(500).json({message: "Something went wrong"});
            res.redirect('/todos/all');

        } catch (error) {
            res.status(500).json({error: true, message: error});
        }
    }
};