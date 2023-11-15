import Image from 'next/image'
import React from 'react'

function ContactFooter() {
  return (
    <section className='h-[878px] bg-[--brand-color]'>
        {/* SCROLLING DIV CONTAINER */}
        <div id='contact' className="flex items-center gap-10 whitespace-nowrap">
            <div className="">
        <h1 className="text-[160px] lg:text-[224px] font-bold md:font-extralight text-white pl-10 lg:pl-16 flex items-center gap-6">
        <svg
                width="192"
                height="20"
                viewBox="0 0 192 20"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className='hidden lg:flex'
              >
                <rect width="192" height="20" fill="white" />
              </svg> KAMEL SINGH
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
              </svg> KAMEL SINGH
          </h1>
          </div>
          </div>
          {/* CONTACT */}
          <section className='flex items-center justify-center gap-4 md:gap-[164px] mt-2 md:mt-10'>
            {/* LEFTSIDE */}

            <div className="flex items-center justify-center gap-[46px]">
          <Image src={'https://i.pravatar.cc/150'} alt='r' width={150} height={150} className="w-[150px] h-[150px] rounded-full bg-[--brand-color] mb-12 lg:mb-0" />
          <h4 className='text-[64px] font-bold text-white leading-[3.75rem]'>LET’S START<br></br>COLLABORATE</h4>
        </div>

            {/* RIGHTSIDE */}
            <div className=" space-y-6">
              {/* email button */}
              <button className='flex items-center gap-[24px] bg-transparent border-[1.6px] border-white py-[27px] px-[32px] flex-1 rounded-[48px] text-white font-bold text-[14px]'>KAMNYC@OUTLOOK.COM <span><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1.8279e-06C15 5.52285 19.4772 10 25 10" stroke="#fff" stroke-width="1.6"/>
<path d="M15 20C15 14.4772 19.4772 10 25 10" stroke="#fff" stroke-width="1.6"/>
<path d="M25 10L0 10" stroke="#fff" stroke-width="1.6"/>
</svg>
</span></button>
            {/* linkdin */}
            <button className='flex items-center gap-[24px] bg-transparent border-[1.6px] border-white py-[27px] px-[32px] flex-1 rounded-[48px] text-white font-bold text-[14px]'>KAMNYC@OUTLOOK.COM <span><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1.8279e-06C15 5.52285 19.4772 10 25 10" stroke="#fff" stroke-width="1.6"/>
<path d="M15 20C15 14.4772 19.4772 10 25 10" stroke="#fff" stroke-width="1.6"/>
<path d="M25 10L0 10" stroke="#fff" stroke-width="1.6"/>
</svg>
</span></button>
              
            </div>
          </section>

    </section>
  )
}

export default ContactFooter
