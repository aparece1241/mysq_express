const Sequelize = require('sequelize');
const { use } = require('../routes/userRoutes');

const User = require('../models/usermodel')();

module.exports = {
    //create new user
    async addUser(req, res) {
        try {
            const userToAdd = await User.create(req.body);
            const user = await userToAdd.save();
            if(!user) {
                return res.status(400).json({message: "Something went wrong!"});
            }
            res.json({message: "ok",user: user});
        } catch (error) {
            res.status(500).json({message: error});
        }
    },
    async getAllUsers(req, res){
        try {
            const users = await User.findAll({raw: false});
            console.log(users);
            if(!users){
                return res.status(400).json({message: "Smothing went wrong"});
            }
            res.json({users: users});

        } catch (error) {
            res.status(500).json({message: error});
        }
    }
};
