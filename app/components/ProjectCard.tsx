"use client";
import { Badge } from '@/components/ui/badge';
import { BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

import Image from 'next/image';
import { useState } from 'react';


type Project = {
  _id: string;
  title: string;
  image: string;
  alt: string;
  projectLink: string;
  context: string;
  tags: string[];
};

interface ProjectCardProps {
  projects: Project[];
}

function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <div className="">
      {projects &&
        projects.map((project, index) => (
          <div key={index} className="">
            {/* ICON CARD CONTAINER */}
            <div className="mt-[48px] md:flex items-center mx-0 md:mx-[64px] 2xl:mx-[256px] hover:border rounded-xl cursor-pointer">
              {/* LEFT IMAGE CONTAINER */}
              <div className="h-full w-full md:w-1/2 overflow-hidden bg-gray-50 rounded-xl flex items-center justify-center p-4 lg:p-8">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="rounded-md object-cover scale-150"
                />
              </div>
              {/* RIGHT SIDE CONTAINER */}
              <div className="h-full w-full md:w-1/2 p-4 lg:p-12 ">
                <h1 className="text-[24px] font-bold flex items-center gap-4 mt-4">
                  {project.title}
                  <span>
                    {/* OPEN LINK */}
                    <div className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer">
                      <Link href={project.projectLink}>
                        <BiLinkExternal size={20} />
                      </Link>
                    </div>
                  </span>
                </h1>
                <p className="text-[--dark-gray] text-[18px] leading-6 my-[8px]">
                  {project.context}
                </p>
                {/* VIEW PROJECT IN DETAILS */}
                <div className="">
                <Sheet>
                <SheetTrigger id="container" className='h-full w-full rounded-xl flex justify-end'>
                    <Button className="bg-[#1821F8] uppercase w-[100px]">Info</Button>
                </SheetTrigger>
                 {/* SIDE OPEN PROJECT PAGE */}
        <SheetContent className='w-full px-4'>
          <ScrollArea className='h-full w-full '>
            <SheetHeader>
              <SheetTitle className='text-white text-right text-xs hover:text-[#1821F8] hover:scale-105 duration-300 ease-in pr-4 font-normal'><Link href={'/work'}>back to all projects</Link></SheetTitle>
              {/* BORDER */}
              <div className="border-b border-color py-2 px-2"></div>
  
              {/* SUBTITLE (SHORT DESCRIPTION) */}
              <h1 className='font-bold text-[24px] text-[#1821F8]'>{project.title}</h1>
              <p className='link-color text-[14px] leading-5'>{project.context}</p>
  
              {/* COVER IMAGE */}
              <Image src={project.image} alt={`${project.alt}`} width={450} height={100} className='max-h-[250px] w-full rounded-2xl px-2 object-fill' />
  
              <SheetDescription className="h-full text-left px-2">
                <div className="overflow-y-auto h-full">
                  {/* WEBSITE */}
                  <p className='text-base text-center cursoyr-pointer duration-300 ease-in-out hover:text-[#1821F8]'>{project.projectLink}</p>
                  {/* ABOUT */}
                  <h2 className='text-white text-base py-2 font-light'>About</h2>
                  <p className='text-[14px] hover:text-black'>{project.context}</p>
  
                  {/* BORDER */ }
                  <div className="border-b border-color py-2"></div>
  
                  {/* TECHNOLOGY */ }
                  <h2 className='text-[#1821F8] text-base py-2 font-light'>Technologies</h2>
                  {/* BADGES */}
                <div className="grid grid-cols-4 grid-row-3 gap-x-6">
                  {project.tags.map((item, index) => (
                    <div key={index}>
                      <Badge
                        className="flex-[25%] flex items-center justify-center text-gray-600 font-bold uppercase"
                        variant="secondary"
                      >
                        {item}
                      </Badge>
                    </div>
                  ))}
                </div>
                  {/* BORDER */ }
                  <div className="border-b border-color py-2"></div>
  
                </div>
              </SheetDescription>
  
              {/* VIEW WEBSITE */}
              <div className="flex flex-col md:flex-row w-full gap-8 pt-4 px-4">
                <Button className='w-full md:w-auto text-black' variant="outline"><Link href={`${project.projectLink}`}>View Website</Link></Button>
                <Button className='w-full md:w-auto text-black' variant="outline"><Link href={`${project.projectLink}`}>Github</Link></Button>
              </div>
            </SheetHeader>
          </ScrollArea>
        </SheetContent>
      </Sheet>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProjectCard;