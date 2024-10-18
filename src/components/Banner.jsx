import React from 'react'
import Flex from './Flex'
import banner from "../assets/banner.png"

const Banner = () => {
  return (
    <div className='' >
      <Flex>
        <div className="lg:w-[50%] w-full bg-black text-white text-center ">
          <h3 className='text-[#FDF8F8] md:pt-[] xl:text-[20px] font-normal lg:pt-[59px] text-[16px] pt-[26px] '>Best Catering Services</h3>
          <h2 className=' lg:font-normal xl:text-[60px] xl:pt-[6px] lg:px-[10px] xl:px-0 xl:w-[595px] mx-auto text-[30px] font-bold '>Special Ocasions
            Deserve Special Food</h2>
          <h2 className='xl:text-[26px] font-normal xl:pt-[31px] xl:w-[620px] mx-auto'>Dolor consect aetur adipisicing pellenqest convallis
            lorems ipsum nosturd sit amet</h2>
          <p className='xl:text-[18px] font-normal xl:pt-[41px] text-[16px]'>Need our Services. Call Today! </p>
          <p className='xl:pt-[25px] lg:py-0 py-[10px]'>+1(234) 9797 800 </p>
        </div>
        <div className="lg:w-[50%]">
          <img className='w-full  md:w-[800px] sm:w-[1000px] lg:w-[1000px]' src={banner} alt="" />
        </div>
      </Flex>
      
    </div>
  )
}

export default Banner
