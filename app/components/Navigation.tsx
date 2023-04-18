import React from 'react'
import { NavLink } from '@remix-run/react'

const Navigation: React.FC = () => {
  return (
    <div className='flex flex-col space-y-6'>
    <NavLink className={({isActive}) => isActive ? 'backdrop-blur bg-red-500 p-4 z-10' : 'bg-none p-4 z-10'} to='/'>About</NavLink>
    <NavLink className={({isActive}) => isActive ? 'backdrop-blur bg-red-500 p-4 z10' : 'bg-none p-4 z-10'} to='/oss'>Projects</NavLink>
    <NavLink className={({isActive}) => isActive ? 'backdrop-blur bg-red-500 p-4 z10' : 'bg-none p-4 z-10'} to='/blog'>Blog</NavLink>
    <NavLink className={({isActive}) => isActive ? 'backdrop-blur bg-red-500 p-4 z10' : 'bg-none p-4 z-10'} to='/chat'>Chat</NavLink>
  </div>
  )
}

export default Navigation
