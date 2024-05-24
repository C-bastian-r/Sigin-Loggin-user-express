const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: config.mysql.dialect
  }
);

const connectToDB = async()=>{
  try{
    await sequelize.authenticate();
    console.log('conexion obtenida');
  }catch(err){
    console.log('Error en la conexion', err)
  }
}

module.exports = {
  sequelize,
  connectToDB
}
