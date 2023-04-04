const Stocks=require('../models/stock');
module.exports.add=async function(req,res){
    try{
        const stock=await Stocks.create({name:req.body.name,price:req.body.price,symbol:req.body.symbol});
        console.log(stock);
        console.log(req.body);
        return res.status(200).json({data:stock});
    }catch(err){
        console.log(err);
    }
}
module.exports.fetch=async function(req,res){
    try{
        const stocks=await Stocks.find();

        return res.status(200).json(stocks);
    }catch(err){
        console.log(err);
    }
}