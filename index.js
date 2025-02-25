const express = require('express')
const mongoose = require('mongoose')
const restaurent = require('./restaurentschema')
const items = require('./itemsscema');

const app = express();

app.use(express.json())


const port = 3000;

app.listen(port, ()=>{
    try{
       
        console.log("port is runnning `${port}`")
    }catch(err){
        console.log(err)
    }
})
