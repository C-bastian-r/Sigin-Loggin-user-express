require('dotenv').config;

module.exports = {
    app:{
        port: process.env.PORT || '4000'
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.USER || 'root',
        password: process.env.PASSWORD || '1006',
        database: process.env.MYSQL_DB || 'accounts',
        dialect: process.env.DIALECT || 'mysql'
    }
}