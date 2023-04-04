const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/user')
const Stocks=require('../models/stock');
const { default: mongoose } = require('mongoose');
module.exports.signin=async function(req,res){
    console.log(req.body);
    try{
        const existingUser=await User.findOne({email:req.body.email});
        if(!existingUser){
            return res.staus(404).json({message:"User does not exist"})
        }
        const isPasswordCorrect=await bcrypt.compare(req.body.password,existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},'seproject',{expiresIn:"1h"});
        return res.status(200).json({result:existingUser,token})
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Something went wrong"});
    }
}
module.exports.signup=async function(req,res){
    // console.log(req.body);
    try{
        const existingUser=await User.findOne({email: req.body.email});
        if(existingUser) return res.status(400).json({message:"User already exists"});
        if(req.body.password!=req.body.confirmPassword){
            return res.status(400).json({message:"Passwords don't match"});
        }
        const hashedPassword=await bcrypt.hash(req.body.password,12);
        const result=await User.create({email:req.body.email,password:hashedPassword,name:`${req.body.firstName} ${req.body.lastName}`,adharCard:req.body.adharCard,panCard:req.body.panCard,balance:20000});
        const token=jwt.sign({email:result.email,id:result._id},'seproject',{expiresIn:"1h"});  
        console.log(result);
        return res.status(200).json({result,token}); 
    }catch(err){
        console.log(err);
    }
}
module.exports.addstock=async function(req,res){
    try{
        console.log(req.body);
        const user=await User.findById(req.body.user);
        console.log(user);
        const symbol=req.body.symbol;
        const quantity=req.body.quantity;
        console.log(symbol,quantity);
        var add={name:symbol,value:parseInt(quantity)};
        console.log(add);
        var f=-1;
        for(var i=0;i<user.stocks.length;i++){
            if(user.stocks[i].name==symbol){
                user.stocks[i].value=user.stocks[i].value+parseInt(quantity);
                f=1;
                break;
            }
        }
        if(f==-1){
            user.stocks.push(add);
        }
        user.balance=user.balance-req.body.payment;
        user.save();
        console.log(user);
        return res.status(200).json({data:user});
    }catch(err){
        console.log(err);
    }
}
module.exports.sellstock=async function(req,res){
    try{
        console.log(req.body);
        const user=await User.findById(req.body.user);
        for(var i=0;i<user.stocks.length;i++){
            s=user.stocks[i].name;
            v=user.stocks[i].value;
            if(s==req.body.symbol){
                user.stocks[i].value=user.stocks[i].value-parseInt(req.body.quantity);
                if(user.stocks[i].value==0){
                    user.stocks.splice(i,1);
                }
                user.balance=user.balance+parseInt(req.body.payment);
                break;
            }
        }
        user.save();
        console.log(user);
        return res.status(200).json({data:user});
    }catch(err){
        console.log(err);
    }
}