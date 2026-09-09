import React from 'react'

const Login = () => {
  return (
    <div className = 'flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input type="eamil" placeholder='Enter your email' />
                <input type="password" placeholder='Enter Password' />
            </form>
        </div> 
    </div>
  )
}

export default Login
