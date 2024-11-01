import React from "react";
import "../App.css";
import UnsplashSectionAbout2 from "../assets/images/UnsplashSectionAbout2.png";
import PlayButtonAbout from "../assets/images/PlayButtonAbout.png";

const SectionAbout = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 px-4">
      <div className="w-full">
        <div className="flex flex-col max-w-[1140px] w-full h-auto mx-auto lg:mt-[125px] md:mt-[100px] mt-[80px]">
          {/* Upper part for title text */}
          <div className="flex flex-col lg:mx-0 mx-auto md:text-left text-center md:items-start items-center">
            <div className="max-w-[50px] w-full h-[20px] font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE]">
              <p className="m-0">About</p>
            </div>
            <div
              className="max-w-[732px] w-full h-[97px] md:mt-[12px] mt-[24px] font-poppins font-semibold text-[36px]
             md:leading-[45px] sm:leading-[36px] leading-[34px] text-[#091156]"
            >
              <p className="m-0">
                We are a leading beauty clinic that has
                <br />
                been around since 2002
              </p>
            </div>
            <div className="max-w-[680px] w-full h-[56px] lg:mt-[12px] md:mt-[20px] mt-[60px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0.1em] text-[#8B8B8B]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
                <br />
                purus sit amet luctus venenatis
              </p>
            </div>
          </div>
          {/* Lower part for banner & button solution 1 */}
          <div
            className="relative lg:mt-[58px] mt-[77px] max-w-[1140px] w-full h-[540px] bg-cover object-cover lg:rounded-none rounded-[25px]
            flex items-center justify-center"
            style={{
              backgroundImage: `url(${UnsplashSectionAbout2})`,
              backgroundPosition: "center",
            }}
          >
            <button className="">
              <img src={PlayButtonAbout} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionAbout;
