const express=require('express');
const app=express();
const sequelize=require('./utl/database');
const adminroutes=require('./routes/admin');
const path=require('path');
const bodyParser = require('body-parser');
var cors=require('cors');


app.use(bodyParser.json({ extended:false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'views')));
app.use(adminroutes);

sequelize.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})
