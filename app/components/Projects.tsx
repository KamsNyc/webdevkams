'use client'
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import { Button } from '@/components/ui/button';

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await axios.get(`http://localhost:8000/projects?page=${currentPage}`);
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  return (
    <section className="w-full h-full my-[64px] md:my-[96px] lg:my-[120px]">
      {/* HEADING */}
      <div id="works" className="flex items-center justify-between mx-4 md:mx-[64px] 2xl:mx-[256px]">
        <div className="">
        <p className="text-[24px] text-[--brand-color] uppercase  leading-7 w-full">
          selected projects 
          <span className="text-[18px] text-black flex items-center font-medium normal-case w-full">
            Personal / Client Projects:
          </span>
        </p>
        </div>

        {/* CURRENT PAGE */}
        <div className="">
          <span className='font-bold text-[19px]'>PAGE: {currentPage
          }</span></div>
      </div>
      {/* PROJECT CARDS */}
      <ProjectCard projects={projects} />
      {/* PAGINATION BUTTONS */}
      <div className="mt-10 flex justify-center items-center font-bold text-[20px]">
        <Button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="mx-4">{currentPage}</span>
        <Button onClick={() => setCurrentPage((prevPage) => prevPage + 1)} disabled={projects.length < 3}>
          Next
        </Button>
      </div>
    </section>
  );
}

export default Projects;
