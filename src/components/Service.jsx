import React from 'react'
import Container from './Container'
import logo from "../assets/logo2.png"

const Service = () => {
  return (
      <div className='xl:py-[120px] lg:py-[100px] py-[60px]'>
          <Container>
              <div className="lg:flex items-center justify-between">
                  <div className=" w-[302px] text-center mx-auto"> 
                      <img className='w-[130px] mx-auto lg:pb-[71px] pb-[20px]' src={logo} alt="" />
                      <h2 className='lg:text-[24px] font-bold pb-[17px] text-[20px]'>Mechelin Star Quality</h2>
                      <p className='lg:text-[20px] lg:pb-[64px] pb-[25px]'>Lorem ipsum dolor sit enim  con
                        sect aetur adipisicing  convallis
                          lorems ipsum nosturd sit amet</p>
                      <div className="">
                          <a href="">
                          View all services 
                          </a>
                      </div>
                    </div>
                  <div className=" w-[302px] text-center mx-auto pt-[60px]"> 
                      <img className='w-[130px] mx-auto lg:pb-[71px] pb-[20px]' src={logo} alt="" />
                      <h2 className='lg:text-[24px] font-bold pb-[17px] text-[20px]'>Mechelin Star Quality</h2>
                      <p className='lg:text-[20px] lg:pb-[64px] pb-[25px]'>Lorem ipsum dolor sit enim  con
                        sect aetur adipisicing  convallis
                          lorems ipsum nosturd sit amet</p>
                      <div className="">
                          <a href="">
                          View all services 
                          </a>
                      </div>
                    </div>
                  <div className=" w-[302px] text-center mx-auto pt-[60px]"> 
                      <img className='w-[130px] mx-auto lg:pb-[71px] pb-[20px]' src={logo} alt="" />
                      <h2 className='lg:text-[24px] font-bold pb-[17px] text-[20px]'>Mechelin Star Quality</h2>
                      <p className='lg:text-[20px] lg:pb-[64px] pb-[25px]'>Lorem ipsum dolor sit enim  con
                        sect aetur adipisicing  convallis
                          lorems ipsum nosturd sit amet</p>
                      <div className="">
                          <a href="">
                          View all services 
                          </a>
                      </div>
                    </div>
              </div>
          </Container>
    </div>
  )
}

export default Service
