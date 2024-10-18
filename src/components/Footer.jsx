import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
      <div className='py-[100px] bg-black text-white'>
          <Container>
              <div className="lg:flex justify-between items-center px-3">
                  <div className="lg:w-[20%]">
                      <img className='text-white' src={logo} alt="" />
                  </div>
                  <div className="w-[40%]">
                      <h4 className='py-[29px]'>Service Hours</h4>
                      <p>Monday to Friday : 09:00am to 07:00pm</p>
                      <p>Saturday : 10:30am to 04:00pm</p>
                      <p>Sunday : On Demand</p>
                      <h6>We Are Social</h6>
                  </div>
                  <div className="w-[40%]">
                      <h4 className='py-[29px]'> Contact Us</h4>
                      <p>25 Avada Avenue, FL 12340 USA <br />
                          catering@myavada-domain.com</p>
                      <p>Need our services? Call Today! <br />
                      1 (900) 123 4567</p>
                  </div>
              </div>
              <div className="text-center pt-[102px]">
                  <h6>© 2012 - 2022 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by WordPress</h6>
              </div>
          </Container>
      
    </div>
  )
}

export default Footer
