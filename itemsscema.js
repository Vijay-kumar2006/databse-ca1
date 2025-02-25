const mongoose = require('mongoose')
const { Schema,model } = mongoose

const itemSchema = new Schema({
   name:{
    type:String,
    required:true
   },
    price:{
        type:Number,
        required:true
    }
    })
const items = model('items',itemSchema)
module.exports = items;
