import React, { useState } from 'react'
import { logo, twitter, instagram, facebook } from "../assets"
import { Link } from 'react-router-dom'

const Footer = () => {
  const socials = [
    {
      id: 1,
      icon: twitter,
      link: 'https://twitter.com/agrodao'
    },
    {
      id: 2,
      icon: instagram,
      link: 'https://www.instagram.com/agrodao/'
    },
    {
      id: 3,
      icon: facebook,
      link: 'https://www.facebook.com/agrodao'
    }
  ]
  return (
    <div className='bg-[#101313] '>
      <div className='flex pt-[50px] px-[166px]'>
        <img src={logo} className='w-[175px] h-[31px] mx-auto self-center' />
        <div className='flex gap-x-[50px] mb-[53px]'>
          <div className='flex flex-col gap-y-[8px]'>
            <h3 className='text-[#9C9C9C] text-[24px] font-normal'>Products</h3>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Store</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Partnership</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Farmer Loans</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Agrodao Token
            </Link>
          </div>
          <div className='flex flex-col gap-y-[8px]'>
            <h3 className='text-[#9C9C9C] text-[24px] font-normal'>Communities</h3>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Agrodao Ambassadors</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Code of conduct</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Blog</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>FAQ</Link>
          </div>
          <div className='flex flex-col gap-y-[8px]'>
            <h3 className='text-[#9C9C9C] text-[24px] font-normal'>Company</h3>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>About Us</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Career</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>Blog</Link>
            <Link to='/' className='text-[#9C9C9C]  text-[18px] font-normal'>NFT integration</Link>
          </div>
          <div className='flex flex-col gap-y-[8px]'>
            <h3 className='text-[#9C9C9C] text-[24px] font-normal'>Social Media</h3>
            <div className='flex gap-x-[20px] mt-[10px]'>
            {socials.map(social => (
              <Link to={social.link} key={social.id} className='text-[#9C9C9C] '>
                <img src={social.icon}/>
              </Link>

            ))}</div>
          </div>

        </div>

      </div>
      <div class="border-t-[0.2px] border-[#9C9C9C]"></div>
      <p className='text-center py-[18px] text-[16px] text-[#9C9C9C]'>© Agrodao  Copyright 2023. All Right Reserved</p>
    </div>
  )
}

export default Footer