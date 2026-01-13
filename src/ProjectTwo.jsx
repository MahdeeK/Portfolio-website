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
                staggerChildren: 0.1
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

function ProjectTwo() {
    return (
        <PageTransition>
            <Hero />
            <Summary />
            <Process />
            <Research />
            <Wireframing />
            <Design />
            <Development />
            <Conclusion />
            <Footer />
        </PageTransition>
    )
}

export default ProjectTwo

function Hero() {
    return (
        <header className="viewport-content" 
        style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}pictures/aboutpagehero.png)`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay"
        }}>
            <HeroNav />
            <div className="hero-text-container">
                <h1 className="project-title">Portfolio</h1>
                <p className="project-caption">
                    A custom digital ecosystem designed to unify my projects, professional identity, 
                    and technical skills into a cohesive, narrative-driven experience.
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
            <h1
            className="project-heading"
            >
                Project Summary
            </h1>
            <div 
            className="summary-stats-container"
            >
                <div className="summary-text">
                    <div className="problem-statement-container" style={{marginBottom: "32px"}}>
                        <h2 className="summary-headline">Problem</h2>
                        <p className="summary-text">
                            My professional presence was fragmented across Google Docs, Figma files, LinkedIn, and GitHub. This lack of a 
                            central hub made it difficult for recruiters to understand the context of my work or see the full scope of my abilities. 
                            Relying on disjointed links created a high cognitive load and failed to showcase my personal brand in a professional, unified way.
                        </p>
                    </div>
                    <div className="solution-statement-container" style={{marginBottom: "48px"}}>
                        <h2 className="summary-headline">Solution</h2>
                        <p className="summary-text">
                            I developed a high-performance portfolio site that serves as a central narrative hub. By stripping away visual noise 
                            and focusing on a "clean-professional" aesthetic with a native dark-mode theme, I created a platform that guides users through 
                            my work while providing clear context on my value proposition and technical expertise.
                        </p>
                    </div>
                    <p className="motivation-text">
                        This project was an exercise in Product Storytelling. I wanted to prove that I could take complex, multi-layered projects and 
                        distill them into short, high-impact case studies that tell a story from "Problem to Solution" without overwhelming the reader.
                    </p>
                </div>
                <div className="key-stats">
                    <ul>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Project Type</h2>
                            <p style={{margin: "0px"}}>Personal Brand & Web Design</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Timeline</h2>
                            <p style={{margin: "0px"}}>~1 Month</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Role</h2>
                            <p style={{margin: "0px"}}>Solo Designer & Developer</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Design Stack</h2>
                            <p style={{margin: "0px"}}>Figma, DaVinci Resolve</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Tech Stack</h2>
                            <p style={{margin: "0px"}}>React (Vite), Framer Motion</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Links</h2>
                            <p style={{margin: "0px"}}><a href="https://github.com/MahdeeK/Portfolio-site" target="_blank">GitHub Repository</a></p>
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
                    <p className="process-card-text">Evaluating the friction in my previous workflow (sharing individual links) versus a centralized platform.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">02</h1>
                        <h1 className="process-card-title">Strategy</h1>
                    </div>
                    <p className="process-card-text">Defining a "Minimal-Modernist" theme that allows the colorful project assets to stand out.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">03</h1>
                        <h1 className="process-card-title">Design</h1>
                    </div>
                    <p className="process-card-text">Mapping out a logic-driven site structure: Home (Discovery) → Case Study (Deep Dive) → About (Human Connection).</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">04</h1>
                        <h1 className="process-card-title">Build</h1>
                    </div>
                    <p className="process-card-text">Building the site with a focus on fast load times and responsive layouts for mobile viewing.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">05</h1>
                        <h1 className="process-card-title">Launch</h1>
                    </div>
                    <p className="process-card-text">Evaluating the final prototype and defining the roadmap for future changes.</p>
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
                To define a high-impact professional presence, I audited industry-leading portfolios to identify the common denominators of successful storytelling. My research focused on balancing what hiring managers recommend—structured, results-oriented narratives—with the modern "Dark Mode" aesthetics that define high-end design brands. I found that the most effective sites avoid over-designing the container, instead using minimalist UI and strong typography to let the work take center stage. I took inspiration from these benchmarks to create a layout that feels premium yet remains highly functional, as shown in the inspiration gallery below.
            </p>
            <div className="key-insights-container">
                <h1 className="project-subheading">Key Decisions & Insights</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">The "Zero-Clutter" Hero:</span> I opted for a minimal hero section featuring only my name, value proposition, and navbar. This ensures the user’s first impression is focused entirely on who I am and what I can do for them, without any distractions.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Structured Case Study Narrative:</span> To keep readers engaged, I structured projects to follow a "High-Level to Deep-Dive" flow. Starting with a summary and key stats allows "skimmers" to get the value immediately, while the research and design sections satisfy those looking for detail.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Unified Professional Access:</span> I integrated GitHub, LinkedIn, and my Resume into a persistent footer and about section. This transformed the site from a simple gallery into a functional tool for recruiters to transition from my work to my professional history.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Personality Integration:</span> I included a short "About" section that blends technical skills with my personality and hobbies. This humanizes the digital experience, showing that I am not just a technician, but a well-rounded collaborator with specific goals and pursuits.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Content Sprints:</span> I intentionally kept the case studies short and punchy. By focusing on short captions and bullet points rather than long paragraphs, I ensured the portfolio respects the user's time while still proving my design logic.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Motion-Enhanced Discovery:</span> To add a sense of polish and "flair," I used Framer Motion to create subtle fade-in animations for the project cards. This guides the user's attention and makes the site feel reactive and modern.
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
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/StudioSpielen.png`} alt="Studio Spielen Homepage Image" variants={item} style={{padding: "2px", backgroundColor: "#222222"}}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/Mod.png`} alt="Mod Creative Studio Homepage Image" variants={item} style={{padding: "4px", backgroundColor: "#ffffff"}}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/TonyJin.png`} alt="Tony Jin Homepage Image" variants={item} style={{padding: "4px", backgroundColor: "#ffffff"}}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/AbdulrahmanSaied.png`} alt="Abdulrahman Saied Homepage Image" variants={item} style={{padding: "2px", backgroundColor: "#222222"}}/>
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
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/workswireframe.png`} alt="Project Card Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/aboutpageherowireframe.png`} alt="About Page Hero Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/worksherowireframe.png`} alt="Project Hero Wireframe" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/projectsummarywireframe.png`} alt="Project Summary Section Wireframe" variants={item}/>
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
                The visual direction centered on minamilism with hints of personality. The result was a 
                cinematic design that creates a story for each project and a story about me as a student, creative, and person.
            </motion.p>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/workimage.png`} 
                    alt="Homepage Work Image"
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
                        <h1 className="design-item-title">Visual Isolation & Content Clarity</h1>
                        <p className="design-item-text">
                            I kept the homepage minimal with just a hero section and my projects. I paired this with large imagery to isolate each
                            project and allow users to process each one and used a backdrop to create contrast with the background to ensure the images don't blend
                            into it. For each project, I used a title to convey the overarching work that was done while the subtitles specify the exact type of 
                            work I was involved in. 
                        </p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1 className="design-item-title">Narrative Self-Expression</h1>
                        <p className="design-item-text">
                            For my about section I decided to add a bit more personality and flair to it through the hero section. I achieved this by curating
                            images of different games that I enjoy and creating a non-standard layout with no text and the rotated image. The image gives insight intro
                            my personality by showing users that I enjoy gaming and the types of games that I enjoy as well. Everything comes full circle at the end since
                            I connect my body copy about my hobbies back to the image in my hero section.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/aboutpageheroimage.png`} 
                    alt="About Page Hero Image"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/aboutpageintro.png`} 
                    alt="About Page Intro Image"
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    style={{padding: "4px", backgroundColor: "#222222"}}
                    />
                    <motion.div
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1 className="design-item-title">Cinematic Information Pacing</h1>
                        <p className="design-item-text">
                            I moved the introduction text about myself from the hero section to its own section immediately after. This not only cleared up the hero 
                            for me to achieve the effect stated previously, but it also isolated the introduction and provided a more cinematic feel. Additionally,
                            by isolating the text and using a larger font size, I directed the users attention to the text, which provides the core details about who I am, 
                            where I am, and what I can do. 
                        </p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1 className="design-item-title">Optimized for Recruiter Efficiency</h1>
                        <p className="design-item-text">
                            I decided to create project summaries for each case study to give a high level overview of the work that was done since recruiters and hiring managers
                            spend very little time on each applicant. By providing an easily digestable summary that outlines the problem, solution, my motivations, my process, and
                            key stats about the project a hiring manager can quickly understand the work I have done and delve further into the case studies that interest them. This saves
                            time for the perspective of a hiring manager while providing sufficient details for them to understand my work and skills from my perspective.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src={`${import.meta.env.BASE_URL}pictures/projectsummary.png`} 
                    alt="Project Summary Image"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    style={{padding: "4px", backgroundColor: "#222222"}} 
                    />
                </div>
        </section>
    )
}

function Development() {
    return (
        <section className="content-container">
            <h1 className="project-heading">Development</h1>
            <div className="text-content-wrapper">
                <div className="development-text">
                    <p>I built the entire portfolio from scratch using React and Vite, focusing on creating a performance-oriented architecture that could handle project assets while maintaining a cinematic, high-end feel through motion and theme consistency.</p>
                    <div className="implementation-highlights">
                        <h1 className="project-subheading">Implementation Highlights</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Responsive Design:</span> A fully responsive layout optimized for seamless viewing across mobile, tablet, and ultra-wide desktop displays.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Native Dark Mode Architecture:</span> I engineered the site with a persistent dark-mode foundation, ensuring that high-contrast project assets and typography remain the focal point while reducing eye strain for long-form reading.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Framer Motion Integration:</span> I utilized Framer Motion to implement sophisticated fade-in animations for project cards on the homepage, creating a sense of "discovery" and professional polish as the user scrolls.
                                </li>
                        </ul>
                    </div>
                    <div className="technical-challenges">
                        <h1 className="project-subheading">Technical Challenges</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Responsive Layout Complexity:</span> Translating the structured, multi-section case study layouts into a responsive format was a significant hurdle. I had to ensure that the "high-level overview" and "design galleries" remained legible and impactful across all device widths.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Deployment & Parity: </span> Hosting a React-based project on GitHub Pages required careful configuration of client-side routing and asset paths to ensure the live environment perfectly matched my local development build.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Deployment Constraints: </span> Hosting a media-heavy project on GitHub Pages introduced latency challenges; I addressed this by prioritizing asset loading order to maintain a functional "First Contentful Paint."
                                </li>
                        </ul>
                    </div>
                    <p className="left-column-text">Despite these challenges, the final product is fully functional and closely matches the original design intent.</p>
                </div>
                <motion.video 
                src={`${import.meta.env.BASE_URL}videos/PortfolioDemo.mp4`} 
                alt="Portfolio Demo Video" 
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7, ease: "easeInOut"}}
                viewport={{ once: true, amount: 0.3 }}
                autoPlay
                muted
                playsInline
                controls/>
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
            <p className="conclusion-intro">The portfolio site successfully bridges the gap between my technical skills and my personal brand. By centralizing my work, I have created a "One-Stop-Shop" for anyone wanting to understand my design process, effectively turning my disjointed project links into a professional career story.</p>
            <div className="growth-container">
                <h1 className="project-subheading">Key Takeaways & Growth</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Information Architecture:</span> I learned how to organize a large amount of diverse content into a simple hierarchy and content flow.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Narrative Design:</span> This project forced me to act as my own editor—learning how to trim down case studies to their most impactful points to avoid "reader fatigue."
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Self-Branding:</span> I gained experience in defining my own "Value Proposition," learning how to communicate my worth to a potential employer in a single sentence.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">User Flow Optimization:</span> Designing for a recruiter audience taught me to put the most important information (projects and resume) in the most accessible places.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="next-steps-container">
                <h1 className="project-subheading">Next Steps</h1>
                <p className="next-steps-intro">My next phase would focus on refining performance, accessibility, and content based on user data:</p>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Advanced Analytics:</span> I would integrate tracking tools to observe which case studies get the most engagement, allowing me to refine the content hierarchy based on which projects are capturing the most attention from visitors.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">SEO & Discoverability:</span> I would implement a robust SEO strategy, including optimized meta-tags for each case study, structured data (JSON-LD) to help search engines understand my role, and keyword-rich descriptions to increase organic visibility to recruiters.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Asset Optimization:</span> To maintain the "cinematic" feel without sacrificing speed, I would implement advanced asset-loading strategies like lazy-loading for images and WebP/WebM conversion to ensure sub-second "Time to Interactive" across all devices.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Accessibility & Inclusion:</span> To ensure the site is usable for everyone, I would conduct a full accessibility audit to reach WCAG 2.1 standards. This includes ensuring 100% keyboard navigability, adding descriptive ARIA labels, and verifying that the dark-mode color palette maintains high contrast ratios.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="bottom-line"><span className="bullet-heading">The Bottom Line:</span> This project reinforced the importance of "Design as a Narrative"—proving that a well-structured digital home is the most effective tool for transforming a collection of separate links into a high-impact, professional career story.</p>
        </motion.section>
    )
}