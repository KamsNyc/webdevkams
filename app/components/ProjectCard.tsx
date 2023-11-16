import Image from 'next/image'
import React from 'react'
import { Badge } from "@/components/ui/badge";
import {BiLinkExternal} from "react-icons/bi"

  const List = [
    { name: "React" },
    { name: "Next.js" },
    { name: "Typescript" },
    { name: "PostgreSQL" },
    { name: "Tailwindcss" },
    { name: "Figma" },
    { name: "Cypress" },
    { name: "Storybook" },
    { name: "Git" },
  ];


function ProjectCard() {
  return (
    <section>
      {/* ICON CARD CONTAINER */}
      <div className="mt-[48px] md:flex items-center mx-0 md:mx-[64px] 2xl:mx-[256px]">
        {/* LEFT IMAGE CONTAINER */}
        <div className="h-full w-full md:w-1/2 bg-gray-50 rounded-xl flex items-center justify-center p-4 lg:p-8">
          <img
            src="/ProjectPic.png"
            alt="Image"
            className="rounded-md object-cover"
          />
        </div>
        {/* RIGHT SIDE CONTAINER */}
        <div className="h-full w-full md:w-1/2 p-4 lg:p-12 ">
          <h1 className="text-[24px] font-bold flex items-center gap-4">Fiskil<span> {/* OPEN LINK */}
            <div className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer">
              < BiLinkExternal size={20} />
            </div></span></h1>
          <p className="text-[--dark-gray] text-[18px] leading-6 my-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          {/* MAPPING BUTTONS */}
          {/* {List &&
            List.map((item) => (
              <section key={item.name} className="grid grids-cols-4"> */}
                {/* BADGES */}
                {/* <Badge className="flex-[25%]" variant="secondary">{item.name}</Badge>
                </section>
            // ))} */}
            {/* BADGES */}
            <div className="grid grid-cols-4 grid-row-3 gap-x-6 gap-y-2">
          {
          List && List.map( (item, index) => (
            <div key={index}>
             {/* BADGES */}
                <Badge className="flex-[25%] flex items-center justify-center text-gray-600 font-semibold uppercase" variant="secondary">{item.name}</Badge>
                </div>
          ))
          }

            </div>
           
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
