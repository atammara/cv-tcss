import React from 'react';
import Image from 'next/image';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import Navbar from '../navbar/page';

const projects = [
  {
    name: "Web CLI",
    deployed_url: "https://web-cli-coral.vercel.app/",
    github_url: "https://github.com/atammara/web-cli.git", 
    image_path: "/calculator.png"
  },
  {
    name: "To-Do List",
    image_path: "/todo.png",
    deployed_url: "https://todo-list-eta-ebon.vercel.app/",
    github_url: "https://github.com/atammara/todo-list.git", 
  },
  {
    name: "Static Interactive Resume",
    image_path: "/prt-1.png",
    deployed_url: "https://milestone1-2-henna.vercel.app/",
    github_url: "https://github.com/atammara/hackathon-milestone/tree/main/milestone-1", 
  },
  {
    name: "Shareable Resume Builder",
    image_path: "/port-5.png",
    deployed_url: "https://milestone-5-roan-ten.vercel.app/",
    github_url: "https://github.com/atammara/hackathon-milestone/tree/main/milestone-5",
  },
  {
    name: "Editable Resume Builder",
    image_path: "/prt-4.png",
    deployed_url: "https://milestone-4-ruby.vercel.app/",
    github_url: "https://github.com/atammara/hackathon-milestone/tree/main/milestone-4", 
  },
  {
    name: "Dynamic Resume Builder",
    image_path: "/port3.png",
    deployed_url: "https://milestone-3-liart.vercel.app/",
    github_url: "https://github.com/atammara/hackathon-milestone/tree/main/milestone-3", 
  },
];

const ProjectsGallery = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen text-purple-950 p-6">
      {/* Navbar */}
      <nav className='px-2 text-2xl font-semibold font-serif text-center mb-8'>Achievements Gallery</nav>

      {/* Project Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <div key={project.name} className='bg-gray-200 p-4 hover:bg-pink-200 rounded-xl shadow-md text-center dark:bg-dark-500'>
            <Image
              src={project.image_path}
              alt={project.name}
              width={200}
              height={150}
              className="cursor-pointer mx-auto rounded-lg"
            />
            <p className="my-2 font-semibold text-lg font-serif">{project.name}</p>
            <div className="space-x-3">
              <a href={project.deployed_url} target="_blank" rel="noopener noreferrer">
                <IoArrowRedoCircleSharp className="inline-block text-2xl text-purple-950 cursor-pointer" />
              </a>
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                <FaGithub className="inline-block text-2xl text-gray-800 cursor-pointer" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectsGallery;
