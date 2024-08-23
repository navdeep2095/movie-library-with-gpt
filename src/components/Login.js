import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const handleSignIn = () => {
        setSignIn(!signIn);
    }
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg' alt='logo' />
        </div>
        <form className='absolute w-3/12 my-24 mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl py-4 font-bold'>{signIn ? 'Sign In': 'Sign Up'}</h1>
            <input className='bg-gray-700 p-2 my-4 w-full' type='text' placeholder='Email ID'/>
            {!signIn && <input className='bg-gray-700 p-2 my-4 w-full' type='text'placeholder='Full Name'/>}
            <input className='bg-gray-700 p-2 my-4 w-full' type='password' placeholder='Password'/>
            <button className='bg-red-700 p-4 my-6 w-full rounded-lg'>{signIn ? 'Login': 'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={handleSignIn}>{signIn? 'New to Netflix Sign up now!': 'Already user Sign in now'}</p>
        </form>
    </div>
  )
}

export default Login