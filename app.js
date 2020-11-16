const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//use method override
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set view engine
app.set("view engine", "ejs");

const sequelize = require('./msql_connection');

//get todo route and use
const todoRoutes = require('./routes/todoRoutes');
app.use('/todos', todoRoutes);


//handles 404
app.use((req, res, next)=>{
    res.render("404");
});

//set up server 
app.listen(PORT, () => console.log(`Server is listening in port ${PORT}`));