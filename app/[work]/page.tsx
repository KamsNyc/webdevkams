'use client'
// Import necessary modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define the Project interface
interface Project {
  title: string;
  image: string;
  alt: string;
  projectLink: string;
  context: string;
  tags: string[];
  _id: string;
}

function Page({ params }: any) {

  const { work } = params;
  const [project, setProject] = useState<Project>();


  const fetchProject = async () => {
    try {

      const res = await axios.get(`http://localhost:8000/project/${work}`);
      // Set the project state with the fetched data
      setProject(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  };


  useEffect(() => {
    fetchProject();
  }, []); 

  return (
    <div className='text-black'>
      {/* PROJECT OVERVIEW CONTAINER */}
      {project && (
        <div key={project._id} className=" bg-gray-300 mx-4 md:mx-[64px] 2xl:mx-[256px]">
          {/* MAIN IMAGE WITH A VIDEO IMAGE */}
          <h1>{project.title}</h1>
        </div>
      )}
    </div>
  );
}

export default Page;
