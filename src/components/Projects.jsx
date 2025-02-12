import React from 'react';
import { PROJECTS } from "../constants"
import { MdArrowOutward } from 'react-icons/md';
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <section className="pt-20 " id="projects">
      <div className='hidden lg:block'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center text-3xl lg:text-4xl">Projects</motion.h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}

              key={project.id}
              className="group relative overflow-hidden rounded-3xl ">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.image}
                alt={project.name}
                className="h-[500px] w-full object-fit transition-transform duration-500 group-hover:scale-110 z-1" />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0
              backdrop-blur-lg transition-opacity duration-500 hover:opacity-100">
              <h3 className="mb-2 text-xl text-black font-semibold">{project.name}</h3>
               <p className="mb-12 p-4 text-black">{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-black px-4 py-2 text-white hover:bg-gray-300">
                  <div className="flex items-center">
                    <span>View on GitHub</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))

          }
        </div>
      </div>

      <div className='md:hideen lg:hidden'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8 text-center text-3xl font-bold'>
          Projects
        </motion.h2>

        <div className="grid grid-cols-1" >
          {PROJECTS.map((project) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}

              key={project.id} className="mb-6 overflow-hidden rounded-3xl">

               <div className='relative'>
               <img src={project.image}
                alt={project.name}
                className="relative h-[400px] w-full object-fit "
                />
                <div className='absolute right-0 bottom-2'>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center rounded-full bg-black opacity-30 px-4 py-2 text-white hover:bg-gray-300 transition duration-300">
                <div className="flex items-center">
                    <span>View on GitHub</span>
                    <MdArrowOutward />
                  </div>
                </a>
                </div>
                
                </div> 
            

              <div className='m-2'>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='text-pink-500 font-bold mb-2'>
                  {project.name}
                </motion.h2>

                <motion.p className='text-black'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>

          ))}
        </div>
      </div>

    </section>

  )
}

export default Projects