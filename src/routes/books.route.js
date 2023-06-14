'use strict'
const express=require("express")
const {Book}=require('../models/index') 
const bookRouter=express.Router()

bookRouter.get('/book',getBooks)
bookRouter.get('/book/:id',getOneBook)
bookRouter.post('/book',createBook)
bookRouter.put('/book/:id',updateBook)
bookRouter.delete('/book/:id',deleteBook)



async function getBooks(req,res) {
   let booksResult=await Book.read();
    res.status(200).send(booksResult)
}
async function getOneBook(req,res) {
    let {id}=req.params
   let booksResult=await Book.read(id);
    res.status(200).send(booksResult)
}
async function createBook(req,res) {
    let book_obj=req.body
    let booksResult=await Book.create(book_obj);
    res.status(201).send(booksResult)
}
async function updateBook(req,res) {
    let book_obj=req.body
    let {id}=req.params
    let booksResult=await Book.update(book_obj,id);
    res.status(201).send(booksResult)
}
async function deleteBook(req,res) {
    let id=parseInt(req.params.id)
    let booksResult=await Book.delete(id);
    res.status(204).json(booksResult)
}




module.exports=bookRouter