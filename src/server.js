"use strict"
const express=require("express")
const app=express();
const error404Handler=require("./error-handlers/404");
const error500Handler=require("./error-handlers/500");
const clothesRouter = require("./routes/clothes.route");
const foodRouter = require("./routes/food.route");
const authorRouter = require("./routes/author.route");
const bookRouter = require("./routes/books.route");
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("server is running")
})
app.use(clothesRouter);
app.use(foodRouter);
app.use(foodRouter);
app.use(authorRouter);
app.use(bookRouter);
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