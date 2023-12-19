import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactFooter() {
  return (
    <section className="h-full bg-[--brand-color]">
      {/* SCROLLING DIV CONTAINER */}
      <div id="contact" className="flex items-center gap-10 whitespace-nowrap">
        <div className="">
          <h1 className="text-[160px] lg:text-[224px] font-bold md:font-extralight text-white pl-10 lg:pl-16 flex items-center gap-6">
            <svg
              width="192"
              height="20"
              viewBox="0 0 192 20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:flex"
            >
              <rect width="192" height="20" fill="white" />
            </svg>
            KAMEL SINGH
          </h1>
        </div>

        <div className="">
          <h1 className="text-[160px] lg:text-[224px] font-extralight text-white pl-10 lg:pl-16 flex items-center gap-6">
            <svg
              width="192"
              height="20"
              viewBox="0 0 192 20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="192" height="20" fill="white" />
            </svg>{" "}
            KAMEL SINGH
          </h1>
        </div>
      </div>

      {/* CONTACT */}
      <section className=" lg:flex items-center justify-center gap-4 md:gap-[164px] mt-2 md:mt-10">
        {/* LEFTSIDE */}

        <div className=" text-center lg:text-normal lg:flex items-center justify-center gap-[46px]">
          <div className="flex items-center justify-center">
          <Image
            src={"https://i.pravatar.cc/150"}
            alt="r"
            width={150}
            height={150}
            className="w-[150px] h-[150px] rounded-full bg-[--brand-color] mb-6 lg:mb-0"
          />
          </div>
          <h4 className="text-[64px] mb-8 lg:mb-0 font-bold text-white leading-[3.75rem]">
            LET’S START<br></br>COLLABORATE
          </h4>
        </div>

        {/* RIGHTSIDE */}
        <div className=" space-y-5">
          {/* email button */}
          <button className="flex items-center gap-[24px] bg-transparent border-[1.6px] border-white py-[27px] px-[32px] flex-1 rounded-[48px] text-white font-bold text-[14px]">
            KAMNYC@OUTLOOK.COM
            <span>
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.8279e-06C15 5.52285 19.4772 10 25 10"
                  stroke="#fff"
                  stroke-width="1.6"
                />
                <path
                  d="M15 20C15 14.4772 19.4772 10 25 10"
                  stroke="#fff"
                  stroke-width="1.6"
                />
                <path d="M25 10L0 10" stroke="#fff" stroke-width="1.6" />
              </svg>
            </span>
          </button>
          {/* linkdin */}
          <button className="flex items-center gap-[24px] bg-transparent border-[1.6px] border-white py-[27px] px-[32px] flex-1 rounded-[48px] text-white font-bold text-[14px]">
            Hire Me
            <span>
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.8279e-06C15 5.52285 19.4772 10 25 10"
                  stroke="#fff"
                  stroke-width="1.6"
                />
                <path
                  d="M15 20C15 14.4772 19.4772 10 25 10"
                  stroke="#fff"
                  stroke-width="1.6"
                />
                <path d="M25 10L0 10" stroke="#fff" stroke-width="1.6" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* ------------- FOOTER?? ----------------------- */}
      <section className="mt-8 py-2 lg:py-0 lg:mt-[100px] px-4 lg:px-[48px] flex items-center justify-between">
        {/* HEADING */}
        <h3 className="text-white font-extrabold tracking-widest text-[14px]">
          ©WEBDEVKAMS
        </h3>

        {/* MENU LINKS */}
        <ul className="text-white hidden md:flex items-center gap-[24px]">
          <Link href={"#about"}>ABOUT</Link>
          <Link href={"#works"}>WORKS</Link>
          <Link href={"#testimonials"}>TESTIMONIALS</Link>
          <Link href={"#contact"}>CONTACT</Link>
        </ul>

        {/* SOCIAL ICONS CONTAINER */}
        <div className="">
          {/* FLEX CONTAINER */}
          <section className="flex items-center justify-evenly w-full h-full gap-8">
            {/* WEBSITE ICON */}
            <Image
              className="cursor-pointer hover:scale-105 duration-300 ease-in"
              src={"/Website.svg"}
              alt="website"
              width={35}
              height={35}
            />
            <Image
              className="cursor-pointer hover:scale-105 duration-300 ease-in"
              src={"/twitter.svg"}
              alt="twitter"
              width={35}
              height={35}
            />
            <Image
              className="cursor-pointer hover:scale-105 duration-300 ease-in"
              src={"/LinkedIn.svg"}
              alt="linkedin"
              width={35}
              height={35}
            />
          </section>
        </div>

        {/* COPYRIGHT SPAN */}
        <span className="text-white text-[14px] font-bold">2023</span>
      </section>
    </section>
  );
}

export default ContactFooter;
