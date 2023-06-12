"use strict"
const express=require("express")
const app=express();
const error404Handler=require("./error-handlers/404");
const error500Handler=require("./error-handlers/500");
const clothesRouter = require("./routes/clothes.route");
const foodRouter = require("./routes/food.route");
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("server is running")
})
app.use(clothesRouter);
app.use(foodRouter);
function start(port) {
    app.listen(port,()=>{
        console.log(`server is running in port ${port}`)
    })
}
app.use(error404Handler)
app.use(error500Handler)
module.exports={
    app:app,
    start:start
}