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

function ProjectOne() {
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

export default ProjectOne

function Hero() {
    return (
        <header className="viewport-content" 
        style={{
        backgroundImage: "url(src/assets/pictures/bmwhomepagedesign.png)", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay"
        }}>
            <HeroNav />
            <div className="hero-text-container">
                <h1 className="project-title">BMW Canada Homepage Redesign</h1>
                <p className="project-caption">
                    A concept redesign of the BMW Canada homepage focused on elevating visual quality, 
                    improving user experience, and translating a luxury brand into a modern, immersive digital experience.
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
                            Despite BMW’s reputation for 'The Ultimate Driving Machine,' their digital experience felt cluttered and dated. This disconnect between
                            the physical luxury of the vehicles and the online interface diluted brand prestige and created unnecessary cognitive load for users.
                        </p>
                    </div>
                    <div className="solution-statement-container" style={{marginBottom: "48px"}}>
                        <h2 className="summary-headline">Solution</h2>
                        <p className="summary-text">
                            I developed a cinematic, video-first interface that mirrors the high-performance engineering of the vehicles themselves.
                            By replacing cluttered layouts with full-width immersive media and minimalist UI, the redesign restores brand prestige
                            and transforms the digital showroom into an extension of the driving experience.
                        </p>
                    </div>
                    <p className="motivation-text">
                        This project was a personal challenge to bridge high-end UI design with functional front-end development. Beyond the visual overhaul,
                        I focused on building an end-to-end workflow—using React to handle complex media assets and ensuring a responsive, performant experience
                        that maintains luxury aesthetics across all devices.
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
                            <p style={{margin: "0px"}}>Solo Product Designer & Developer</p>
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
                            <div style={{margin: "0px"}}><a className="summary-links" href="https://mahdeek.github.io/BMW-Homepage-Redesign/" target="_blank">Live Site</a>, <a className="summary-links" href="https://github.com/MahdeeK/BMW-Homepage-Redesign" target="_blank">GitHub Repository</a></div>
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
                    <p className="process-card-text">Benchmarking hyper-luxury digital standards from brands like Bugatti, Rolls-Royce, and Koenigsegg.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">02</h1>
                        <h1 className="process-card-title">Strategy</h1>
                    </div>
                    <p className="process-card-text">Mapping a product hierarchy based on BMW Canada’s top-selling models and sales data.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">03</h1>
                        <h1 className="process-card-title">Design</h1>
                    </div>
                    <p className="process-card-text">Crafting a video-first interface in Figma focused on motion and premium typography.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">04</h1>
                        <h1 className="process-card-title">Build</h1>
                    </div>
                    <p className="process-card-text">Translating the design into a performance-driven React build with Framer Motion.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">05</h1>
                        <h1 className="process-card-title">Launch</h1>
                    </div>
                    <p className="process-card-text">Evaluating the final prototype and defining the roadmap for production readiness.</p>
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
                To define the standard for high-end digital showrooms, I conducted a competitive audit of luxury and performance brands. 
                I looked at direct competitors like Mercedes-Benz and Porsche, while drawing heavy inspiration from 'hyper-luxury' brands like Bugatti, 
                Koenigsegg, Rolls-Royce, and Bentley to identify the visual language of the ultra-premium market and apply those principles to solve the 
                friction found on the current BMW Canada site.
            </p>
            <div className="key-insights-container">
                <h1 className="project-subheading">Key Decisions & Insights</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Immersive Storytelling:</span> Leading brands use 4K hero loops with minimal copy. I adopted a video-first approach to evoke the emotional thrill 
                            of driving before presenting technical specs.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Low-Pressure Conversion:</span> Research showed that top-tier brands favor discovery over direct sales. I replaced transactional 'Shop' prompts with 
                            'Discover', aligning the CTA with a sense of exploration and prestige.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Intentional Friction Reduction:</span> By implementing a desktop hamburger menu and center-aligned logo (patterns seen in Koenigsegg and Bentley), I 
                            cleared the visual noise and cognitive load that currently plagues the BMW Canada site.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Dynamic Product Discovery:</span> I used a high-fidelity carousel to allow users to navigate the fleet without losing their place on the page, ensuring 
                            every vehicle is presented with equal 'hero' importance.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Market-Driven Prioritization:</span> I ordered the carousel starting with the X-Series and 2-4 Series, prioritizing BMW Canada’s top-selling models to align 
                            the user experience with real-world sales performance.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Strategic Upselling:</span> I grouped the 3/4 and 7/8 series within the carousel to create a logical exploration path, subtly encouraging users to compare 
                            higher-performance or luxury trims within the same category.
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
                    <motion.img src="src/assets/pictures/Koenigsegg.png" alt="something" variants={item}/>
                    <motion.img src="src/assets/pictures/Bugatti.png" alt="something" variants={item}/>
                    <motion.img src="src/assets/pictures/Porsche.png" alt="something" variants={item}/>
                    <motion.img src="src/assets/pictures/Rolls.png" alt="something" variants={item}/>
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
                    <motion.img src="src/assets/pictures/bmwhomepagewireframe.png" alt="Hero Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/bmwmodelwireframe.png" alt="Model Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/bmwvehiclewireframe.png" alt="Vehicle Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/bmwofferswireframe.png" alt="Offers Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/bmwconfigurewireframe.png" alt="Configure Wireframe" variants={item}/>
                    <motion.img src="src/assets/pictures/bmwfooterwireframe.png" alt="Footer Wireframe" variants={item}/>
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
                The visual direction centered on luxury and excitement. The result was a 
                cinematic design that aligns more closely with BMW’s brand values and retains familiarity through brand colours and typography.
            </motion.p>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/bmwhomepagedesign.png" 
                    alt="BMW Homepage Hero"
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
                        <h1 className="design-item-title">Immersive Brand Introduction</h1>
                        <p className="design-item-text">
                            I used a background video that shows driving performance and excitement to pair with BMW's slogan.
                            I also used a large font size and a blend mode to increase visibility on top of the video.
                            Additionally, the format of the text makes it such that the video and slogan are seen first then the subheading and then the line leads from the subheading to the CTA.
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
                        <h1 className="design-item-title">Narrative-Driven Navigation</h1>
                        <p className="design-item-text">
                            Each model was paired with carefully selected imagery and video
                            that reflected its personality such as everyday travel for the 2 series,
                            luxury and artistic expression for the 7 and 8 series, or a futuristic vibe
                            for the i series. Additionally, paginations dots were added for navigation and to
                            let users know the number of carousel elements and their position within it allowing users
                            to navigate to the correct model with ease due to the logical and natural ordering of the models.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/bmwmodels.png" 
                    alt="Model Carousel" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/bmwvehiclesearch.png" 
                    alt="Vehicle Search and Test Drive Booking" 
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
                        <h1 className="design-item-title">High-Octane Engagement</h1>
                        <p className="design-item-text">
                            For the vehicle search section, I used a full-width image of cars drifting
                            in the snow to showcase BMW’s performance and handling. This image is meant to evoke
                            emotions of excitement and desire to both own a BMW vehicle or to experience the thrill of
                            pushing the limits of a high performance vehicle, similar to what is shown in the image.
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
                        <h1 className="design-item-title">Data Density vs. Clarity</h1>
                        <p className="design-item-text">
                            I grouped the current offers together instead of making separate full width cards to make
                            it so that users can gather the information faster and more apparent of what offers are currently
                            available.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/bmwoffers.png" 
                    alt="Current Offers" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/bmwfooter.png" 
                    alt="Footer" 
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
                        <h1 className="design-item-title">Streamlined Information Architecture</h1>
                        <p className="design-item-text">
                            For the footer I grouped together many links on the original BMW website to eliminate redundancy
                            and increase clarity. I also grouped the newsletter with the footer and used a different background
                            colour to signify the end of the page. Finally, external links and legal information were grouped together
                            at the bottom and separated from the main footer section using a horizontal line since these links are not often visited
                            by the average customer.
                        </p>
                    </motion.div>
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
                    <p>I built the entire homepage from scratch using React and Vite, focusing on creating a performance-oriented architecture that could handle high-resolution media without sacrificing usability.</p>
                    <div className="implementation-highlights">
                        <h1 className="project-subheading">Implementation Highlights</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Device-Agnostic Design:</span> A fully responsive layout optimized for seamless viewing across mobile, tablet, and ultra-wide desktop displays.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Adaptive Media Interactions:</span> I engineered a custom model carousel that intelligently toggles between autoplay loops on mobile and hover-triggered playback on desktop to optimize user engagement and data usage.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Modular Component Architecture:</span> Developed a library of reusable React components, ensuring a scalable and maintainable codebase.
                                </li>
                        </ul>
                    </div>
                    <div className="technical-challenges">
                        <h1 className="project-subheading">Technical Challenges</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Synchronous Motion:</span> Managing the state and responsive behavior of a self-scrolling carousel required precise logic to ensure smooth transitions across varying screen widths.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Interaction Parity: </span> Normalizing video playback behaviors between touch-based mobile browsers and cursor-based desktop environments to maintain a consistent brand experience.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Deployment Constraints: </span> Hosting a media-heavy project on GitHub Pages introduced latency challenges; I addressed this by prioritizing asset loading order to maintain a functional "First Contentful Paint."
                                </li>
                        </ul>
                    </div>
                    <p className="left-column-text">Despite these challenges, the final product is fully functional and closely matches the original design intent.</p>
                </div>
                <motion.video
                src="src/assets/videos/BMWDemo.mp4" 
                alt="Demo Video" 
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7, ease: "easeInOut"}}
                viewport={{ once: true, amount: 0.3 }}
                autoPlay
                muted
                playsInline
                controls
                />
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
            <p className="conclusion-intro">The BMW concept redesign successfully bridges the gap between digital utility and luxury prestige. By stripping away visual clutter and prioritizing high-fidelity motion, the platform now reflects the 'Ultimate Driving Machine' philosophy, presenting BMW as a modern, performance-driven brand.</p>
            <div className="growth-container">
                <h1 className="project-subheading">Key Takeaways & Growth</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Luxury UX Strategy:</span> I learned to move beyond 'functional' design to 'emotional' design—using white space, motion, and typography to evoke a feeling of exclusivity.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Technical Fidelity:</span> This project pushed my React skills, specifically in managing complex interaction states and ensuring high-resolution video parity across device types.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Brand Integrity:</span> I gained a deeper appreciation for the 'Brand-Legal' balance, learning how to select license-compliant assets that maintain a proprietary aesthetic.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Performance Awareness:</span> Navigating the weight of 4K assets has significantly sharpened my focus on front-end optimization and the critical nature of asset-loading strategies.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="next-steps-container">
                <h1 className="project-subheading">Next Steps</h1>
                <p className="next-steps-intro">If this were a production-ready client project, my next phase would focus on refining the balance between high-fidelity visuals and technical performance:</p>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Brand Alignment & Asset Integration:</span> I would collaborate with the BMW Canada brand team to transition placeholders to brand-certified visuals and move from Titillium Web to the proprietary BMW Type Next typeface, ensuring 100% visual compliance with the global brand ecosystem.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Asset & Performance Engineering:</span> To ensure a seamless experience, I would compress all media (using WebP and optimized video bitrates) and implement lazy-loading to achieve sub-second 'Time to Interactive.'
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Data-Driven Iteration:</span> By integrating analytics, I would track user engagement across the video modules to identify which models drive the most conversions, allowing for data-backed UI refinements.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Usability Validation:</span> I would conduct structured usability testing to ensure the 'minimalist' navigation remains intuitive for all user demographics, refining the flow based on real-world behavior.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="bottom-line"><span className="bullet-heading">The Bottom Line:</span> This project reinforced the value of combining high-end visual storytelling with thoughtful development to create a digital experience that feels as premium as the 'Ultimate Driving Machine'."</p>
        </motion.section>
    )
}