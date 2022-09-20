const express = require("express");
const mongoose = require("mongoose");


require("dotenv").config();

const routes = require('./routes/routes');

const mogoString = process.env.DATABASE_URL;
// 8Br498CZ8KlPuaY3

mongoose.connect(mogoString);
const database = mongoose.connection;

database.on('error', (error) =>{
    console.log(error)
})

database.once('connected', ()=>{
    console.log('database is connected');
})

const app = express();

app.use(express.json());

// let's use our routes

app.use("/api", routes);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})