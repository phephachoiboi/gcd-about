import React from "react";
import "../App.css";
import BriyanNavalli from "../assets/images/BriyanNavalli.png";
import BellaSeb from "../assets/images/BellaSeb.png";
import LillyAdams from "../assets/images/LillyAdams.png";
import Twitter from "../assets/images/Twitter.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import BubbleSectionAbout from "../assets/images/BubbleSectionAbout.png";

const SectionTeams = () => {
  return (
    <div
      className="relative max-w-[1440px] h-[1533.5px] w-full mt-[-387px] bg-cover object-cover z-[0]"
      style={{
        backgroundImage: `url(${BubbleSectionAbout})`,
      }}
    >
      <div className="flex mt-[523px] lg:px-0 md:px-6 px-4">
        <div className="flex max-w-[1272px] mx-auto w-full h-auto lg:px-0 md:px-4 px-6">
          <div className="flex flex-col  w-full mx-auto items-center lg:px-0 md:px-4 px-6">
            {/* Upper part title */}
            <div
              className="flex flex-col max-w-[848px] lg:w-full h-[148px] mx-auto lg:px-0 md:px-4 px-6
    text-center items-center z-[1]"
            >
              <div
                className="max-w-[160px] w-full h-[20px] mt-0 lg:p-0 font-poppins
      lg:text-[16px] text-[13px] font-semibold leading-[20px] text-center text-[#FF64AE]"
              >
                <p className="m-0">Professional Teams</p>
              </div>
              <div
                className=" max-w-[732px] w-full h-[53px] mt-[12px] font-poppins
      lg:text-[36px] md:text-[28px] text-[24px] font-semibold lg:leading-[45px] md:leading-[38px] leading-[30px] text-center text-[#091156]"
              >
                <p className="m-0">The Professional expert</p>
              </div>
              <div
                className=" max-w-[848px] w-full h-[51px] lg:mt-[12px] md:mt-[14px] mt-[40px] font-poppins
      lg:text-[16px] text-[13px] font-normal lg:leading-[24px] md:leading-[22px] leading-[18px] tracking-[0.1em] text-[#8B8B8B]"
              >
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam.
                </p>
              </div>
            </div>

            {/* Lower part box section */}
            <div
              className="flex flex-wrap max-w-[1272px] w-full h-auto lg:mt-[87px] md:mt-2
           mx-auto lg:px-0 md:px-1 justify-center"
            >
              {/* Left box */}
              <div
                className="flex h-[626px] rounded-[42px] lg:px-[77px] px-0
       justify-center z-[1] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col max-w-[270px] w-full h-[439px] mt-[91px] items-center">
                  <div className="w-[146px] h-[146px]">
                    <img
                      className="w-full h-full object-contain"
                      src={BriyanNavalli}
                      alt=""
                    />
                  </div>
                  <div
                    className="max-w-[69px] w-full h-[20px] mt-[53px] font-poppins
        lg:text-[16px] font-semibold lg:leading-[20px] md:leading-[18px] leading-4 text-[#FF64AE]"
                  >
                    <p className="m-0">Surgeon</p>
                  </div>
                  <div
                    className="max-w-[263px] w-full h-[37px] mt-[15px] font-poppins
        lg:text-[18px] md:text-[16px] text-[14px] font-semibold leading-[22.5px] text-center text-[#091156]"
                  >
                    <p className="m-0">Briyan Nevalli</p>
                  </div>
                  <div className="char-espanol-3">
                    <p>
                      Lorem ipsum dolor sit amet, <br />
                      consectetur adipiscing elit ut <br />
                      aliquam, purus sit
                      <br />
                    </p>
                  </div>
                  <div className="social-media">
                    <div className="twitter">
                      <img src={Twitter} alt="" />
                    </div>
                    <div className="facebook">
                      <img src={Facebook} alt="" />
                    </div>
                    <div className="instagram">
                      <img src={Instagram} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Box */}
              <div
                className="flex h-[626px] rounded-[42px] lg:px-[77px] px-0
       justify-center z-[1] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col max-w-[270px] w-full h-[439px] mt-[91px] items-center">
                  <div className="w-[146px] h-[146px]">
                    <img className="m-0" src={BellaSeb} alt="" />
                  </div>
                  <div
                    className="max-w-[117px] w-full h-[20px] mt-[53px] font-poppins
          md:text-[16px] text-[12px] font-semibold lg:leading-[20px] md:leading-[18px] leading-4 text-[#FF64AE]"
                  >
                    <p className="m-0">Dermatologist</p>
                  </div>
                  <div
                    className="max-w-[263px] w-full h-[37px] mt-[15px] font-poppins
          lg:text-[18px] md:text-[16px] text-[14px] font-semibold leading-[22.5px] text-center text-[#091156]"
                  >
                    <p className="m-0">Bella sebastian</p>
                  </div>
                  <div className="char-espanol-3">
                    <p>
                      Lorem ipsum dolor sit amet, <br />
                      consectetur adipiscing elit ut <br />
                      aliquam, purus sit
                      <br />
                    </p>
                  </div>
                  <div className="social-media">
                    <div className="twitter">
                      <img src={Twitter} alt="" />
                    </div>
                    <div className="facebook">
                      <img src={Facebook} alt="" />
                    </div>
                    <div className="instagram">
                      <img src={Instagram} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right box */}
              <div
                className="flex h-[626px] rounded-[42px] lg:px-[77px] px-0  justify-center z-[1]
             hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col max-w-[270px] w-full h-[439px] mt-[91px] items-center">
                  <div className="w-[146px] h-[146px]">
                    <img
                      className="w-full h-full object-contain"
                      src={LillyAdams}
                      alt=""
                    />
                  </div>
                  <div
                    className="max-w-[106px] w-full h-[20px] mt-[53px] font-poppins
        md:text-[16px] text-[12px] font-semibold lg:leading-[20px] md:leading-[18px] leading-4 text-[#FF64AE]"
                  >
                    <p className="m-0">Stylist expert</p>
                  </div>
                  <div
                    className="max-w-[263px] h-[37px] mt-[15px] font-poppins
        lg:text-[18px] md:text-[16px] text-[14px] font-semibold leading-[22.5px] text-center text-[#091156]"
                  >
                    <p className="m-0">Lilly Adams</p>
                  </div>
                  <div className="char-espanol-3">
                    <p>
                      Lorem ipsum dolor sit amet, <br />
                      consectetur adipiscing elit ut <br />
                      aliquam, purus sit
                      <br />
                    </p>
                  </div>
                  <div className="social-media">
                    <div className="twitter">
                      <img src={Twitter} alt="" />
                    </div>
                    <div className="facebook">
                      <img src={Facebook} alt="" />
                    </div>
                    <div className="instagram">
                      <img src={Instagram} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTeams;
