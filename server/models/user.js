const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name: {type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String},
    adharCard:{type:String,required:true},
    panCard:{type:String,required:true}
})
const User=mongoose.model('User',userSchema);
module.exports=User;