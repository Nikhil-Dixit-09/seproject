import React from 'react'
import Card from '../card/Card'
import stocks from '../../assets/icons8-stocks-48.png'
import dollar from '../../assets/icons8-heavy-dollar-sign-48.png'
import speaker from '../../assets/icons8-speaker-48.png'
import './Home.css'

const Home = () => {
  return (
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
                <Card image={stocks} text="Stocks"/>
                <Card image={dollar} text="US Stocks"/>
            </div>
            <div>
                <Card image={speaker} text="IPO"/>
            </div>
        </div>
        
    </div>
  )
}

export default Home
