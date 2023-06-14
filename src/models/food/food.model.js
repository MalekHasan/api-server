"use strict"
const Food=(sequelize,DataTypes)=>
sequelize.define('food',{
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