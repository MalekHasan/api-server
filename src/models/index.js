'use strict'
const { Sequelize, DataTypes }=require("sequelize");
const clothes=require('./clothes/clothes.model')
const food=require('./food/food.model')
const author=require('./author/author.model')
const Collection=require('./collection');
const books = require("./books/books.model");
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
  
    const sequelize =new Sequelize(POSTGRES_URI,sequelizeOptions);
    const authorTable=author(sequelize,DataTypes);
    const bookTable=books(sequelize,DataTypes);
  
    const clothesModel=new Collection(clothes(sequelize,DataTypes))
    const foodModel=new Collection(food(sequelize,DataTypes))
    
    const authorModel=new Collection(authorTable)
    const bookModel=new Collection(bookTable)

    authorTable.hasMany(bookTable,{
        foreignKey:"author_id",
        source:"id"
    })
    bookTable.belongsTo(authorTable,{
        foreignKey:"author_id",
        target:"id"
    })
    module.exports={
        db:sequelize,
        Clothes:clothesModel,
        Food:foodModel,
        Author:authorModel,
        Book:bookModel
    }
