import Image from 'next/image'
import React from 'react'


function Projects() {
  return (
    <section className='w-full h-full'>
        {/* TITLE OF SECTION */}
        <div className="">
        <h3 className='uppercase px-4 md:px-[64px] 2xl:px-[256px] text-[--brand-color] text-[24px] leading-6'>Selected<br></br>projects</h3>
        </div>
        {/* PROJECTS CONTAINER */}
       <section className='mt-[96px] mx-4 xl:mx-[256px] bg-[--dark-gray] flex items-center h-[565px] rounded-[32px]'>
        {/* LEFTSIDE TEXT */}
        <div className="flex items-center justify-center h-full w-1/2">
        <div className="w-full md:max-w-[503px]">
        {/* ICON */}
        <Image
        src={'/ReactIcon.svg'}
        alt='react'
        width={70}
        height={70}
        className=' object-cover'
        />
        {/* TITLE */}
        <h3 className='text-white text text-[28px] leading-7 font-bold pt-[24px]'>Subbi –– The free subscriptions manager</h3>
        {/* DESCRIPTION */}
        <p className='text-[16px] h-[263px] text-[--gray] leading-[22px] pt-[16px] pr-8'>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
        <div className="">
        <span className='pt-[16px] text-white font-semibold flex items-center gap-[11px]'>Vist Site <Image src={'/RightProjectContainer.svg'} alt='right arrow icon' width={18} height={12} /></span>
        </div>
        </div>
        </div>
        {/* RIGHT SIDE IMAGE */}
        


       </section>
    </section>
  )
}

export default Projects
