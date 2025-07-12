import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Heart, Target, Coffee, Book } from 'lucide-react';
import { BIO } from '../constants';

const Bio = () => {
    const highlights = [
        {
            icon: Code,
            title: "Full Stack Developer",
            description: "MERN Stack expertise with modern web technologies"
        },
        {
            icon: Target,
            title: "Problem Solver",
            description: "Passionate about solving complex challenges"
        },
        {
            icon: Heart,
            title: "Tech Enthusiast",
            description: "Always learning and exploring new technologies"
        },
        {
            icon: Coffee,
            title: "Team Player",
            description: "Collaborative approach to software development"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
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
        <section id="about" className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
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
                        <User className="text-blue-500" size={32} />
                        <h2 className="text-5xl md:text-6xl font-bold">
                            <span className="text-gradient">About Me</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Get to know more about my journey, skills, and passion for technology
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Bio text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl border border-white/10">
                            <motion.div variants={itemVariants} className="space-y-6">
                                {BIO.map((bio, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <p className="text-lg leading-relaxed text-gray-300">
                                            {bio}
                                        </p>
                                        {index < BIO.length - 1 && (
                                            <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {[
                                { number: "20+", label: "Projects" },
                                { number: "3+", label: "Years Learning" },
                                { number: "10+", label: "Technologies" },
                                { number: "100%", label: "Dedication" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-4 rounded-xl border border-white/10 text-center"
                                >
                                    <div className="text-2xl font-bold text-gradient">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right side - Highlights */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                What Drives Me
                            </h3>
                            <p className="text-gray-400">
                                I'm passionate about creating innovative solutions and constantly learning new technologies.
                            </p>
                        </motion.div>

                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.02, 
                                    transition: { duration: 0.2 } 
                                }}
                                className="glass p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={24} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Quote */}
                        <motion.div
                            variants={itemVariants}
                            className="glass p-6 rounded-xl border border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
                        >
                            <div className="flex items-start space-x-3">
                                <Book className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="text-white italic leading-relaxed">
                                        "Code is like humor. When you have to explain it, it's bad."
                                    </p>
                                    <p className="text-gray-400 text-sm mt-2">
                                        - Cory House
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Bio;