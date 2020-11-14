const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("simplecrudtest", "simpletest1234", "simple101", {
    host: "db4free.net",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
sequelize.authenticate()
    .then(() => {
        console.log("Connected to mysql database!")
    }).catch((error) => {
        console.log("ERROR:", error)
    })


module.exports = sequelize;