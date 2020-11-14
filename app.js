const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//temporary
const sequelize = require('./msql_connection');

//get all data {test}
app.get('/getdata', (req, res)=> {
    sequelize.query("SELECT * FROM `user`", { type: sequelize.QueryTypes.SELECT})
  .then(users => {
      console.log(users);
    res.json({users: users});
  }).catch((error)=>{
      console.log(`ERROR: ${error}`);
  })
});


app.post('/adddata',(req, res)=> {
    sequelize.query("INSERT INTO `user`(`id`, `username`, `password`, `email`) VALUES (null,'sarah','password','sarah@gmail.com')")
        .then((user)=>{
            console.log(user);
            res.json({message: "Successfully added", data: user})
        }).catch((error)=> {
            res.json({error: error});
        })
})















//set up server 
app.listen(PORT, () => console.log(`Server is listening in port ${PORT}`));