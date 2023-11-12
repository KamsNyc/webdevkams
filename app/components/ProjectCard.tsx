import Image from 'next/image'
import React from 'react'

function ProjectCard() {
  return (
    <div className="w-[1252px] h-[480px]">
        <div className="w-full h-full flex">
          {/* LEFT SIDE IMAGE */}
          <div className="bg-gray-50 w-1/2 flex items-center justify-center rounded-xl">
              <Image 
              src={'/ProjectPic.png'} 
              alt='2'
              width={480}
              height={384}
              className='rounded-[12px] overflow-hidden'
              />
          </div>
            {/* RIGHT SIDE TEXT */}
            <div className="w-1/2 p-[48px] text-left">
            <h1 className=''>Fiskil</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          </div>
         
        </div>
    </div>
  )
}

export default ProjectCard
