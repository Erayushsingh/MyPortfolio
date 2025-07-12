import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download,Github,Linkedin, Mail, MapPin } from 'lucide-react';
import { HERO } from '../constants';
import a1 from "../assets/a1.jpeg";

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const titles = ['Full Stack Developer', 'React', 'Data Science Enthusiast','AI/ML Enthusiast', 'Problem Solver'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToNext = () => {
        const nextSection = document.querySelector('#about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
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

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left content */}
                    <div className="text-center lg:text-left space-y-8">
                        <motion.div variants={itemVariants} className="space-y-4">

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                            >
                                <span className="text-white">Hi, I'm</span>
                                <br />
                                <span className="text-gradient">{HERO.name}</span>
                            </motion.h1>
                        </motion.div>

                        <motion.div variants={itemVariants} className="h-20">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={currentIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-2xl md:text-4xl font-semibold text-gray-300"
                                >
                                    {titles[currentIndex]}
                                </motion.h2>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-400 leading-relaxed max-w-2xl"
                        >
                            {HERO.description}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center space-x-2 px-8 py-4 text-lg"
                            >
                                <Download size={20} />
                                <span>Download CV</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 text-lg border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-semibold"
                            >
                                Let's Talk
                            </motion.button>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex space-x-6 items-center justify-center lg:justify-start"
                        >
                            {[
                                { icon: Github, href: "https://github.com/Erayushsingh", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/ayush-singh-641871260/", label: "LinkedIn" },
                                { icon: Mail, href: "mailto:ayushsingh74340@gmail.com", label: "Email" }
                            ].map(({ icon: Icon, href, label }, index) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 text-gray-400 hover:text-white border border-white/10 cursor-pointer"
                                    aria-label={label}
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right content - Image */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glowing background */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-2xl"
                            />
                            
                            {/* Profile image */}
                            <motion.div
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                    delay: 0.5
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
                            >
                                <img
                                    src={a1}
                                    alt={HERO.name}
                                    className="w-full h-full object-cover rounded-full ring-4 ring-white/20 shadow-2xl"
                                />
                                
                                {/* Floating elements around image */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-lg shadow-lg"
                                />
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                    className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
                                />
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                    className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full shadow-lg"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        onClick={scrollToNext}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Scroll to next section"
                    >
                        <ChevronDown size={32} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
