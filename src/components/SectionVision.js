import React from "react";
import "../App.css";
import BgIllustration from "../assets/images/BgIllustration.png";

const SectionVision = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div
          className="flex lg:flex-row flex-col max-w-[1137px] w-full h-auto mt-[112px] mx-auto lg:justify-between
      lg:items-start items-center"
        >
          {/* Left side Illustration 1 image  */}
          <div className="max-w-[475px] w-full h-auto mt-0">
            <img src={BgIllustration} alt="" />
          </div>
          {/* Right side text and button */}
          <div className="flex flex-col max-w-[475px] w-full h-auto lg:mt-[11px] mt-8 lg:px-0 md:px-6 px-4 lg:items-start items-center lg:text-left text-center">
            <div className="max-w-[84px] w-full h-[20px] font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE]">
              <p className="m-0">Our Vision</p>
            </div>
            <div
              className="max-w-[411px] w-full h-[79px] font-poppins font-semibold lg:text-[36px] text-[28px] mt-[12px]
           lg:leading-[45px] leading-[38px] text-[#091156] "
            >
              <p className="m-0">
                Be the best and go
                <br />
                international
              </p>
            </div>
            <div className="max-w-[475px] w-full h-[157px] font-poppins font-normal text-[16px] leading-[24px] text-[#8B8B8B] tracking-[0.1em] mt-[24px]">
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
        </div>
      </div>
    </div>
  );
};
export default SectionVision;
