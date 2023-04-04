const mongoose=require('mongoose');
const stockSchema=mongoose.Schema({
    name: {type:String,required:true},
    symbol:{type:String,reequired:true},
    price: {type:Number,required:true}
})
const Stocks=mongoose.model('Stocks',stockSchema);
module.exports=Stocks;