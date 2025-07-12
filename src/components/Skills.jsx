import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Smartphone, Wrench } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = [
        {
            title: "Frontend",
            icon: Globe,
            skills: SKILLS.filter(skill => 
                ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'].some(tech => 
                    skill.name.toLowerCase().includes(tech.toLowerCase())
                )
            ),
            color: "from-blue-600 to-cyan-600"
        },
        {
            title: "Backend",
            icon: Server,
            skills: SKILLS.filter(skill => 
                ['Node.js', 'Express', 'Python'].some(tech => 
                    skill.name.toLowerCase().includes(tech.toLowerCase())
                )
            ),
            color: "from-green-600 to-emerald-600"
        },
        {
            title: "Database",
            icon: Database,
            skills: SKILLS.filter(skill => 
                ['MongoDB', 'SQL', 'PostgreSQL'].some(tech => 
                    skill.name.toLowerCase().includes(tech.toLowerCase())
                )
            ),
            color: "from-purple-600 to-violet-600"
        },
        {
            title: "Tools",
            icon: Wrench,
            skills: SKILLS.filter(skill => 
                ['Postman', 'Git', 'Docker'].some(tech => 
                    skill.name.toLowerCase().includes(tech.toLowerCase())
                )
            ),
            color: "from-orange-600 to-red-600"
        }
    ];

    // If skills don't fit categories, add them to a general category
    const categorizedSkillNames = skillCategories.flatMap(cat => 
        cat.skills.map(skill => skill.name)
    );
    const uncategorizedSkills = SKILLS.filter(skill => 
        !categorizedSkillNames.includes(skill.name)
    );

    if (uncategorizedSkills.length > 0) {
        skillCategories.push({
            title: "Other",
            icon: Code2,
            skills: uncategorizedSkills,
            color: "from-pink-600 to-rose-600"
        });
    }

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

    const skillVariants = {
        hidden: { scale: 0, opacity: 0 },
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
        <section id="skills" className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12 lg:mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Skills & Technologies</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Here are the technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                                    <category.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={`${category.title}-${skillIndex}`}
                                        variants={skillVariants}
                                        whileHover={{ scale: 1.05 }}
                                        onHoverStart={() => setHoveredSkill(`${category.title}-${skillIndex}`)}
                                        onHoverEnd={() => setHoveredSkill(null)}
                                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="text-2xl">
                                            {skill.icon}
                                        </div>
                                        <span className="text-white font-medium">
                                            {skill.name}
                                        </span>
                                        {hoveredSkill === `${category.title}-${skillIndex}` && (
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                className={`h-0.5 bg-gradient-to-r ${category.color} absolute bottom-0 left-0`}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-8 md:mt-12 lg:mt-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-8 text-white">
                        All Technologies
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ 
                                    delay: index * 0.1, 
                                    type: "spring", 
                                    stiffness: 200,
                                    damping: 20
                                }}
                                whileHover={{ 
                                    scale: 1.1, 
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                viewport={{ once: true }}
                                className="glass p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 text-center group cursor-pointer"
                            >
                                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <p className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

               
            </div>
        </section>
    );
};

export default Skills;
   