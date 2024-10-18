import React from 'react'
import food from '../assets/f.png'
import food2 from '../assets/s.png'
import food3 from '../assets/th.png'
import food4 from '../assets/for.png'
import Container from './Container';

const Creating = () => {
  return (
      <div className='py-[100px] bg-black'>
          <Container>
              <div className="text-white text-center">
                  <h5 className='lg:text-[18px] font-normal lg:py-[26px] text-[16px] py-[16px] '>Family owned since 1995</h5>
                  <h2 className='lg:text-[52px] font-bold lg:pb-[41px] text-[42px] pb-[21px]'>Catering Services </h2>
              </div>
              <div className="lg:flex md:flex-wrap md:justify-center lg:justify-between items-center md:flex">
                  <div className="text-center p-3  text-white">
                      <img className='w-[270px] mx-auto' src={food} alt="" />
                      <h3 className='text-[30px] font-bold pt-[58px] '>Catering Holiday</h3>
                      <h4 className='text-[16px] font-bold pt-[18px] '>A blend of delicios and real tasty food  </h4>
                      <p className='text-[18px] font-bold pt-[31px] '>Start $62.50/person </p>
                      <div className="pt-[46px]">
                          
                      <a className='text-[20px] font-bold  ' href="#">View details</a>
                      </div>
                  </div>
                  <div className="text-center p-3  text-white">
                      <img className='w-[270px] mx-auto' src={food} alt="" />
                      <h3 className='text-[30px] font-bold pt-[58px] '>Catering Holiday</h3>
                      <h4 className='text-[16px] font-bold pt-[18px] '>A blend of delicios and real tasty food  </h4>
                      <p className='text-[18px] font-bold pt-[31px] '>Start $62.50/person </p>
                      <div className="pt-[46px]">
                          
                      <a className='text-[20px] font-bold  ' href="#">View details</a>
                      </div>
                  </div>
                  <div className="text-center p-3  text-white">
                      <img className='w-[270px] mx-auto' src={food} alt="" />
                      <h3 className='text-[30px] font-bold pt-[58px] '>Catering Holiday</h3>
                      <h4 className='text-[16px] font-bold pt-[18px] '>A blend of delicios and real tasty food  </h4>
                      <p className='text-[18px] font-bold pt-[31px] '>Start $62.50/person </p>
                      <div className="pt-[46px]">
                          
                      <a className='text-[20px] font-bold  ' href="#">View details</a>
                      </div>
                  </div>
                  <div className="text-center p-3  text-white">
                      <img className='w-[270px] mx-auto' src={food} alt="" />
                      <h3 className='text-[30px] font-bold pt-[58px] '>Catering Holiday</h3>
                      <h4 className='text-[16px] font-bold pt-[18px] '>A blend of delicios and real tasty food  </h4>
                      <p className='text-[18px] font-bold pt-[31px] '>Start $62.50/person </p>
                      <div className="pt-[46px]">
                          
                      <a className='text-[20px] font-bold  ' href="#">View details</a>
                      </div>
                  </div>
                  
              </div>
          </Container>
      
    </div>
  )
}

export default Creating
