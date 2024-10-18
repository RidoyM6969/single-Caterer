import React from 'react'
import Container from './Container'
import icecrem1 from "../assets/icecrem.png"

const Expereance = () => {
  return (
      <div className='py-[100px]'>
          <Container>
              <div className="px-3">    
              <h4 className='text-[20px] font-normal'>Best Catering Services</h4>
                  <h2 className='lg:text-[52px] font-bold  text-[30px] pt-[10px] pb-[28px] '>A Shared Experience</h2>
                  <p className='lg:text-[18px] text-[16px] font-normal'>Lorem ipsum dolor sit enim  consect aetur adipisicing  convallislorems ipsum nosturd sit amet lorem ipsum dolor sit enim  cons
ect aetur adipisicing  convallis lorems ipsum nosturd sit amet, lorem ipsum dolor sit enim  consect aetur adipisicing  convallis
 lorems ipsum nosturd sit amet.Lorem ipsum dolor sit enim  consect aetur adipisicing  convallislorems ipsum nosturd sit amet 
lorem ipsum dolor sit enim  consect aetur adipisicing  convallis lorems ipsum nosturd sit amet, lorem ipsum dolor sit enim  consect
 aetur adipisicing  convallislorems ipsum nosturd sit amet.</p>
              </div>
              <div className="pt-[84px] lg:flex lg:justify-between items-center flex-wrap lg:w-[1000px] mx-auto ">
                  <img className='lg:w-[259px] lg:mt-[100px] mt-[20px] mx-auto ' src={icecrem1} alt="" />
                  <img className='lg:w-[259px] lg:mt-[100px] mt-[20px] mx-auto ' src={icecrem1} alt="" />
                  <img className='lg:w-[259px] lg:mt-[100px] mt-[20px] mx-auto ' src={icecrem1} alt="" />
                  <img className='lg:w-[259px] lg:mt-[100px] mt-[20px] mx-auto ' src={icecrem1} alt="" />
                  <img className='lg:w-[259px] lg:mt-[100px] mt-[20px] mx-auto ' src={icecrem1} alt="" />
                  <img className='lg:w-[259px] lg:mt-[100px] mt-[20px] mx-auto ' src={icecrem1} alt="" />
              </div>
              <div className="text-center lg:pt-[161px] pt-[80px] ">
                  <h2 className='lg:text-[52px] font-bold  text-[30px]  '>Subscribe for office</h2>
                  <h4 className='pt-[29px]'>Subscribe for early access offers, discounted rates, and you can cancel at any time.</h4>
                  <p className='pt-[53px] text-[#F60B0B]'>Enter Your Email....</p>
              </div>
          </Container>
      
    </div>
  )
}

export default Expereance
