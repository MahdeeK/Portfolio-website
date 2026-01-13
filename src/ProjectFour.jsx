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

function ProjectFour() {
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

export default ProjectFour

function Hero() {
    return (
        <header className="viewport-content" 
        style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}pictures/receiptlyimage.png)`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay"
        }}>
            <HeroNav />
            <div className="hero-text-container">
                <h1 className="project-title">Receiptly</h1>
                <p className="project-caption">
                    A comprehensive financial ecosystem designed to simplify expense management through automated data extraction, intuitive categorization, and a modernist UI.
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
                            Many high-quality finance and receipt-tracking apps are locked behind expensive subscription models, while the free alternatives often suffer from dated interfaces, poor user flows, or lack of features and storage. This creates a barrier for users who want a professional-grade tool to manage their spending without adding a recurring cost to their budget.
                        </p>
                    </div>
                    <div className="solution-statement-container" style={{marginBottom: "48px"}}>
                        <h2 className="summary-headline">Solution</h2>
                        <p className="summary-text">
                            I designed a multi-page financial ecosystem that prioritizes "at-a-glance" awareness with a premium, modernist aesthetic. Beyond the Figma design, I built the core layouts using SwiftUI to ensure my design vision was technically feasible in a native iOS environment. My goal was to create a platform that feels as high-end as a paid SaaS product but is designed as a free, accessible tool.
                        </p>
                    </div>
                    <p className="motivation-text">
                        This project was a challenge to distill complex data into a "clean and modern" layout. Beyond the design, I approached this with a developer’s mindset, planning the architecture for a future build that would provide a high-quality, free alternative to the current market offerings.
                    </p>
                </div>
                <div className="key-stats">
                    <ul>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Project Type</h2>
                            <p style={{margin: "0px"}}>Personal Product Concept (MVP)</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Timeline</h2>
                            <p style={{margin: "0px"}}>~2 Week</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Role</h2>
                            <p style={{margin: "0px"}}>Solo UI/UX Designer & iOS Developer</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Design Stack</h2>
                            <p style={{margin: "0px"}}>Figma</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Tech Stack</h2>
                            <p style={{margin: "0px"}}>SwiftUI</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Links</h2>
                            <p style={{margin: "0px"}}><a className="summary-links" href="https://www.figma.com/design/6BHcFUseVPzOOqPQVDsEI2/Digital-Receipt-App?node-id=0-1&t=wNKi2dWF5WCP4JJj-1" target="_blank">Figma File</a></p>
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
                    <p className="process-card-text">Analyzing the competitive landscape to identify the "paywalls" that prevent users from accessing high-quality financial tools.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">02</h1>
                        <h1 className="process-card-title">Architecture</h1>
                    </div>
                    <p className="process-card-text">Mapping out a six-pillar navigation system: Dashboard, Expenses, Receipt Gallery, Budgeting, and Settings.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">03</h1>
                        <h1 className="process-card-title">Design</h1>
                    </div>
                    <p className="process-card-text">Crafting a clean, Figtree-based UI in Figma that uses "soft-modernism" to make data-heavy pages feel approachable.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">04</h1>
                        <h1 className="process-card-title">Technical Bridge</h1>
                    </div>
                    <p className="process-card-text">Translating core Figma layouts into native SwiftUI code to validate the design's feasibility and performance on iOS.</p>
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
                My research began with a competitive audit of the current financial app landscape. I found a significant gap in the market: apps that offered high-end UX and automated categorization were almost exclusively "Pro" or subscription-based, while free tools felt cluttered and unintuitive. I realized there was a clear opportunity for a Free-to-Use MVP that didn't compromise on design standards. I drew inspiration from modern fintech interfaces but simplified the user flow to focus on the essential features—receipt tracking and monthly budgeting—ensuring the app remained lightweight and focused.
            </p>
            <div className="key-insights-container">
                <h1 className="project-subheading">Key Decisions & Insights</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">The "At-A-Glance" Dashboard:</span> I designed the primary landing page to act as a command center, displaying the total monthly spend, top three spending categories, and a quick-access scrollable container for recent receipts.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Granular Expense Intelligence:</span> The Expenses page combines a calendar heatmap with a percentage-based category breakdown. This allows users to see not just how much they spent, but the frequency and proportion of their habits.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Receipt Transformation Logic:</span> I designed a flow where messy physical receipts are replaced by organized digital layouts. Clicking a receipt opens a clean, digital summary of store, date, and price rather than just a raw photo.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Proactive Budgeting:</span> I developed a Budget page where users can create custom categories and set spending limits. Visual progress bars and percentages show how close a user is to their limit or if they've exceeded it, encouraging proactive financial discipline.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Filter-First Gallery:</span> The Receipt Gallery was built for high-speed retrieval, allowing users to filter history by category, store, price, or date, ensuring that expense reporting is stress-free.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Trust Theory Palette:</span> Using blue as a primary color signifies stability and trust, while red is used sparingly for overspending alerts and log-out actions to ensure clear visual communication.
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
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/intuit.png`} alt="Intuit Homepage Image" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/expensify.png`} alt="Expensify Homepage Image" variants={item}/>
            </motion.div>
        </section>
    )
}

function Wireframing() {
    return (
        <section className="content-container">
            <h1 className="project-heading">Ideation & Wireframing</h1>
            <motion.div 
            className="image-gallery mobile-images"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlyhomewireframe.png`} alt="something" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlysigninwireframe.png`} alt="something" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlydashboardwireframe.png`} alt="something" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlyexpenseswireframe.png`} alt="something" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlypreviewwireframe.png`} alt="something" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlygallerywireframe.png`} alt="something" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlybudgetswireframe.png`} alt="something" variants={item}/>
                    <motion.img src={`${import.meta.env.BASE_URL}pictures/receiptlyreceiptwireframe.png`} alt="something" variants={item}/>
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
                The visual direction centered on minimalism and trustworthiness. The result was a simple and
                intuitive design that conveys financial trust and stability.
            </motion.p>
                <div className="design-item">
                    <motion.img 
                    className="design-image mobile-design" 
                    src={`${import.meta.env.BASE_URL}pictures/receiptlydashboard.webp`}
                    alt="About Page Intro Image"
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
                        <h1 className="design-item-title">High-Level Financial Awareness</h1>
                        <p className="design-item-text">
                            The primary landing page utilizes a card-based layout to provide an immediate snapshot of financial health. 
                            At the top, a prominent primary card displays the total monthly spend alongside the "Top 3 Categories" to drive instant awareness.
                            Below, a scrollable container features recent transactions, using soft shadows and high-contrast typography to distinguish between 
                            store names, dates, and amounts. The bottom navigation bar uses clear, minimalist iconography to anchor the user experience.
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
                        <h1 className="design-item-title">Behavioral Trend Analysis</h1>
                        <p className="design-item-text">
                            This screen focuses on data visualization and trend analysis. It features a unique calendar heatmap that allows users to visualize 
                            spending frequency throughout the month at a glance. Below the heatmap, a vertical list breaks down spending by category, 
                            utilizing percentage-based progress indicators and a neutral color palette. This layout prioritizes scannability, helping users 
                            identify exactly where the largest portion of their budget is being allocated.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image mobile-design" 
                    src={`${import.meta.env.BASE_URL}pictures/receiptlyexpenses.webp`} 
                    alt="Project Summary Image"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image mobile-design" 
                    src={`${import.meta.env.BASE_URL}pictures/receiptlyreceiptimage.png`} 
                    alt="About Page Intro Image"
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
                        <h1 className="design-item-title">Frictionless Asset Capture</h1>
                        <p className="design-item-text">
                            This view showcases the initial data-entry phase, featuring a high-resolution image of a physical receipt. The interface is 
                            intentionally sparse, placing the focus entirely on the captured document. A simple header provides the date and time of 
                            the capture, while minimalist bottom icons (Export, Favorite, Delete) allow for immediate organization before the app 
                            processes the data.
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
                        <h1 className="design-item-title">Proactive Budget Management</h1>
                        <p className="design-item-text">
                            The Budgeting interface is designed for proactive financial management. Each category is presented as a distinct module 
                            showing the current spend relative to the set limit. A dynamic progress bar system provides instant visual feedback—using 
                            a calm blue for healthy spending and a striking red for over-budget categories (like "Dining Out"). The "Add Category" button 
                            is prominently placed to encourage users to customize their tracking experience.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image mobile-design" 
                    src={`${import.meta.env.BASE_URL}pictures/receiptlybudgets.png`} 
                    alt="Project Summary Image"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image mobile-design" 
                    src={`${import.meta.env.BASE_URL}pictures/receiptlysettings.webp`} 
                    alt="About Page Intro Image"
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
                        <h1 className="design-item-title">Intuitive Administrative UX</h1>
                        <p className="design-item-text">
                            The Settings page maintains the app's minimalist aesthetic with a focus on clean input fields and legibility. It organizes 
                            user information—Full Name, Email, and Security—into a single-column layout with generous white space. Secondary actions 
                            like "Help," "About," and the high-visibility "Delete Account" action in red ensure that administrative tasks are intuitive 
                            and easy to navigate.
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
                        <h1 className="design-item-title">Structural Data Transformation</h1>
                        <p className="design-item-text">
                            This screen demonstrates the "transformation" logic of the app. It replaces the messy, physical photo with a structured digital summary. 
                            The design uses a clean table format to list individual items, quantities, and prices, followed by a clear subtotal and tax breakdown. 
                            By standardizing the information into this clean layout, the app removes visual clutter and makes historical expense review effortless.
                        </p>
                    </motion.div>
                    <motion.img 
                    className="design-image mobile-design" 
                    src={`${import.meta.env.BASE_URL}pictures/receiptlyreceipt.webp`} 
                    alt="Project Summary Image"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
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
                    <p>I translated the core layouts from Figma into native code using SwiftUI. This phase was a technical study in "Design-to-Code" parity, focusing on building high-fidelity static views that serve as the foundation for a future functional app.</p>
                    <div className="implementation-highlights">
                        <h1 className="project-subheading">Implementation Highlights</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Responsive Design:</span> A fully responsive layout optimized for seamless viewing across iOS compatible devices.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Declarative UI Construction:</span> I used SwiftUI’s declarative syntax to build the dashboard and expense views, ensuring the complex layouts remained clean and maintainable for future logic integration.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Dynamic Lists & Containers:</span> I utilized ScrollView to handle the receipt feed layouts, ensuring the interface remains performant as the user’s history grows.
                                </li>
                        </ul>
                    </div>
                    <div className="technical-challenges">
                        <h1 className="project-subheading">Technical Challenges</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Color Accuracy:</span> Ensuring the specific blue and red brand accents maintained their "financial trust" vibrance across different iPhone display settings (True Tone/Auto-Brightness).
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Responsive Scaling: </span> I had to ensure the percentage-based category charts and headers scaled correctly across various iPhone screen sizes without clipping text or overlapping data.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Code-Design Parity: </span> The challenge was ensuring that the "soft-modernist" look from Figma didn't lose its premium feel when translated into the constraints of native SwiftUI containers.
                                </li>
                        </ul>
                    </div>
                    <p className="left-column-text">Despite these challenges, the product is technically feasible and looks pleasing using the original design.</p>
                </div>
                <motion.video 
                src={`${import.meta.env.BASE_URL}videos/PokedexDemo.mov`} 
                alt="something" 
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7, ease: "easeInOut"}}
                viewport={{ once: true, amount: 0.3 }}/>
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
            <p className="conclusion-intro">The Finance Flow concept successfully demonstrates that financial tools do not have to be visually dense or expensive to be powerful. By combining a "soft-modernist" UI with intuitive data visualizations like the calendar heatmap, the project bridges the gap between complex expense tracking and a frictionless user experience. Building the core layouts in SwiftUI further validated the design's feasibility, proving that high-end, professional-grade budgeting tools can be made accessible and intuitive for the everyday user.</p>
            <div className="growth-container">
                <h1 className="project-subheading">Key Takeaways & Growth</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Bridging Design and Code:</span> Translating my own Figma designs into SwiftUI taught me exactly how much "padding" and "spacing" logic is required to make a design feel native rather than just a web-view.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Data Visualization Strategy:</span> Designing the calendar heatmap taught me how to present "boring" data in a creative way that adds actual value to the user’s daily routine.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Color Theory in Utility:</span> I learned how to use a restricted color palette to drive user behavior—using blue to build confidence and red as a high-impact signal for warnings or errors.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">MVP Prioritization:</span> This project reinforced the importance of focusing on core features (categorization and high-level summaries) before adding secondary complexity, ensuring the product remains lightweight.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="next-steps-container">
                <h1 className="project-subheading">Next Steps</h1>
                <p className="next-steps-intro">If this were a production-ready client project, my next phase would focus on turning these static layouts into a fully functional reality:</p>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Functional Prototyping & Logic:</span> I would transition from static views to a functional prototype by implementing @State and @Binding to connect the navigation and allow for interactive user flows.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Backend & Persistence:</span> I would integrate a database (like SwiftData or Firebase) to allow for persistent storage, enabling the "Budget" and "Gallery" pages to handle real-time user data.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Vision Framework OCR:</span> I would implement Apple’s Vision Framework to perform on-device OCR, allowing the app to extract text from receipt photos and automatically populate the digital layouts I've designed.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Full-App Build-Out:</span> I would develop the remaining pages, including the complete settings menu and the integrated support/FAQ sections, to bring the entire ecosystem to a "v1.0" launch state.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="bottom-line"><span className="bullet-heading">The Bottom Line:</span> This project reinforced the value of "Clarity over Clutter"—proving that high-end design and native development can democratize financial tools, making professional-grade budgeting accessible to everyone.</p>
        </motion.section>
    )
}