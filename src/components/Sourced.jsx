import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Sourced = () => {
  return (
      <div className='lg:py-[100px] py-[30px] px-3 bg-[#FA0606]'>
          <Container>
              <div className=" lg:flex lg:justify-between justify-center px-3 lg:px-0">
                  <div className="lg:w-[80%]">
                      <h3 className='xl:text-[40px] font-bold text-[30px]'>Our Ingredients Are Sustainably Sourced</h3>
                      <p className='xl:text-[20px] font-nomal text-white pt-[41px] text-[16px]'>Loremipsumdoloremearsit ametconsectoradicipingconsectene</p>
                  </div>
                  <div className="lg:w-[20%] lg:pt-[86px] pt-[46px]">
                      <button className='xl:pt-[23px] xl:pb-[20px] xl:pr-[51px] xl:pl-[34px] pt-[16px] pb-[11px] pr-[25px] pl-[16px] bg-white font-bold text-black lg:text-[24px]'>View Menu </button>
                  </div>
              </div>
          </Container>
      
    </div>
  )
}

export default Sourced
