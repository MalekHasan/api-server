'use strict'
const express=require("express")
const {Food}=require("../models/index")
const foodRouter=express.Router()

foodRouter.get('/food',getFood);
foodRouter.get('/food/:id',getOneFood);
foodRouter.put('/food/:id',updateFood);
foodRouter.delete('/food/:id',deleteFood);
foodRouter.post('/food',createFood);


async function getFood(req,res) {
    let foodResult=await Food.read();
    res.status(200).json(foodResult);
}
async function getOneFood(req,res) {
    let idFood=req.params.id;
    let foodResult=await Food.read(idFood);
    res.status(200).json(foodResult);
}
async function updateFood(req,res) {
    let idFood=req.params.id;
    let updateFood=req.body
    let foodResult=await Food.update(updateFood,idFood);
    res.status(201).json(foodResult);
}
async function deleteFood(req,res) {
    let idFood=req.params.id;
    let foodResult=await Food.delete(idFood);
    res.status(204).json(foodResult);
}
async function createFood(req,res) {
    let food=req.body;
    let foodResult=await Food.create(food)
    res.status(201).json(foodResult);
}


module.exports = foodRouter;