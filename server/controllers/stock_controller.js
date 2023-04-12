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
        // const options = {
        //     method: 'GET',
        //     url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL/financial-data',
        //     headers: {
        //       'X-RapidAPI-Key': '2028e79645mshfadfed0ae146e08p14cce4jsncc711a505019',
        //       'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data);
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
        // const data=await axios.get(`https://api.polygon.io/v2/aggs/ticker/GOOG/prev?adjusted=true&apiKey=GtsiJt2SVbczgdbQaB5jmaOFAJavRU_g`);
        // console.log(data.data.results)
        return res.status(200).json(stocks);
    }catch(err){
        console.log(err);
    }
    
}