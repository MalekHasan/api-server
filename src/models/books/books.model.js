'use strict'
const Books=(sequelize,DataTypes)=>
sequelize.define("books",{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    version:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    author_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})
module.exports=Books