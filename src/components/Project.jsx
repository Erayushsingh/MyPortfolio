import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Briefcase, Code } from 'lucide-react';
import { PROJECTS } from '../constants';

const Project = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    return (
        <section id="projects" className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12 lg:mb-16"
                >
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <Briefcase className="text-purple-500" size={32} />
                        <h2 className="text-5xl md:text-6xl font-bold">
                            <span className="text-gradient">My Projects</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Here are some of the projects I've worked on, showcasing my skills and creativity
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="group relative overflow-hidden rounded-2xl glass border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: hoveredProject === project.id ? 1 : 0 
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center"
                                >
                                    <div className="flex space-x-4">
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                        >
                                            <Github size={20} className="text-white" />
                                        </motion.a>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                        >
                                            <Eye size={20} className="text-white" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="p-6">
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors"
                                >
                                    {project.name}
                                </motion.h3>
                                
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3"
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex space-x-3"
                                >
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm font-medium"
                                    >
                                        <Code size={16} />
                                        <span>View Code</span>
                                    </motion.a>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 px-4 py-2 border border-white/20 text-gray-300 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
export default Project;


