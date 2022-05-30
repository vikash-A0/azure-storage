const Sequelize = require('sequelize');
const db = require('../database/db');

const Storage=db.define('storage',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    TimeGenerated: {
        type:Sequelize.DATEONLY,
        allowNull:true,
        
    },
    OperationName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    DurationMs:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    ServerLatencyMs:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    ClientLatencyMs:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
});

module.exports = Storage;