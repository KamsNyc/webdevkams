import React from 'react'

function ContactFooter() {
  return (
    <section className='h-[878px] bg-[--brand-color]'>
        {/* SCROLLING DIV CONTAINER */}
        <div className="flex items-center gap-10 whitespace-nowrap">
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

    </section>
  )
}

export default ContactFooter
