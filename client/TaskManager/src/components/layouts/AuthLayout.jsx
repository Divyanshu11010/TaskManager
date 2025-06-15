import React from 'react'
import Logo from '../../assets/logo.png'

function AuthLayout({ children }) {
  return (
    <div className='flex'>
      <div className='w-screen h-screen md:w-[50vw] px-12 pt-9 pb-12'>
        <h2 className='text-lg font-medium text-black'>Task Manager</h2>
        {children}
      </div>
      <div className='hidden md:flex w-[40vw] h-screen items-center justify-center bg-cover bg-no-repeat bg-center overflow-hidden p-8'><img src={Logo} />
      </div>
    </div>
  )
}

export default AuthLayout