import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'
function WorksItem({ project }) {
    return (
        <motion.div 
        className="work-item" 
        key={project.id}
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7, ease: "easeInOut"}}
        viewport={{ once: true, amount: 0.2 }}
        >
            <div className="work-image-container">
                <img className="work-image" src={project.image} alt={project.alt} />
            </div>
                <h1 className="work-title">{project.title}</h1>
                <p className="work-tags">{project.tags}</p>
        </motion.div>
    )
}

export default WorksItem