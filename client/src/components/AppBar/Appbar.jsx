import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './Appbar.css'
import { useLocation } from 'react-router-dom'
const Appbar = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);
  const gotohome = () => {
    navigate("/");
  }
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    setUser(null)
    gotohome();
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
    // console.log(user)
  }, [location])
  return (
    <div className='appbar'>
        <div className='name'>
            Name of the company
        </div>

        <div className='who'>
            {
              user!=null &&
              <div className='user'>
                <div className='nameApp'>
                  {user.result.name}
                </div>
                <div className='logout'>
                  <button onClick={logout}>
                    Logout
                  </button>
                </div>
                
              </div>
              
            }
            {
              user==null && 
              <button onClick={() => navigate("/auth")}>
                Login/Register
              </button>
            }
            
        </div>
    </div>
  )
}

export default Appbar
