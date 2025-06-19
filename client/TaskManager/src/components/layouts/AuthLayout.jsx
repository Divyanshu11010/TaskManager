import React from 'react'
import Logo1 from '../../assets/logo.png'
import Logo2 from '../../assets/logo_fav.png'

function AuthLayout({ children }) {
  return (
    <div className='flex'>
      <div className='w-screen h-screen md:w-[50vw] px-12 pt-9 pb-12'>
        <div className="flex gap-2 items-center">
          <img src={Logo2} alt="logo" className='w-[70px] h-[50px]'/>
          <h2 className='text-2xl font-bold font font- text-black'>Task Manager</h2>
        </div>
        {children}
      </div>
      <div className='hidden md:flex w-[40vw] h-screen items-center justify-center bg-cover bg-no-repeat bg-center overflow-hidden p-8'><img src={Logo1} />
      </div>
    </div>
  )
}

export default AuthLayout