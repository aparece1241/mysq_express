const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const sequelize = require('./msql_connection');

//get todo route and use
const todoRoutes = require('./routes/todoRoutes');
app.use('/todos', todoRoutes);

//set up server 
app.listen(PORT, () => console.log(`Server is listening in port ${PORT}`));