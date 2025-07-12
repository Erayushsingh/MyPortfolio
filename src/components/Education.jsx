import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Book, Star } from 'lucide-react';
import { EDUCATION } from '../constants';

const EducationSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const achievements = [
        "Web Development Focus",
        "Data Structures & Algorithms",
        "Database Management",
        "Machine Learning",
        "Statistical Analysis",
        "Data Visualization"
    ];

    return (
        <section id="education" className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
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
                        <GraduationCap className="text-green-500" size={32} />
                        <h2 className="text-5xl md:text-6xl font-bold">
                            <span className="text-gradient">Education</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        My academic journey and continuous learning path in technology
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline container */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 via-blue-600 to-purple-600"></div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative flex flex-col md:flex-row md:items-center ${
                                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-4 border-gray-900 z-10"></div>

                                    {/* Content card */}
                                    <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="glass p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
                                        >
                                            {/* Institution badge */}
                                            <div className="flex items-center space-x-2 mb-4">
                                                <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
                                                    <Book size={20} className="text-white" />
                                                </div>
                                                <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full border border-green-600/30">
                                                    {index === 0 ? 'Current' : 'Ongoing'}
                                                </span>
                                            </div>

                                            {/* Degree title */}
                                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                                {edu.degree}
                                            </h3>

                                            {/* Institution info */}
                                            <div className="flex items-center space-x-2 mb-2">
                                                <MapPin size={16} className="text-blue-400" />
                                                <p className="text-blue-400 font-medium">
                                                    {edu.institution}
                                                </p>
                                            </div>

                                            {/* Duration */}
                                            {edu.duration && (
                                                <div className="flex items-center space-x-2 mb-4">
                                                    <Calendar size={16} className="text-purple-400" />
                                                    <p className="text-purple-400 font-medium">
                                                        {edu.duration}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Description */}
                                            <p className="text-gray-300 leading-relaxed mb-4">
                                                {edu.description}
                                            </p>

                                            {/* Skills/Focus areas */}
                                            <div className="flex flex-wrap gap-2">
                                                {achievements.slice(index * 3, (index + 1) * 3).map((achievement, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                                                    >
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Additional learning section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="glass p-8 rounded-2xl border border-white/10">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <Star className="text-yellow-400" size={24} />
                                <h3 className="text-3xl font-bold text-white">
                                    Continuous Learning
                                </h3>
                            </div>
                            <p className="text-gray-400">
                                Always expanding my knowledge through online courses and self-study
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Award,
                                    title: "Online Certifications",
                                    description: "Various web development courses and certifications"
                                },
                                {
                                    icon: Book,
                                    title: "Self-Study Projects",
                                    description: "Building projects to learn new technologies"
                                },
                                {
                                    icon: Star,
                                    title: "Tech Communities",
                                    description: "Active participation in coding communities"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg">
                                            <item.icon size={24} className="text-white" />
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;