'use strict'
const { Sequelize, DataTypes }=require("sequelize");
const clothes=require('./clothes.model')
const food=require('./food.model')
const POSTGRES_URI=process.env.NODE_ENV ==="test"?"sqlite::memory:":process.env.DATABSAE_URL

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}
    const sequelize =new Sequelize(POSTGRES_URI,sequelizeOptions)

    module.exports={
        db:sequelize,
        Clothes:clothes(sequelize,DataTypes),
        Food:food(sequelize,DataTypes)
    }
