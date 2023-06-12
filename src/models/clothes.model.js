"use strict"
const Clothes=(sequelize,DataTypes)=>
sequelize.define('clothe',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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