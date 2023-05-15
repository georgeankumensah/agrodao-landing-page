import React from 'react'

const CircularProgressBar = ({percentage,circularWidth}) => {
  return (
    <div>
        <svg width={circularWidth} height={circularWidth} viewBox={`0 0 ${circularWidth} ${circularWidth}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={circularWidth/2} cy={circularWidth/2} r={circularWidth/2} fill="#E5E5E5"/>
            <path d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z" fill="#101313"/>
            <path d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z" fill="#101313"/>
            <path d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z" fill="#101313"/>
            <path d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z" fill="#101313"/>
            </svg>

    </div>
  )
}

export default CircularProgressBar