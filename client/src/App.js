import React from 'react'
import './app.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Appbar from './components/AppBar/Appbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth.jsx'
const App=()=>{
    
    return(
        <>

            <BrowserRouter>
            <Appbar/>
            <Routes>
                <Route path="/" exact Component={Home}/>
                <Route path="/auth" exact Component={Auth} />
            </Routes>
            {/* <Home/> */}
            </BrowserRouter>
            
            
        </>
        
    )
}
export default App;