'use strict'
const Authors=(sequelize,DataTypes)=>
sequelize.define("authors",{
    fullName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:true,
    }
})
module.exports=Authors