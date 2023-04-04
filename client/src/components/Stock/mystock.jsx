import React from 'react'
import './mystock.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStock } from '../../actions/user';
import { sellStock } from '../../actions/user';
import { useSelector } from 'react-redux';
const Mystock = (props) => {
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
  const dispatch=useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [formData,setForm]=useState({quantity:0});
  const myuser=useSelector((state)=>state.user);
  console.log(myuser);
  const handleClick=(symbol,buy)=>{
    console.log(formData);
    console.log(symbol,buy);
    var balance=user?.result?.balance;
    if(formData.quantity<=0){
      console.log('please enter valid quantity');
      return;
    }
    var result = (formData.quantity - Math.floor(formData.quantity)) !== 0;
    if(result){
      console.log('Fractional shares are not allowed');
      return;
    } 
    console.log(formData.quantity,props.price);
      var payment=formData.quantity*props.price;
      console.log(payment);
    if(buy===1){
      
      if(payment>balance){
        console.log("insufficient balance");
      }else{
        var obj={};
        obj.symbol=symbol;
        obj.quantity=formData.quantity;
        obj.user=user?.result?._id;
        obj.payment=payment;
        dispatch(addStock(obj));
      }
    }else{
      var my=[];
      if(myuser._id!==undefined){
        // console.log('hii');
        my=myuser;
      }else{
        // console.log('bye');
        my=user?.result;
      }
        var f=-1;
        console.log(my);
          for(var i=0;i<my.stocks.length;i++){
            var s=my.stocks[i].name;
            var q=my.stocks[i].value;
            if(s===symbol){
              if(formData.quantity>q){
                f=1;
                console.log('You own less number of shares than the given quantity');
              }else{
                f=1;
                var object={};
                object.symbol=symbol;
                object.quantity=formData.quantity;
                object.user=user?.result?._id;
                object.payment=payment;
                dispatch(sellStock(object));
                console.log('okk');
              }
            }
          }
          if(f===-1){
            console.log("You don't have this share");
          }
        
    }

  }

  const x=randomNumber(-1,1);
  return (
    <div className='stock'>
      <div className='upper'>
        <div className='content'>
          {props.symbol}
        </div>
        {
          x>=0 && 
          <div className='content green'>
            {props.price}
          </div>  
        }
        {
          x<0 && 
          <div className='content red'>
            {props.price}
          </div>
        }
          
      </div>
      <div className='lowers'>
        <div className='content'>
          NSE
        </div>
          <div className='content'>
            {x.toPrecision(2)}
          </div>
      </div>
      <div className='options'>
        <div className='buy'>
        
            <input type="number" className='quantity' symbol={props.symbol} buy="1" onChange={(e)=>setForm({...formData,quantity:e.target.value})}/>
          <button type='submit' symbol={props.symbol} buy="1" onClick={() => handleClick(props.symbol, 1)}>
            Buy
          </button>
          
          
        </div>
        <div className='sell'>
        
            <input type="number" className='quantity' symbol={props.symbol} buy="0" onChange={(e)=>setForm({...formData,quantity:e.target.value})} />
          <button symbol={props.symbol} buy="0" onClick={() => handleClick(props.symbol, 0)}>
            Sell
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Mystock
