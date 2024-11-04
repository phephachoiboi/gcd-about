import React from "react";
import "../App.css";
import BgIllustrationSectionMission from "../assets/images/BgIllustrationSectionMission.png";

const SectionMission = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div
          className="flex lg:flex-row flex-col max-w-[1137px] w-full h-auto mt-[106px] mx-auto lg:justify-between
    lg:items-start items-center"
        >
          {/* Left side for title text */}
          <div className="flex flex-col max-w-[545px] w-full h-auto lg:mt-[11px] mt-8 lg:px-0 md:px-6 px-4 lg:items-start items-center lg:text-left text-center">
            <div className="max-w-[95px] w-full h-[20px] font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE]">
              <p className="m-0">Our Mission</p>
            </div>
            <div
              className="max-w-[545px] w-full h-[94px] font-poppins font-semibold lg:text-[36px] text-[28px] mt-[12px]
           lg:leading-[45px] md:leading-[38px] leading-[30px] text-[#091156] "
            >
              <p className="m-0">
                Special & premium service
                <br />
                to any clients
              </p>
            </div>
            <div className="max-w-[483px] w-full h-[157px] font-poppins font-normal text-[16px] lg:leading-[24px] text-[#8B8B8B] tracking-[0.1em] mt-[9px]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Elit, quam suscipit purus donec
                <br />
                amet. Egestas volutpat facilisi eu libero.
                <br />
                <br />
                Nunc, ipsum ornare mauris sit quam quis enim.
                <br />
                Varius tellus in suspendisse placerat.
              </p>
            </div>
          </div>
          {/* Right side for picture */}
          <div className="max-w-[475px] w-full h-auto lg:mt-0 md:mt-5 mt-[90px]">
            <img src={BgIllustrationSectionMission} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionMission;
