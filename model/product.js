const Sequelize=require('sequelize');
const sequelize=require('../utl/database');

const product= sequelize.define('user',{
    ExpenseAmount :{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Category:{
        type: Sequelize.STRING,
        allownull:false,
    }
})
module.exports=product;