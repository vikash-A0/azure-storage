const express = require("express");
const sequelize = require('./database/db')
const Storage = require('./models/storage')

var app = express();

app.use(express.json());


app.use('/storage',require('./routes/storage'));


(async () =>{
    try{
        await sequelize.sync({
            force : true
        });
        console.log('DB Connected Succesfully')
        app.listen(3000,()=>{
            console.log("Server Started")
        });
    }
    catch(e){
        console.log('An error occured',e);
    }
})()