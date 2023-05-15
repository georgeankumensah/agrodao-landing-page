import React from 'react'
import { reach, aim, vision, mission, dao, partnerCard1, partnerCard2 } from "../assets"


// import components here
import PartnerCard from '../components/PartnerCard'

const Home = () => {
  const aimData = [
    {
      id: 1,
      icon: aim,
      title: "Agrodao",
      description: "Leverage blockchain technology in combating food shortage and towering food prices in Africa."
    },
    {
      id: 2,
      icon: vision,
      title: "Our Vision",
      description: "An Africa that feeds herself and the rest of the world, through  harnessing the  latest financial Technologies."
    },
    {
      id: 3,
      icon: mission,
      title: "Our Mission",
      description: "To establish food supply chains across African Nations, and end artrificial  food scarcity."
    },
    {
      id: 4,
      icon: dao,
      title: "The Dao",
      description: "Establish mutually beneficial partnerships between community members and farmers."
    },

  ]
  const partnerData = [
    {
      id: 1,
      title: "Ans farm Ltd",
      image: partnerCard1,
      country: "Uganda",
      task: "Join us as we mechanize our system for larger yield ",
      amount: 50000,
      target: 120000

    },
    {
      id: 2,
      title: "Kofi Ana’s Ltd",
      image: partnerCard2,
      country: "Ghana",
      task: "Join us as we mechanize our system for larger yield ",
      amount: 30000,
      target: 180000

    },
    {
      id: 3,
      title: "Mansa Musa Ltd.",
      image: partnerCard1,
      country: "Kenya",
      task: "Join us as we mechanize our system for larger yield ",
      amount: 50000,
      target: 100000
    },
  ]
  return (
    <div className='w-full'>
      <div className={`bg-hero w-full h-[982px]  bg-cover bg-center`}>
        <div className='px-[173px] relative top-[290px]'>
          <h1 className='text-[68px] font-bold leading-[88px] text-white'>An <span className='text-[#247806]'>Africa</span> That<br />
            Feed Herself and<br />
            <span className='text-[#247806]'>The Rest of The World</span></h1>
          <h2 className='text-white text-[24px] font-medium'>Join us as we establish resilient food supply chains across african nations
            and upscale productivity to curb the impending global food crisis</h2>
          <div className='flex mt-[60px] gap-x-[30px]'>
            <button className='bg-[#24660C] text-[#FFFFFF] text-[18px] font-medium  h-[60px] w-[213px] rounded-[5px]'>Downloadd Litpaper</button>
            <button className='bg-transparent border-[2px] hover:bg-white hover:text-[#247806] text-[#FFFFFF] text-[18px] font-medium  h-[60px] w-[213px] rounded-[5px]'>Apply for Loan</button>

          </div>
        </div>
      </div>
      <div className='px-[173px] py-[90px]'>
        <h3 className='text-center text-[#ABABAB] text-[20px]'>Trusted by 250+ companies
        </h3>
      </div>
      <div className='bg-[#DDFAD2] px-[173px]  flex gap-x-[54px] py-[90px]'>
        {
          aimData.map((data) => (
            <div key={data.id}>
              <img src={data.icon} alt={data.title} className='w-[40px] h-[40px]' />
              <h3 className='mt-[13px] mb-[10px] text-[#0F170C] font-[700] text-[24px]'>{data.title}</h3>
              <p className='text-[18px] font-[500] leading-[22px] text-[#525252]'>{data.description}</p>
            </div>
          ))
        }

      </div>
      <div className='bg-white px-[270px]  flex flex-col gap-x-[54px] py-[190px]'>
        <h3 className='text-center font-medium text-[#24660C] text-[36px] mb-[10px]'>What we Aim to Achieve</h3>
        <p className='text-center text-[24px] text-[#525252] leading-[31.68px]'>Onboard individuals to passively participate in food production in Africa, to enable optimum arable land utilization, increased productivity and profitability for smallholder farmers, and sustenance of moderate pricing for agricultural produce and other key elements within the food production value chain.</p>
        <img src={reach} alt="reach" className='mt-[70px] w-full' />
      </div>
      <div className='bg-white   flex flex-col gap-x-[54px] pb-[190px]'>
        <h3 className='text-center font-medium text-[#24660C] text-[36px] mb-[10px]'>Partner with a Farmer Today</h3>
        <p className='text-center px-[270px] text-[18px] text-[#0F170C] leading-[31.68px] mb-[70px]'>Agrodao hosts P2P partnership opportunities between community members  and farmers; to match
          farmers needing fundingto upscale or start agro projects & individuals willing to explore passive income
          opportunities </p>
        <div className='flex justify-center gap-x-[70px]'>

          {
            partnerData.map((data) => (
              <PartnerCard item={data} key={data.id} />
            ))
          }
        </div>
        <button className='mt-[70px] shadow-xl w-[175px] rounded-b-[10px] h-[60px] text-[#24660C] mx-auto'>View More</button>

      </div>
    </div>
  )
}

export default Home