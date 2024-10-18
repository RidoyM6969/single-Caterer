import React from 'react'
import Flex from './Flex'
import Container from './Container'
import shpe from "../assets/shape.png";


const Shape = () => {
  return (
      <div className='py-[100px]'>
          <Container>
              
              <div className="lg:flex">
                  
                  <div className="lg:w-[50%]">
                      <img className='lg:w-[648px] lg:px-0 w-[500px] mx-auto px-3' src={shpe} alt="" />
                  </div>
                  <div className="lg:w-[50%] xl:px-0 px-3 ">
                      <h4 className=' lg:text-[20px] lg:mt-[50px] font-normal xl:mt-[171px] text-[18px] mt-[30px] '>Best Catering Services</h4>
                      <h2 className=' lg:text-[52px] lg:mt-[10px] font-bold xl:mt-[41px] text-[40px] '>Our Ingredients Are
                          Sustainably Sourced </h2>
                      <p className=' lg:text-[18px] lg:mt-[5px] font-normal xl:mt-[71px] text-[16px]'>Lorem ipsum dolor sit enim  consect aetur adipisicing  convallis
                    lorems ipsum nosturd sit amet lorem ipsum dolor sit enim  cons
                    ect aetur adipisicing  convallis lorems ipsum nosturd sit amet, lo-
                    rem ipsum dolor sit enim  consect aetur adipisicing  convallis
                    lorems ipsum nosturd sit amet</p>
                  </div>
              </div>
              
          </Container>
      
    </div>
  )
}

export default Shape
