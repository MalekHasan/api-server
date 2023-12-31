'use strict'
const express=require("express")
const {Clothes}=require("../models/index")
const clothesRouter=express.Router()

clothesRouter.get('/clothes',getClothes);
clothesRouter.get('/clothes/:id',getOneClothe);
clothesRouter.put('/clothes/:id',updateClothe);
clothesRouter.delete('/clothes/:id',deleteClothe);
clothesRouter.post('/clothes',createClothe);


async function getClothes(req,res) {
    let clothesResult=await Clothes.read();
    res.status(200).json(clothesResult);
}
async function getOneClothe(req,res) {
    let idClothe=req.params.id;
    let clothesResult=await Clothes.read(idClothe);
    res.status(200).json(clothesResult);
}
async function updateClothe(req,res) {
    let idClothe=req.params.id;
    let updateClothe=req.body
    let clothesResult=await Clothes.update(updateClothe,idClothe);
    res.status(201).json(clothesResult);
}
async function deleteClothe(req,res) {
    let idClothe=req.params.id;
    let clothesResult=await Clothes.delete(idClothe);
    res.status(204).json(clothesResult);
}
async function createClothe(req,res) {
    let newClothe=req.body;
    let clothesResult=await Clothes.create(newClothe)
    res.status(201).json(clothesResult);
}


module.exports = clothesRouter;