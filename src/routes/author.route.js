'use strict'
const express=require("express")
const {Author}=require('../models/index') 
const {Book}=require('../models/index') 
const authorRouter=express.Router()

authorRouter.get('/author',getAuthors)
authorRouter.get('/author/:id',getOneAuthor)
authorRouter.post('/author',createAuthor)
authorRouter.put('/author/:id',updateAuthor)
authorRouter.delete('/author/:id',deleteAuthor)
authorRouter.get('/authorbooks/:id',getAuthorBooks)


async function getAuthorBooks(req,res) {
    let {id}=req.params
   let authorsResult=await Author.readAuthorBooks(id,Book.model);
    res.status(200).send(authorsResult)
}
async function getAuthors(req,res) {
   let authorsResult=await Author.read();
    res.status(200).send(authorsResult)
}
async function getOneAuthor(req,res) {
    let {id}=req.params
   let authorsResult=await Author.read(id);
    res.status(200).send(authorsResult)
}
async function createAuthor(req,res) {
    let auhtor_obj=req.body
    let authorsResult=await Author.create(auhtor_obj);
    res.status(201).send(authorsResult)
}
async function updateAuthor(req,res) {
    let auhtor_obj=req.body
    let {id}=req.params
    let authorsResult=await Author.update(auhtor_obj,id);
    res.status(201).send(authorsResult)
}
async function deleteAuthor(req,res) {
    let id=parseInt(req.params.id)
    let authorsResult=await Author.delete(id);
    res.status(204).json(authorsResult)
}




module.exports=authorRouter