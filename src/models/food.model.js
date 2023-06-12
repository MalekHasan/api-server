"use strict"
const Food=(sequelize,DataTypes)=>
sequelize.define('food',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type : DataTypes.STRING,
        allowNull: false
    },
    brand:{
        type : DataTypes.STRING,
        allowNull: false
    }
});
module.exports=Food