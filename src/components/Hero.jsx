import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} sm:px-22 w-full`}
    >
      {/* Left Content */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-gray-200`}>
            <span className="text-white"> Currently</span> Learning{" "}
            <span className="text-white">Full Stack</span> Development
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold sm:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Tahir Zaka <br />
            <span className="text-gradient">React Developer</span>
          </h1>
          <div className="sm:flex hidden md:mr-4">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Hi there! I'm Tahir Zaka, a tech enthusiast and a React developer,
          currently pursuing my degree in Computer Science at University of
          Engineering and Technology, Lahore.
        </p>
      </div>

     
   {/* Right Side Image */}
<div
  className={`flex-1 flex justify-end items-center md:my-0 my-10 relative md:pr-0 sm:pr-0 pr-0`}
>
  <img
    src={robot}
    alt="robot"
    className="w-[100%] h-[100%] relative z-[5] object-contain md:max-w-[700px]"
  />
  {/* Gradient overlays */}
  <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
  <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
  <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
</div>

<div className={`sm:hidden ${styles.flexCenter}`}>
          <GetStarted />
</div>

    </section>
  );
};

export default Hero;
