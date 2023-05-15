import React from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import CircularProgressBar from './CircularProgressBar'

const PartnerCard = ({ item }) => {
    const { title, image, country, task, amount, target } = item
    const percentage = (amount / target * 100).toFixed(0)

    return (
        <div className=' w-[342px] rounded-lg shadow-xl '>
            <div className='relative'>

                <img src={image} alt={title} className='w-[342px] h-[200px]' />

                <span className='absolute top-0 right-0 bg-white text-[#24660C] h-[32px] w-[94px] text-[18px] font-medium text-center rounded-b-md'>${amount}</span>
                <span className='absolute  bottom-0 left-0 text-white h-[32px] w-[94px] text-[18px] font-medium text-center rounded-b-md'>{country}</span>
            </div>
            <div className='px-[16px] pb-[40px] pt-[20px] flex justify-between'>
                <div  >
                    <h4 className='text-[24px] capitalize text-[#24660C] font-medium'>{title}</h4>
                    <p className='text-[14px] text-[#525252]'>{task}</p>

                </div>

                <CircularProgressbar styles={buildStyles({
                    textSize: "26",
                    textColor: "#24660C",
                    pathColor: "#24660C",
                    pathTransitionDuration: 0.5,
                    trailColor: "#DDFAD2",
                    backgroundColor: "#3e98c7",
                })} className='h-[63px] font-bold w-[63px]' value={percentage} text={`${percentage}%`} strokeWidth={8} />
            </div>
            <div className="flex px-[16px] pb-[20px] items-center gap-x-[10px]">
                <button className='border-[1px] border-[#24660C] rounded-[10px] w-[173px] h-[44px]'>Partner</button>
                <Link to="/" className='text-[18px] font-medium'>Learn  More</Link>
            </div>
        </div>
    )
}

export default PartnerCard