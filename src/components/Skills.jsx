import React from 'react'
import { SKILLS } from '../constants'
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        },
    },
}

const itemVarients = {
    hidden: {
        opacity: 0, x: -20
    },
    visible: {
        opacity: 1, x: 0, transition: { duration: 0.5 },
    }
}

const Skills = () => {
    return (
        <div className='container mx-auto' id="skills">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-12 mt-20 text-center text-4xl font-semibold'>
                Skills
            </motion.h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className='mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-[#fc036b]'>
                {
                    SKILLS.map((skill, index) => (
                        <motion.div
                            variants={itemVarients}
                            key={index} className={`py-6 flex items-center justify-between ${index != SKILLS.length - 1 ? "border-b border-[#fc036b]" : ""}`}>
                            <div className='flex items-center '>{skill.icon}
                                <h3 className='px-6 text-lg lg:text-2xl'>{skill.name}</h3>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Skills