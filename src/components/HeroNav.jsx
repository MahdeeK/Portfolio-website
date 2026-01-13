import './HeroNav.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function HeroNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 

    const menuVariants = {
        closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
        open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    };

    return (
        <div className="hero-nav">
                <h1 className="logo">MK</h1>
                <nav className="nav-container">
                    <button className="hamburger-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <i className="ri-close-line"></i> : <i class="ri-menu-line"></i>}
                </button>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="mobile-nav-container"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <ul className="mobile-nav">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : 'link-standard'}>Home</NavLink></li>
                                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'link-active' : 'link-standard'}>About</NavLink></li>
                                <li><a href="src/assets/Mahdee_Khandokar_Resume.pdf" target="_blank">Resume</a></li>
                                <li><a href="https://www.linkedin.com/in/mahdee-khandokar/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://github.com/MahdeeK" target="_blank">GitHub</a></li>
                                <li><a href="mailto:mahdee.khandokar@gmail.com">Contact</a></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                    <ul className="nav-links">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : 'link-standard'}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'link-active' : 'link-standard'}>About</NavLink></li>
                        <li><a href="src/assets/Mahdee_Khandokar_Resume.pdf" target="_blank">Resume</a></li>
                        <li><a href="https://www.linkedin.com/in/mahdee-khandokar/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/MahdeeK" target="_blank">GitHub</a></li>
                        <li><a href="mailto:mahdee.khandokar@gmail.com">Contact</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default HeroNav