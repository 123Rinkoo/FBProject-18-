const Sequelize= require('sequelize');
const sequelize= new Sequelize ('user', 'root', 'vidmate',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;