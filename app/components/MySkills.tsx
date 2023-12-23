import Image from 'next/image'
import React from 'react'

function MySkills() {
    const Icons = [
        {name: `Javascript`, icon: '/javascript-original.svg'},
        {name: `React`, icon: '/react-original.svg'},
        {name: `Next.js`, icon: '/nextjs-original.svg'},
        {name: `Node.js`, icon: '/nodejs-original.svg'},
        {name: `Express.js`, icon: '/express-original.svg'},
        {name: `Tailwindcss`, icon: '/tailwindcss-plain.svg'},
        {name: `MongoDb`, icon: '/mongodb-plain.svg'},
        {name: `Figma`, icon: '/figma-original.svg'},
        {name: `Wordpress`, icon: '/wordpress-plain.svg'},
        {name: `Shopify`, icon: '/shopify.svg'},
        {name: `Firebase`, icon: '/firebase-plain.svg'},
        {name: `Typescript`, icon: '/typescript.svg'},
    ]
  return (
    <section className='w-full h-full'> 
    {/* HEADING */}
    <div className="flex items-center justify-start">
        <p className='text-[24px] text-[--brand-color] uppercase mx-4 md:mx-[64px] 2xl:mx-[256px] leading-7 w-full'>Skills<span className='text-[18px] text-black flex items-center font-medium normal-case'>The skills, tools and technologies I am really good at:</span></p>
        </div>
        <div className='my-[24px] md:mt-[48px] gap-y-4 gap-x-3 grid grid-cols-4 grid-rows-3 md:flex item-center px-4 py-2'>
           {
            Icons && Icons.map( (icon) => (
                <div key={icon.name} className='flex flex-col items-center justify-between w-full' >
                 {/* ICON CARD CONTAINER */}
            <div className="">
            {/* ICONS */}
            <Image
            src={icon.icon}
            alt={icon.name}
            width={64}
            height={64}
            className='rounded-md'
            />

            {/* TITLE OF ICON */}
            <h4 className='font-semibold'>{icon.name}</h4>
            </div>
                </div>
            ))
           }
        </div>
    </section>
  )
}

export default MySkills
