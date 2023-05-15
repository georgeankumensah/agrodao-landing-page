import React from 'react'
import { logo } from "../assets"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex px-[162px] py-[35px] absolute items-center justify-between'><img src={logo} className='w-[175px] h-[31px]' />
      <div className='flex items-center  '>
        <NavLink to='/' className='text-[#D9D9D9] text-[18px] font-medium mr-[30px]'>Home</NavLink>
        <NavLink to='/' className='text-[#D9D9D9] text-[18px] font-medium mr-[30px]'>Store</NavLink>
        <NavLink to='/' className='text-[#D9D9D9] text-[18px] font-medium mr-[30px]'>Funding</NavLink>
        <NavLink to='/' className='text-[#D9D9D9] text-[18px] font-medium mr-[30px]'>Agrobond</NavLink>
        <NavLink to='/' className='text-[#D9D9D9] text-[18px] font-medium mr-[30px]'>Blog</NavLink>
        <button className='bg-[#24660C] text-[#FFFFFF] text-[18px] font-medium ml-[30px] h-[42px] w-[154px] rounded-[5px]'>Connect Wallet</button>
      </div></div>
  )
}

export default Navbar 