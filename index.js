"use strict"
require("dotenv").config();
let PORT=process.env.PORT || 4001

const { db } = require("./src/models/index");
const server=require("./src/server")

db.sync().then(()=>{
    server.start(PORT)
})