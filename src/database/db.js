const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'Azure_storage',//database name
    'postgres', // username
    'welcome@123', //password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;