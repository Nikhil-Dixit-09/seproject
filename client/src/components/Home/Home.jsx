import React from 'react'
import Card from '../card/Card'
import stocks from '../../assets/icons8-stocks-48.png'
import dollar from '../../assets/icons8-heavy-dollar-sign-48.png'
import speaker from '../../assets/icons8-speaker-48.png'
import { useState } from 'react'
import { getinfo } from '../../actions/user'
import Portfolio from '../portfolio/portfolio'
import Mystock from '../../components/Stock/mystock'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import { addstock } from '../../actions/auth'
import { getStocks } from '../../actions/stocks'
import './Home.css'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const Stocks = useSelector((state) => state.stocks);
    const myuser = useSelector((state) => state.user);
    console.log(myuser);
    console.log(Stocks);
    console.log(user);
    // const addStock=()=>{
    //     const news={name:"Axis Bank Ltd.",price:865.35,symbol:"AXISBANK"}
    //     console.log(news);
    //     dispatch(addstock(news))
    // }
    useEffect(()=>{
        if(user!==null){
            var obj={};
            obj.id=user.result._id;
            dispatch(getinfo(obj));
        }
    },[])
    useEffect(() => {
        dispatch(getStocks());
    }, [dispatch])
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
        // console.log(user)
    }, [location])

    return (
        <div>
            {
                user == null &&
                <div className='home'>
                    <div className='left'>
                        <div className='invest'>
                            <div className='plain'>
                                Invest in
                            </div>
                            <div>
                                <ul class="dynamic-text">
                                    <li class="item one" >Stocks</li>
                                    <li class="item two" >US Stocks</li>
                                    <li class="item three" >IPO</li>
                                </ul>
                            </div>


                        </div>
                        <br />
                        <div className='start'>
                            Trusted by <span className='bold'>Millions</span>  of Indians. Start investing <br /> today.
                        </div>

                        <div className='started'>
                            <button>
                                Get Started
                            </button>
                        </div>

                    </div>

                    <div className='right'>
                        <div className='hori'>
                            <Card image={stocks} text="Stocks" />
                            <Card image={dollar} text="US Stocks" />
                        </div>
                        <div>
                            <Card image={speaker} text="IPO" />
                        </div>
                    </div>

                </div>
            }
            {
                user != null &&
                <div className='screen'>
                    <div className='stocklist'>
                        {
                            Stocks.map((stock) => (
                                <div className='divv'>
                                    <Mystock key={stock._id} name={stock.name} symbol={stock.symbol} price={stock.price} />
                                </div>

                            ))
                        }
                    </div>

                    <div className='portfolio'>

                        <div className='heading'>
                            PORTFOLIO
                        </div>
                        <div className='list'>
                            <div className='ele'>
                                <div className='content1'>
                                    Share
                                </div>
                                <div className='content1'>
                                    Quantity
                                </div>
                                <div className='content1'>
                                    Price
                                </div>
                                <div className='content1'>
                                    Total
                                </div>
                            </div>
                            <div>
                            {
                                myuser?.stocks?.map((stock) => (
                                    <div className='portfolio_item'>
                                        <Portfolio key={stock.name} symbol={stock.name} quantity={stock.value} />
                                    </div>
                                ))
                            }
                            </div>
                            
                        </div>
                    </div>
                </div>

            }
        </div>


    )
}

export default Home
