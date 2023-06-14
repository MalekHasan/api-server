"use strict"
const Clothes=(sequelize,DataTypes)=>
sequelize.define('clothe',{
    color:{
        type : DataTypes.STRING,
        allowNull: false
    },
    brand:{
        type : DataTypes.STRING,
        allowNull: false
    }
});
module.exports=Clothes