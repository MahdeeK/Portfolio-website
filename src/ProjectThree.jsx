import HeroNav from "./components/HeroNav";
import Footer from "./components/Footer";
import { motion } from 'framer-motion';
import "./Projects.css";
import PageTransition from './components/PageTransition.jsx';

const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    }
};

function ProjectThree() {
    return (
        <PageTransition>
            <Hero />
            <Summary />
            <Process />
            <Research />
            <Wireframing />
            <Design />
            <Conclusion />
            <Footer />
        </PageTransition>
    )
}

export default ProjectThree

function Hero() {
    return (
        <header className="viewport-content" 
        style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${import.meta.env.BASE_URL}pictures/rocksteady.png)`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "overlay"
        }}>
            <HeroNav />
            <div className="hero-text-container">
                <h1 className="project-title"><a href="https://www.figma.com/design/5qgtbCVcRoHIs0eDwkx9Ju/Rocksteady-Redesign-Design-File?t=wNKi2dWF5WCP4JJj-1" target="_blank">Rocksteady Studios Website Redesign</a></h1>
                <p className="project-caption">
                    A digital brand evolution concept focused on resolving layout friction while preserving the gritty, 
                    abstract identity of a world-class game development studio.
                </p>
            </div>
        </header>
    )
}

function Summary() {
    return (
        <motion.section 
        className="content-container" 
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7, ease: "easeInOut"}}
        viewport={{ once: true, amount: 0.2 }}>
            <h1 className="project-heading">Project Summary</h1>
            <div className="summary-stats-container">
                <div className="summary-text">
                    <div className="problem-statement-container" style={{marginBottom: "32px"}}>
                        <h2 className="summary-headline">Problem</h2>
                        <p className="summary-text">
                            The existing Rocksteady Studios website suffered from a fragmented user flow and difficult navigation. While the studio 
                            is world-renowned for ground-breaking titles like the Batman Arkham series, their digital home felt cumbersome to explore 
                            due to the unorthodox layout, creating a barrier between the studio’s award-winning output and its online presence. This 
                            friction reduces user engagement resulting in users feeling disconnected from the site and losing the desire to explore further.
                        </p>
                    </div>
                    <div className="solution-statement-container" style={{marginBottom: "48px"}}>
                        <h2 className="summary-headline">Solution</h2>
                        <p className="summary-text">
                            I designed a cinematic interface that balances Rocksteady’s rugged, abstract aesthetic 
                            with modernist UX and UI principles. By pairing high-impact clear and creative layouts 
                            with a refined design system, the redesign transforms the site from a confusing conglomeration
                            into a high-quality storytelling platform that reflects the studio’s standard of excellence.
                        </p>
                    </div>
                    <p className="motivation-text">
                        This project was born out of a personal passion for gaming and the Batman Arkham series. I saw immense potential for a visual overhaul 
                        and wanted to challenge myself to design for an established global brand. My primary goal was to bridge the gap between creative 
                        storytelling and functional UI/UX by learning how to retain a studio's distinct brand image while delivering a professional and organized 
                        redesign that meets the standards of a world-renowned brand.
                    </p>
                </div>
                <div className="key-stats">
                    <ul>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Project Type</h2>
                            <p style={{margin: "0px"}}>Personal Brand Concept (Redesign)</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Timeline</h2>
                            <p style={{margin: "0px"}}>~1 Week</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Role</h2>
                            <p style={{margin: "0px"}}>Solo UI/UX Designer</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Design Stack</h2>
                            <p style={{margin: "0px"}}>Figma</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Links</h2>
                            <p style={{margin: "0px"}}><a className="summary-links" href="https://www.figma.com/design/5qgtbCVcRoHIs0eDwkx9Ju/Rocksteady-Redesign-Design-File?t=wNKi2dWF5WCP4JJj-1" target="_blank">Figma File 1</a>, <a className="summary-links" href="https://www.figma.com/design/x2n1iRuSsO0H7ElW8bLuZb/Rocksteady-Redesign-Design-File---2?t=wNKi2dWF5WCP4JJj-1" target="_blank">Figma File 2</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

function Process() {
    return (
        <section className="process-container">
            <h1 className="project-subheading" style={{marginBottom: "32px"}}>My Process</h1>
            <motion.div 
            className="process-card-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">01</h1>
                        <h1 className="process-card-title">Audit</h1>
                    </div>
                    <p className="process-card-text">Analyzing the pain points of the current Rocksteady site and mapping out the user friction.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">02</h1>
                        <h1 className="process-card-title">Strategy</h1>
                    </div>
                    <p className="process-card-text">Identifying Rocksteady's brand image, specifically the rugged Brixton Wood typeface, the dark atmosphere, and abstract design.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">03</h1>
                        <h1 className="process-card-title">Design</h1>
                    </div>
                    <p className="process-card-text">Developing a modernist UI framework in Figma that allows for creative and asymmetric layouts without sacrificing usability.</p>
                </motion.div>
            </motion.div>
        </section>
    )
}

function Research() {
    return (
        <section className="content-container">
            <h1 className="project-heading">Research</h1>
            <p className="research-intro">
                The challenge was a classic brand vs. usability problem. Rocksteady’s brand is rugged and unconventional; 
                however, the layout and UI needed to be seamless and natural enough to let the content shine. I focused on 
                a dark mode foundation to align with the Arkham theme while introducing a structured grid system to enhance 
                user flow and guide the user through the site.
            </p>
            <div className="key-insights-container">
                <h1 className="project-subheading">Key Decisions & Insights</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Typeface Pairing: </span> 
                            To maintain brand continuity, I retained Brixton Wood for headers to keep that rugged and weathered 
                            aesthetic. I balanced this with Plus Jakarta Sans for body copy, which is a clean and modern typeface 
                            that ensures high legibility and a tech feel.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Abstract Storytelling: </span> 
                            I utilized creative, non-traditional layouts to mirror Rocksteady’s abstract brand image. This 
                            prevents the site from feeling like a corporate template while delivering a cinematic narrative
                            experience, which is perfect for a studio like Rocksteady who rely on high-quality storytelling 
                            in their games.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Cinematic Immersion: </span> 
                            I leaned into a heavy dark-mode aesthetic with high-contrast imagery, specifically built to support 
                            cinematic motion. By treating the interface as a digital gallery, the layout utilizes
                            whitespace and focal points that invite fluid transitions. This motion-first design language 
                            mirrors Rocksteady’s legacy of immersive storytelling, which transforms a standard scroll into a visual memoir.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Visual Hierarchy: </span> 
                            By utilizing large-scale hero sections and strategic whitespace, I established a clear visual hierarchy that 
                            ensures high-impact imagery remains the primary focal point. The inclusion of oversized typography creates a 
                            sense of layered depth and provides context to elevate the studio's perceived value.
                        </li>
                    </ul>
                </div>
            </div>
            <motion.div 
            className="image-gallery"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/Suckerpunch.png`} alt="Suckerpunch Productions Website Hero" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/Insomniac.png`} alt="Insomniac Games Website Hero" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/RocksteadyHome.png`} alt="Rocksteady Studios Website Hero" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/Ubisoft.png`} alt="Ubisoft Website Hero" variants={item}/>
            </motion.div>
        </section>
    )
}

function Wireframing() {
    return (
        <section className="content-container">
            <h1 className="project-heading">Ideation & Wireframing</h1>
            <motion.div 
            className="image-gallery"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/rocksteadyhomewireframe.png`} alt="Homepage Hero Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/rocksteadyvalueswireframe.png`} alt="Values Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/rocksteadystudiowireframe.png`} alt="Studio Page Hero Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/rocksteadysocialwireframe.png`} alt="Social Life Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/rocksteadypartnerswireframe.png`} alt="Partners Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/rocksteadygamewireframe.png`} alt="Game Page Wireframe" variants={item}/>
            </motion.div>
        </section>
    )
}

function Design() {
    return (
        <section className="content-container">
            <h1 className="project-heading">Visual Design</h1>
            <motion.p 
            className="left-column-text"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeInOut"}}
            viewport={{ once: true, amount: 0.3 }}
            >
                The visual direction was about "refined chaos" to respect the Rocksteady brand image while applying the polish of a luxury digital experience.
            </motion.p>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/rocksteady.png`} 
                    alt="Homepage Hero Image"
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                    <motion.div
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1 className="design-item-title">Bold Abstract Typography</h1>
                        <p className="design-item-text">
                            I used a rugged and weathered typeface in a large font size to create a bold and abstract feeling.
                            I combined this with a centered paragraph and scrolling images, which vary in size, speed, and position in the viewport
                            to further enhance Rocksteady's image as innovators.
                        </p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}>
                        <h1 className="design-item-title">Human-Centric Talent Acquisition</h1>
                        <p className="design-item-text">
                            I applied the same technique with the large fonts for the careers page as well to evoke a similar reaction from users.
                            However, I kept the layout more standardized to make the user flow more intuitive and paired this with an image of content
                            worker and a CTA is framed as the user's value to the studio to help increase conversion rate.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/rocksteadycareers.png`} 
                    alt="Career Hero Image" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/rocksteadystudiohero.png`} 
                    alt="Studio Hero Image" 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                    <motion.div
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1 className="design-item-title">Masonry Narrative</h1>
                        <p className="design-item-text">
                            For the studio hero section I decided to use images that convey Rocksteady in a masonry layout
                            to give users a quick overview of Rocksteady's studio, location, and work culture. I also
                            decided to use a line that encompasses Rocksteady's nature as innovators with their resounding successes,
                            while emphasizing their skill in their craft.
                        </p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}>
                        <h1 className="design-item-title">Immersive Product Focus</h1>
                        <p className="design-item-text">
                            For the games page, I decided to use full width imagery to focus user attention on one specific game at a time,
                            which was possible since Rocksteady only published a few games. By doing this users are able to process the contents
                            for each game and explore the ones whose thumbnail interests them without outside noise to distract them, which aims to 
                            increase conversion rate.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/rocksteadygames.png`} 
                    alt="Games Image" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/rocksteadyperks.png`} 
                    alt="Perks Section Image" 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                    <motion.div
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}>
                        <h1 className="design-item-title">Interactive Brand Legacy</h1>
                        <p className="design-item-text">
                            I wanted to employ the same abstract theme throughout the site to maintain consistency. However, in the 
                            perks section I decided to add a little bit more of Rocksteady's personality through a Batman logo button 
                            with the iconic flying bats for the hover state since the Arkham series is the staple of their studio. 
                            I made the button the largest element to push users to dive into more detail and surrounded it with smaller
                            elements that provide information at a glance that further encourage users to see the remaining perks.
                        </p>
                    </motion.div>
                </div>
        </section>
    )
}

function Conclusion() {
    return (
        <motion.section 
        className="conclusion-container"
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7, ease: "easeInOut"}}
        viewport={{ once: true, amount: 0.2 }}
        >
            <h1 className="project-heading">Conclusion & Final Results</h1>
            <p className="conclusion-intro">
                The Rocksteady concept redesign successfully bridges the gap between abstract identity and modern UX. 
                The result is a site that feels high-quality, immersive, and respects Rocksteady's brand legacy.
            </p>
            <div className="growth-container">
                <h1 className="project-subheading">Key Takeaways & Growth</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Balancing Brand & Usability: </span> 
                            I learned how to keep a messy or abstract brand feeling while using a very structured UI underneath 
                            to ensure the page remains easy to navigate.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Typographic Contrast: </span> 
                            Combining a display font like Brixton Wood with a functional font like Plus Jakarta Sans taught me how 
                            to bridge two different typographic styles (Classic/Rugged vs. Modern/Clean).
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Information Architecture: </span> 
                            This project reinforced the importance of a user-first flow, especially for creative studios where 
                            it’s easy to get lost in the visuals.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Static Storytelling: </span> 
                            Designing without the crutch of motion or interaction forced me to rely on pure composition and hierarchy 
                            to create a cinematic feel within a static file.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="next-steps-container">
                <h1 className="project-subheading">Next Steps</h1>
                <p className="next-steps-intro">
                    If this were a client project, my next phase would focus on creating a prototype that balances design with brand 
                    strategy.
                </p>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">High-Fidelity Prototyping: </span> 
                            My next phase would be to move these static designs into a functional prototype to test how the abstract 
                            transitions feel in a live environment.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Usability Validation: </span> 
                            I would conduct structured usability testing to ensure that the creative and non-traditional layouts 
                            remain intuitive for users. I would then refine the visuals based on real-world heatmaps and behavior.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Strategic Alignment: </span> 
                            I would collaborate with Rocksteady’s brand stakeholders to ensure the redesigned flow meets specific 
                            studio goals such as increasing career page conversions and maximizing engagement for new games.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Accessibility Audit: </span> 
                            I would conduct a deep dive into color contrast and font scaling to ensure the dark-mode theme meets 
                            WCAG standards for all users.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="bottom-line"><span className="bullet-heading">The Bottom Line: </span> 
            This project reinforced the value of refined chaos by proving that a brand can maintain a gritty and abstract personality
            while providing a clean user experience that feels premium and intuitive.
            </p>
        </motion.section>
    )
}