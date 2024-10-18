import React from 'react'
import Container from './Container'
import brand1 from "../assets/br1.png";
import brand2 from "../assets/br2.png";
import brand3 from "../assets/br3.png";
import brand4 from "../assets/br4.png";
import brand5 from "../assets/br5.png";


const Brand = () => {
  return (
      <div className='xl:py-[100px] md:py-[60px] py-[40px]'>
          <Container>
              <div className="flex items-center justify-between px-3">
                  <img className='xl:w-[220px] lg:w-[150px] md:w-[100px] w-[50px]' src={brand1} alt="" />
                  <img className='xl:w-[220px] lg:w-[150px] md:w-[100px] w-[50px]' src={brand2} alt="" />
                  <img className='xl:w-[220px] lg:w-[150px] md:w-[100px] w-[50px]' src={brand3} alt="" />
                  <img className='xl:w-[220px] lg:w-[150px] md:w-[100px] w-[50px]' src={brand4} alt="" />
                  <img className='xl:w-[220px] lg:w-[150px] md:w-[100px] w-[50px]' src={brand5} alt="" />
              </div>
          </Container>
      
    </div>
  )
}

export default Brand
