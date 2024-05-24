const { DataTypes } = require("sequelize");
const { sequelize } = require("./databaseSquelize");

/**
 * define la entidad usuario
 */
const User = sequelize.define('Users',
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user:{
      type: DataTypes.STRING,
      validate:{max:150},
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: true
    },
    email:{
      type: DataTypes.STRING,
      validate:{max:150},
      allowNull: false,
      unique: true
    }
  },{
    timestamps: false,
    tableName: 'users'
  }
);

/* sequelize.sync() */

module.exports = {User};
