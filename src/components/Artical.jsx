import React from 'react'
import Container from './Container'
import Flex from './Flex'
import artical1 from "../assets/artical2.png"
import artical2 from "../assets/artical1.png"

const Artical = () => {
  return (
      <div className='lg:py-[100px] py-[40px]'>
          <Container>
              <h2 className='lg:text-[52px] font-bold text-center text-[40px]'>News & Articles</h2>
              <div className="lg:flex items-center justify-evenly  px-3">
                  <div className="xl:w-[500px] lg:w-[350px] lg:pt-[32px] pt-[25px]">
                      <img src={artical1} alt="" />
                      <h2 className='xl:text-[30px] lg:text-[25px] text-[25px] font-bold pt-[74px]'>Outdoor Catering Discounts</h2>
                      <p className='pt-[32px]'>Lorem ipsum dolor sit enim  consect aetur adipisicing  convallis
lorems ipsum nosturd sit amet lorem ipsum dolor sit enim  cons
ect aetur adipisicing  convallis lorems ipsum nosturd sit amet.</p>
                  </div>
                  <div className="xl:w-[500px] lg:w-[350px] lg:pt-[32px] pt-[25px]">
                      <img src={artical2} alt="" />
                      <h2 className='xl:text-[30px] lg:text-[25px] text-[25px] font-bold pt-[74px]'>Outdoor Catering Discounts</h2>
                      <p className='pt-[32px]'>Lorem ipsum dolor sit enim  consect aetur adipisicing  convallis
lorems ipsum nosturd sit amet lorem ipsum dolor sit enim  cons
ect aetur adipisicing  convallis lorems ipsum nosturd sit amet.</p>
                  </div>
              </div>
              <div className="text-center pt-[70px]">
                  <button className='text-[#FC0C0C] text-[18px] font-normal'>Read More News </button>
              </div>
          </Container>
      
    </div>
  )
}

export default Artical
