import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'

function ShortAboutMe() {
    return (
      <section className="w-full px-4 md:px-[64px] 2xl:px-[256px] ">
        {/* FLEX CONTAINER */}
        <div id='about' className="block lg:flex items-center justify-between my-[100px] md:my-[120px] lg:my-0 h-[471px] gap-16">
          {/* SHORT ABOUT LEFT SIDE */}
          <div className="w-full md:max-w-[648px] leading-10 ">
            <h1 className="text-[34px] md:text-[36px] text-black font-normal">Hi, I&apos;m Kamel. I began by creating Shopify stores, then ventured into running my own ecommerce business. Now, I focus on both software and website development. Let&apos;s turn your ideas into reality!</h1>
          </div>
          {/* CTA BUTTON */}
          <div className="w-full md:max-w-[300px] flex flex-col gap-y-6 lg:gap-y-12 justify-center py-2 mt-[16px] lg:mt-0">
            {/* TEXT */}
            <p className="text-[18px] pr-[30%] lg:pr-0 font-medium">I am available for short-term, recurring, and full-time work. </p>
            {/* BUTTON */}
            <button className="px-[24px] py-[16px] lg:px-[32px] lg:py-[20px] rounded-[48px] flex items-center gap-4 w-[202px] border-[1.6px] border-[#1F1F1E]/20 hover:border-[#1F1F1E]/40 duration-200 ease-in-out text-black font-bold text-[14px]">CONTACT ME <span><Image src={'/RightArrow.svg'} alt='' width={25} height={20} /></span></button>
          </div>
        </div>
      </section>
    );
  }
  
  export default ShortAboutMe;
