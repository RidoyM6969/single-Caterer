import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import Vector from "../assets/Vector.png";
import { BsListNested } from "react-icons/bs";
import { GiCrossedSabres } from "react-icons/gi";
import { IoMdCut } from "react-icons/io";

const Navber = () => {

  let [list, setlist] = useState(false)

  let handelList = () => {
  setlist(!list)
}

  return (
    <div className="lg:py-[25px] xl:py-[50px] py-[10px] pl-2  ">
      <Container>
        <div className="flex items-center justify-between ">
          <div className="lg:w-[20%]">
            <img className="w-[130px] xl:w-[180px]" src={logo} alt="" />
          </div>
          <div className={`lg:flex lg:w-[80%] lg:gap-x-4 xl:flex items-center justify-center xl:gap-x-3 xl:static lg:static  ${list== true? "absolute top-[67px] left-0 w-full text-center duration-300 ease-in-out ":"absolute top-[67px] left-[-1000px] w-full duration-300 ease-in-out"}`}>
            <ul className="lg:flex  lg:py-[12px] lg:px-[100px] xl:flex items-center lg:gap-x-[35px] bg-[#D9D9D9] xl:px-[220px] xl:py-[14px] capitalize ">
              <li className="hover:text-[#FD1212] hover:translate-x-[-4px] lg:py-0 py-2">home</li>
              <li className="hover:text-[#FD1212] hover:translate-x-[-4px] lg:py-0 py-2">About Us</li>
              <li className="hover:text-[#FD1212] hover:translate-x-[-4px] lg:py-0 py-2">Services</li>
              <li className="hover:text-[#FD1212] hover:translate-x-[-4px] lg:py-0 py-2">Our Menus</li>
              <li className="hover:text-[#FD1212] hover:translate-x-[-4px] lg:py-0 py-2">Blog</li>
            </ul>
          <div className='text-white  flex items-center justify-center lg:py-[12px] lg:px-[26px] xl:py-[14px] xl:px-[26px] bg-[#FD1212] gap-x-1 '>
            <IoMdCut/>
            <h3 className="">Order Today!</h3>
          </div>
          </div>
          <button className="absolute top-[28px] right-[45px] text-[22px] font-bold lg:hidden " onClick={handelList}>
          {list== true? <GiCrossedSabres/>:<BsListNested/>}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
