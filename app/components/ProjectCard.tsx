"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { BiLinkExternal } from "react-icons/bi";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  image: string;
  alt: string;
  projectLink: string;
  context: string;
  tags: string[];
  _id: string;
}

function ProjectCard() {
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);

  const FetchProject = async () => {
    const res = await axios.get("http://localhost:8000/project");
    setProjects(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    FetchProject();
  }, []);
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
                  className="rounded-md object-cover scale-150 "
                />
              </div>
              {/* RIGHT SIDE CONTAINER */}
              <div className="h-full w-full md:w-1/2 p-4 lg:p-12 ">
                <h1 className="text-[24px] font-bold flex items-center gap-4">
                  {project.title}
                  <span>
                    {" "}
                    {/* OPEN LINK */}
                    <div className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer">
                      <Link href={project.projectLink}>
                        <BiLinkExternal size={20} />
                      </Link>
                    </div>
                  </span>
                </h1>
                <p className="text-[--dark-gray] text-[18px] leading-6 my-[24px]">
                  {project.context}
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
                  {/* {
          List && List.map( (item, index) => (
            <div key={index}>
       
                <Badge className="flex-[25%] flex items-center justify-center text-gray-600 font-semibold uppercase" variant="secondary">{item.name}</Badge>
                </div>
          ))
          } */}

                  {project.tags.map((item, index) => (
                    <div key={index}>
                      {
                        <Badge
                          className="flex-[25%] flex items-center justify-center text-gray-600 font-bold uppercase"
                          variant="secondary"
                        >
                          {item}
                        </Badge>
                      }
                    </div>
                  ))}
                </div>

                {/* VIEW PROJECT IN DETAILS */}
                <div className="mt-5">
                  <Button className=""><Link href={`/${project._id}`}>View More</Link></Button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProjectCard;
