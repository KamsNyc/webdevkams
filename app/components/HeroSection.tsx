import Image from "next/image";
import React from "react";


function HeroSection() {
  return (
    <section className="bg-[--brand-color] h-[880px] w-full relative  overflow-hidden">
      {/* z INDEX [2] CONTAINER */}
      <section className="z-[2] pt-44 lg:pt-0 lg:flex items-center h-full w-full leading-[9rem] lg:leading-none">
        {/* FIRST NAME */}
        <div className="lg:mb-52 w-full">
          <h1 className="text-[160px] lg:text-[224px] font-black lg:font-semibold text-white pl-10 lg:pl-16">
            KAMEL
          </h1>
        </div>

        {/* LAST NAME */}
        <div className="lg:mt-52 w-full text-left lg:text-right z-[4] overflow-hidden">
          <h1 className="text-[160px] lg:text-[224px] font-black lg:font-semibold text-white flex items-center lg:pr-16">
            <span className="hidden lg:block lg:mr-[48px]">
              <svg
                width="192"
                height="20"
                viewBox="0 0 192 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="192" height="20" fill="white" />
              </svg>
            </span>
            SINGH
          </h1>
        </div>

        {/* SOCIAL ICONS CONTAINER */}
        <div className="z-[5] absolute bottom-12 lg:bottom-[72px] left-0 lg:left-[98px] h-[68px] w-full lg:w-[68px] lg:h-[250px]">
          {/* FLEX CONTAINER */}
          <section className="flex lg:flex-col items-center justify-evenly h-full px-8 lg:px-0 lg:py-8">
            {/* WEBSITE ICON */}
            <Image className="cursor-pointer hover:scale-105 duration-300 ease-in" src={'/Website.svg'} alt="website" width={35} height={35} />
            <Image className="cursor-pointer hover:scale-105 duration-300 ease-in" src={'/twitter.svg'} alt="twitter" width={35} height={35} />
            <Image className="cursor-pointer hover:scale-105 duration-300 ease-in" src={'/LinkedIn.svg'} alt="linkedin" width={35} height={35} />
          </section>
        </div>

        {/* LET&apos;S TALK CONTAINER DESKTOP */}
        <div className="lg:absolute z-[8] right-16 bottom-[50px]">
          <section className="hidden lg:flex items-center lg:justify-evenly lg:max-w-[616px] lg:max-h-[162px] gap-10">
            {/* SHORT BILB */}
            <div className="uppercase text-[24px] text-white flex flex-col gap-y-2 whitespace-nowrap z-10 font-light">
              <p>Full Stack Developer</p>
              <p>MERN Stack Specialist</p>
              <p>Web Dev + Design Enthusiast</p>
              <p>E-commerce Owner</p>
            </div>
            {/* CONTACT BUTTON */}
            <div className="bg-white rounded-full px-[24px] py-[48px] flex items-center justify-center cursor-pointer hover:scale-105 duration-300 ease-out font-bold">Let&apos;s Talk</div>
          </section>
        </div>

        {/* LET&apos;S TALK CONTAINER MOBILE */}
        <div className="absolute lg:hidden z-[8] right-0 bottom-[160px] w-full">
          <div className="whitespace-nowrap flex items-center justify-center gap-4 text-white">
            <p className="text-[14px] md:text-[16px]">Full Stack Developer</p>
            <p className="text-[14px] md:text-[16px]">MERN Stack</p>
            <p className="text-[14px] md:text-[16px]">Web Dev + Design</p>
            <p className="text-[14px] md:text-[16px]">E-commerce Owner</p>
          </div>
        </div>
      </section>

      {/* SHADOW IMAGE */}
      <div className="max-w-[613px] h-auto ml-[30%] lg:ml-[24%] flex items-center justify-center">
        <img src={"/shadow.svg"} alt="test" className="absolute bottom-0 z-[1]" />
      </div>
    </section>
  );
}

export default HeroSection;
