import React from 'react'
import { useState } from 'react';
import {signin,signup} from '../../actions/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Auth.css'
import FileBase from 'react-file-base64'
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', adharCard: '', panCard: '' };
const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const switchMode = () => {
        // setForm(initialState);
        setIsSignup(!isSignup);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        if(isSignup){
            dispatch(signup(form,navigate));
          }else{
            dispatch(signin(form,navigate));
          }
    }
    return (
        <div>

            <form className='myForm' action="" autoComplete='off' onSubmit={handleSubmit}>
                <div className='flex'>
                   
                        {
                            isSignup && (
                                <>
                                    <h6>First Name</h6>
                                    <input placeholder='Enter First Name' className='input' type="text" label='First Name' name='firstName' onChange={handleChange} />
                                    <h6>Last Name</h6>
                                    <input placeholder='Enter Last Name' className='input' type="text" label='Last Name' name='lastName' onChange={handleChange} />
                                </>
                            )
                        }
                        <h6>Email</h6>
                        <input placeholder='Enter Email Address' className='input' type="email" label='Email Address' name='email' onChange={handleChange} />
                        <h6>Password</h6>
                        <input placeholder='Enter Password' className='input' type="password" label='Password' name='password' onChange={handleChange} />
                    </div>
                   
                        {
                            isSignup && (
                                <>
                                    <h6>Confirm Password</h6>
                                    <input placeholder='Confirm Password' className='input' type="password" label='Repeat Password' name='confirmPassword' onChange={handleChange} />
                                    <h6>Adhar Card</h6>
                                    <FileBase type="file" multiple={false} name='adharCard' className='input' onDone={({ base64 }) => setForm({ ...form, adharCard: base64 })} />
                                    <h6>Pan Card</h6>
                                    <FileBase type="file" multiple={false} name='panCard' className='input' onDone={({ base64 }) => setForm({ ...form,panCard: base64 })} />
                                </>
                            )
                        }
                        <div className='submitbutton'>
                            <button type='submit'>
                                {isSignup ? 'SignUp' : 'SignIn'}
                            </button>
                        </div>
                        
            </form>
            <button onClick={switchMode} className='lower'>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
            </button>


        </div>
    )
}

export default Auth
