const mongoose = require('mongoose')
const { Schema,model } = mongoose

const userSchema = new Schema({
   name:{
    type:String,
    required:true
   },
    city:{
        type:String,
        required:true

    },
    items:{
        tyre:[]
    }
    })
const restaurent = model('restaurent',userSchema)
module.exports = restaurent;
