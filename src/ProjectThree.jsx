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
        backgroundImage: "url(src/assets/pictures/rocksteady.png)", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay"
        }}>
            <HeroNav />
            <div className="hero-text-container">
                <h1 className="project-title">Rocksteady Studios Website Redesign</h1>
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
                            The existing Rocksteady Studios website suffered from a fragmented user flow and difficult navigation. While the 
                            studio is world-renowned for high-fidelity titles like the Batman Arkham series, their digital home 
                            felt cumbersome to explore, creating a barrier between the studio’s prestigious output and its online presence.
                        </p>
                    </div>
                    <div className="solution-statement-container" style={{marginBottom: "48px"}}>
                        <h2 className="summary-headline">Solution</h2>
                        <p className="summary-text">
                            I designed a "Polished-Grit" interface—a cinematic experience that balances Rocksteady’s rugged, abstract aesthetic 
                            with modernist UX principles. By pairing high-impact creative layouts with a refined typographic system, the redesign 
                            transforms the site from a static portal into a high-quality storytelling platform that reflects the studio’s standard of excellence.
                        </p>
                    </div>
                    <p className="motivation-text">
                        This project was born out of a personal passion for gaming and the Batman: Arkham series. I saw immense potential for a visual overhaul 
                        and wanted to challenge myself to design for an established global brand. My primary goal was to bridge the gap between creative 
                        storytelling and functional UI—learning how to retain a studio's distinct brand image while delivering a professional, organized 
                        redesign that meets the standards of a high-end agency handoff.
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
                    <p className="process-card-text">Analyzing the pain points of the current Rocksteady site navigation and mapping out the user friction.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">02</h1>
                        <h1 className="process-card-title">Strategy</h1>
                    </div>
                    <p className="process-card-text">Identifying the "DNA" of Rocksteady—specifically the Brixton Wood typography and the dark, abstract atmosphere.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">03</h1>
                        <h1 className="process-card-title">Design</h1>
                    </div>
                    <p className="process-card-text">Developing a modernist UI framework in Figma that allows for creative, asymmetric layouts without sacrificing usability.</p>
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
                The challenge was a classic "Brand vs. Usability" dilemma. Rocksteady’s brand is rugged and unconventional; 
                however, the UI needed to be invisible enough to let the work shine. I focused on a Dark Mode foundation 
                to maintain the "Arkham" legacy while introducing a structured grid system to guide the user through the studio’s 
                history and current projects.
            </p>
            <div className="key-insights-container">
                <h1 className="project-subheading">Key Decisions & Insights</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">The "Polished-Grit" Typographic Scale:</span> To maintain brand continuity, I retained Brixton Wood for headers to keep that rugged, weathered feel. I balanced this with Plus Jakarta Sans for body copy—a clean, modernist typeface that ensures high legibility and a "premium" tech feel.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Abstract Storytelling:</span> I utilized creative, non-traditional layouts to mirror Rocksteady’s "abstract" brand image. This prevents the site from feeling like a corporate template while maintaining a sophisticated, intentional flow.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Cinematic Immersion:</span> I leaned into a heavy "Dark Mode" aesthetic with high-contrast imagery, turning the site into a digital gallery. This evokes the feeling of being inside one of their game environments.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Visual Hierarchy:</span> By using large-scale hero sections and strategic white space (or "dark space"), I ensured that the high-quality assets of the games are the focal point, elevating the perceived value of the studio.
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
                    <motion.img src="src/assets/pictures/Suckerpunch.png" alt="Suckerpunch Productions Website Hero" variants={item}/>
                    <motion.img src="src/assets/pictures/Insomniac.png" alt="Insomniac Games Website Hero" variants={item}/>
                    <motion.img src="src/assets/pictures/RocksteadyHome.png" alt="Rocksteady Studios Website Hero" variants={item}/>
                    <motion.img src="src/assets/pictures/Ubisoft.png" alt="Ubisoft Website Hero" variants={item}/>
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
                    <motion.img src="src/assets/pictures/rocksteadyhomewireframe.png" alt="Homepage Hero Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/rocksteadyvalueswireframe.png" alt="Values Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/rocksteadystudiowireframe.png" alt="Studio Page Hero Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/rocksteadysocialwireframe.png" alt="Social Life Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/rocksteadypartnerswireframe.png" alt="Partners Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/rocksteadygamewireframe.png" alt="Game Page Wireframe" variants={item}/>
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
                The visual direction was about "Refined Chaos" to respect the Rocksteady brand image while applying the polish of a luxury digital experience.
            </motion.p>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/rocksteady.png" 
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
                            worker and a CTA that focuses on the user's value to the company instead of the other way around to help increase conversion rate.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/rocksteadycareers.png" 
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
                    src="src/assets/pictures/rocksteadystudiohero.png" 
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
                            to give users a quick overview regarding Rocksteady's studio, location, and work culture. I also
                            decided to use a line that encompasses Rocksteady's nature as innovators with their resounding successes,
                            while highly emphasizing their skill in their craft.
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
                            for each game and explore the ones whose thumbnail interests them without outside noise to distract them, which can increase
                            conversion rate.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/rocksteadygames.png" 
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
                    src="src/assets/pictures/rocksteadyperks.png" 
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
                            I wanted to employ the same abstract theme throughout the site, but in the perks section I decided to add a little bit
                            more of Rocksteady's personality through a Batman logo button with the iconic flying bats for the hover state since the
                            Arkham series is the staple of their studio. I made the button the largest element to push users to dive into more detail
                            and surrounded it with smaller elements that provide information at a glance that may further encourage users to see the remaining perks.
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
            <p className="conclusion-intro">The Rocksteady concept redesign successfully bridges the gap between "Rugged Identity" and "Modern UX." The result is a site that feels as high-quality as a AAA game title—organized, immersive, and unmistakably Rocksteady.</p>
            <div className="growth-container">
                <h1 className="project-subheading">Key Takeaways & Growth</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Balancing Brand & Usability:</span> I learned how to keep a "messy" or abstract brand feeling while using a very "strict" UI structure underneath to ensure the page remains easy to navigate.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Typographic Contrast:</span> Combining a display font like Brixton Wood with a functional font like Plus Jakarta Sans taught me how to bridge two different worlds (Classic/Rugged vs. Modern/Clean).
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Information Architecture:</span> This project reinforced the importance of a "User-First" flow, especially for creative studios where it’s easy to get lost in the visuals.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Static Storytelling:</span> Designing without the crutch of motion or interaction forced me to rely on pure composition and hierarchy to create a "cinematic" feel within a static file.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="next-steps-container">
                <h1 className="project-subheading">Next Steps</h1>
                <p className="next-steps-intro">If this were a client project, my next phase would focus on creating a prototype that balances design with brand strategy.</p>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">High-Fidelity Prototyping:</span> My next phase would be to move these static designs into a functional prototype to test how the abstract transitions feel in a live environment.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Usability Validation:</span> I would conduct structured usability testing to ensure that the creative, non-traditional layouts remain intuitive for the core gaming audience, refining the on-page navigation based on real-world heatmaps and behavior.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Strategic Alignment:</span> I would collaborate with Rocksteady’s brand stakeholders to ensure the redesigned flow meets specific studio goals—such as increasing "Careers" page conversions and maximizing engagement with new game trailers.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Accessibility Audit:</span> I would conduct a deep dive into color contrast and font scaling to ensure the dark-mode theme meets WCAG standards for all users.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="bottom-line"><span className="bullet-heading">The Bottom Line:</span> This project reinforced the value of "Refined Chaos"—proving that a brand can maintain a gritty, abstract personality while providing a clean, high-standard user experience that feels as premium as a AAA title.</p>
        </motion.section>
    )
}