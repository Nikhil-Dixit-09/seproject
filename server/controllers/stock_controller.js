const Stocks=require('../models/stock');
const axios = require('axios');
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
        

const options = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL/asset-profile',
  headers: {
    'X-RapidAPI-Key': '63a4535a9emshcefa45bb7cde36cp1e4eb9jsnb67e30a67489',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
        return res.status(200).json(stocks);
    }catch(err){
        console.log(err);
    }
}