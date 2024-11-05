import React from "react";
import "../App.css";
import Logo1 from "../assets/images/LOGO1.png";
import Logo2 from "../assets/images/LOGO2.png";
import Logo3 from "../assets/images/LOGO3.png";
import Logo4 from "../assets/images/LOGO4.png";
import Logo5 from "../assets/images/LOGO5.png";

const SectionClient = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div className="flex flex-col max-w-[962px] w-full h-auto mt-[123px] mx-auto ">
          {/* Upper part for title text */}
          <div className="flex flex-col max-w-[848px] w-full lg:mx-0 lg:ml-[44px] mx-auto text-center">
            <div className="w-full font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE] text-center">
              <p className="m-0">Our Clients</p>
            </div>
            <div className="w-full h-[53px] mt-[12px] font-poppins font-semibold lg:text-[36px] text-[30px] lg:leading-[45px] leading-[38px] text-[#091156]">
              <p className="m-0">Well-known agencies</p>
            </div>
            <div className="w-full h-[31px] lg:mt-[12px] mt-[14px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0.1em] text-[#8B8B8B]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          {/* Lower part for logos */}
          <div className="container mx-auto mt-[94px]">
            <div
              className="grid justify-center items-center grid-cols-1 gap-4
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:flex lg:flex-row lg:items-center lg:justify-between
        w-full max-w-[962px] mx-auto"
            >
              {/* First row for md screens (3 items) */}
              <div className="w-[147px] h-[80px] lg:mt-[4px] mt-0 lg:mx-0 mx-auto sm:col-span-1 md:col-span-1">
                <img
                  src={Logo1}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-[147px] h-[80px] lg:mt-[4px] mt-0 lg:mx-0 mx-auto sm:col-span-1 md:col-span-1">
                <img
                  src={Logo2}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-[147px] h-[80px] lg:mt-[4px] mt-0 lg:mx-0 mx-auto  sm:col-span-2 md:col-span-1">
                <img
                  src={Logo3}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Second row for md screens (2 items) */}
              <div className="w-[147px] h-[84px] lg:ml-[5px] lg:mx-0 mx-auto  sm:col-span-1 md:col-span-1">
                <img
                  src={Logo4}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-[147px] h-[80px] lg:mt-[4px] mt-0  lg:mx-0 mx-auto  sm:col-span-1 md:col-span-4">
                <img
                  src={Logo5}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          {/* <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[58px] max-w-[962px] w-full h-auto mt-[94px] mx-auto">
            <div className="w-[147px] h-[80px] mt-[4px] flex justify-center">
              <img src={Logo1} alt="" />
            </div>
            <div className="w-[147px] h-[80px] lg:ml-[-5px] ml-0 mt-[4px] flex justify-center">
              <img src={Logo2} alt="" />
            </div>
            <div className="w-[147px] h-[80px] lg:ml-[-5px] ml-0 mt-[4px] flex justify-center">
              <img src={Logo3} alt="" />
            </div>
            <div className="w-[147px] h-[84px] flex justify-center">
              <img src={Logo4} alt="" />
            </div>
            <div className="w-[147px] h-[80px] mt-[4px] flex justify-center">
              <img className="m-0" src={Logo5} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default SectionClient;
