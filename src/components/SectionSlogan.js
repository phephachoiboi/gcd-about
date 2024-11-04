import React from "react";
import "../App.css";
import BgGroupSectionSlogan from "../assets/images/BgGroupSectionSlogan.png";

const SectionSlogan = () => {
  return (
    <div
      className="relative max-w-[1440px] h-[529px] mt-[149.5px] w-full bg-cover object-cover z-[0]"
      style={{
        backgroundImage: `url(${BgGroupSectionSlogan})`,
      }}
    >
      <div className="w-full lg:px-0 md:px-6 px-4">
        <div className="w-full">
          <div className="max-w-[1440px] w-full h-auto mx-auto lg:mt-[0.5px] md:mt-[100px] mt-[80px]">
            {/* Inner part for title text */}
            <div className="flex flex-col lg:mt-[164px] md:mt-[120px] mt-[130px] mx-auto text-center">
              <div className="max-w-[133px] w-full h-[20px] mx-auto font-poppins font-semibold text-[16px] lg:leading-[20px] text-[#ABB4FF]">
                <p className="m-0">Business Slogan</p>
              </div>
              <div
                className="max-w-[732px] w-full h-[97px] lg:mt-[12px] md:mt-[18px] mt-[28px] mx-auto font-poppins font-semibold
              lg:text-[36px] md:text-[30px] text-[27px] lg:leading-[45px] md:leading-[40px] leading-[36px] text-[#FFFFFF]"
              >
                <p className="m-0">
                  Best responsibility and service
                  <br />
                  for our customers
                </p>
              </div>
              <div
                className="max-w-[680px] w-full h-[56px] lg:mt-[12px] md:mt-[18px] mt-[48px] mx-auto font-poppins font-normal
               text-[16px] lg:leading-[24px] md:leading-[22px] leading-[20px] tracking-[0.1em] text-[#CACACA]"
              >
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam,
                  <br />
                  purus sit amet luctus venenatis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionSlogan;
