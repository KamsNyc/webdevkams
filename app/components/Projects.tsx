import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {BiLinkExternal} from "react-icons/bi"
import ProjectCard from './ProjectCard';

function Projects() {

  return (
    <section className="w-full h-full my-[64px] md:my-[96px] lg:my-[120px]">
      {/* HEADING */}
      <div id="works" className="flex items-center">
        <p className="text-[24px] text-[--brand-color] uppercase mx-4 md:mx-[64px] 2xl:mx-[256px] leading-7 w-full">
          selected projects
          <span className="text-[18px] text-black flex items-center font-medium normal-case w-full">
            Current Selected Projects:
          </span>
        </p>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
       
    </section>
  );
}

export default Projects;
