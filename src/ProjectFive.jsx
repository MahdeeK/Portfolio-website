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

function ProjectFive() {
    return (
        <PageTransition>
            <Hero />
            <Summary />
            <Process />
            <Research />
            <Design />
            <Development />
            <Conclusion />
            <Footer />
        </PageTransition>
    )
}

export default ProjectFive

function Hero() {
    return (
        <header className="viewport-content" 
        style={{
        backgroundImage: "url(src/assets/pictures/PokedexHomepage.png)", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "overlay"
        }}>
            <HeroNav />
            <div className="hero-text-container">
                <h1 className="project-title">Pokedex</h1>
                <p className="project-caption">
                    A comprehensive Pokédex web application developed to demonstrate advanced relational 
                    database management, featuring a custom-built MySQL schema and 10 specialized SQL-driven features.
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
                            The primary challenge was to design and implement a database-driven application that met strict academic requirements: 10 distinct features powered by five basic and five advanced SQL queries. We needed a subject matter that provided a rich, multi-relational dataset to allow for complex joins, subqueries, and aggregations without feeling forced or repetitive.
                        </p>
                    </div>
                    <div className="solution-statement-container" style={{marginBottom: "48px"}}>
                        <h2 className="summary-headline">Solution</h2>
                        <p className="summary-text">
                            My team developed a full-stack Pokédex. Pokémon data is inherently relational (Types, Abilities, Moves, Evolutions, Stats), making it the perfect candidate for a database study. We built a React-based web application backed by Node.js and MySQL, allowing users to interact with a high-performance interface that executes complex real-time queries against a relational dataset.
                        </p>
                    </div>
                    <p className="motivation-text">
                        This project was an academic challenge to bridge a complex relational schema with features a real-world user would actually value. Beyond the SQL requirements, it pushed us to think like product designers—identifying meaningful features and balancing that ambition against technical feasibility. Translating these concepts into a working full-stack application required constant coordination between our normalized database logic and the user experience.
                    </p>
                </div>
                <div className="key-stats">
                    <ul>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Project Type</h2>
                            <p style={{margin: "0px"}}>Academic Database Management Project</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Timeline</h2>
                            <p style={{margin: "0px"}}>~3 months</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Role</h2>
                            <p style={{margin: "0px"}}>Full-Stack Developer & Database Designer</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Tech Stack</h2>
                            <p style={{margin: "0px"}}>React (Vite), Node.js, MySQL, Tailwind CSS</p>
                        </li>
                        <li className="summary-list-item">
                            <h2 className="summary-headline" style={{marginBottom: "8px"}}>Links</h2>
                            <p style={{margin: "0px"}}><a className="summary-links" href="https://github.com/lolajamesw/pokedex" target="_blank">GitHub Repository</a></p>
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
            <h1 className="project-subheading" style={{marginBottom: "32px"}}>Our Process</h1>
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
                        <h1 className="process-card-title">Ideation</h1>
                    </div>
                    <p className="process-card-text">Brainstorming subjects with deep relational potential; we settled on Pokémon due to the intricate connections between species, moves, and types.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">02</h1>
                        <h1 className="process-card-title">Schema Design</h1>
                    </div>
                    <p className="process-card-text">Mapping the Entity-Relationship (ER) diagram to ensure 3rd Normal Form (3NF) compliance to avoid data redundancy.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">03</h1>
                        <h1 className="process-card-title">Query Engineering</h1>
                    </div>
                    <p className="process-card-text">Developing 10 specific features, split evenly between standard CRUD operations and advanced relational logic.</p>
                </motion.div>
                <motion.div className="process-card" variants={item}>
                    <div className="card-title-container">
                        <h1 className="process-card-number">04</h1>
                        <h1 className="process-card-title">Build</h1>
                    </div>
                    <p className="process-card-text">Connecting the React frontend to the Node.js API to trigger and display the results of our MySQL queries.</p>
                </motion.div>
            </motion.div>
        </section>
    )
}

function Research() {
    return (
        <section className="content-container">
            <h1 className="project-heading">Technical Planning & Architecture</h1>
            <p className="research-intro">
                Before writing a single line of code, my team developed a formal project proposal and technical report to map out the system’s logic and satisfy the course's rigorous requirements. This phase was critical for defining how a massive dataset of Pokémon, types, abilities, and moves would interact within a relational environment.
            </p>
            <div className="key-insights-container">
                <h1 className="project-subheading">Key Decisions & Insights</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Comprehensive Feature Scoping:</span> We drafted a detailed proposal outlining 10 core features, carefully balancing 5 basic queries (standard filtering) with 5 advanced queries (joins and aggregations) to demonstrate a full range of SQL proficiency.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Schema Design & Normalization:</span> I helped design the Entity-Relationship (ER) diagram to visualize the connections (many-to-many, one-to-many, etc.) between different entities that we would require in our schema. We then translated this into a relational schema to ensure data integrity and ease of translating it to SQL.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">High-Level Systems Overview:</span> We authored a technical report that served as our development roadmap, providing a structural breakdown of how our backend logic would bridge the gap between user requests and the MySQL database.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Full-Stack Implementation Strategy:</span> We evaluated various environments and selected a React and Node.js stack to build a modern web application, allowing us to handle data-heavy relational queries asynchronously for a seamless user experience.
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
                <motion.img src="src/assets/pictures/pokedexerdiagram.PNG" alt="ER Diagram for the Database Schema" variants={item}/>
            </motion.div>
        </section>
    )
}

function Design() {
    return (
        <section className="content-container">
            <h1 className="project-heading">Features</h1>
            <motion.p 
            className="left-column-text"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeInOut"}}
            viewport={{ once: true, amount: 0.3 }}
            >
                The project implemented 10 distinct features designed to showcase a full range of relational database proficiency.
            </motion.p>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature1.png" 
                    alt="Feature 1"
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
                        <h1 className="design-item-title">Dynamic Pokédex Index</h1>
                        <p className="design-item-text">An ordered list of Pokémon with stats and real-time "Caught" tags based on user data.</p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1>Manual Entry & Draft Persistence</h1>
                        <p className="design-item-text">A feature for users to add caught Pokémon with nicknames and levels; incomplete entries are cached to prevent data loss.</p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature2.PNG" 
                    alt="Feature 2" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature3.png" 
                    alt="Feature 3" 
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
                        <h1>Collection Management</h1>
                        <p className="design-item-text">Logic for favoriting or adding Pokémon to a "Best 6" team, with SQL-level count checks to enforce slot limits.</p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1>Real-Time User Discovery</h1>
                        <p className="design-item-text">A search function allowing users to find others by Username or uID to view profiles and trade history.</p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature4.png" 
                    alt="Feature 4" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature5.png" 
                    alt="Feature 5" 
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
                        <h1>Trade History Tracking</h1>
                        <p className="design-item-text">A granular view that identifies every instance where a specific Pokémon was listed or offered in a trade.</p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1>Strongest Counter Algorithm</h1>
                        <p className="design-item-text">A battle-logic query that analyzes an opponent's type and returns the strongest counter from the user's specific collection.</p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature6.png" 
                    alt="Feature 6" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature7.png" 
                    alt="Feature 7" 
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
                        <h1>Team Effectiveness Summary</h1>
                        <p className="design-item-text">An aggregation query that calculates the average attack and defense multipliers for a user’s entire team against all 18 types.</p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1>Global Marketplace</h1>
                        <p className="design-item-text">A multi-tab trading system (Listings, My Listings, Create Listing) requiring complex state management across multiple tables.</p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature8.png" 
                    alt="Feature 8" 
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }} 
                    />
                </div>
                <div className="design-item">
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature9.png" 
                    alt="Feature 9" 
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
                        <h1>Authenticated User Accounts</h1>
                        <p className="design-item-text">A secure login/sign-up system with data validation that gates user-specific features like "My Pokémon" and "Trades."</p>
                    </motion.div>
                </div>
                <div className="design-item flipped-design">
                    <motion.div 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <h1 className="design-item-title">Multi-Join Species Intelligence</h1>
                        <p className="design-item-text">A deep-dive view that pulls data from moves, evolution lines, and effectiveness tables into one comprehensive Pokémon profile.</p>
                    </motion.div>
                    <motion.img 
                    className="design-image" 
                    src="src/assets/pictures/pokedexfeature10.png" 
                    alt="Feature 10" 
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
                    <p>My work focused on building the "core" of the application—from the visual template to the critical authentication and data-entry systems that made the app functional for users.</p>
                    <div className="implementation-highlights">
                        <h1 className="project-subheading">Implementation Highlights</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Full-Stack Bridge:</span> I engineered the connection between the React frontend and the MySQL database via a Node.js API, ensuring data flowed correctly from the server to the UI.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Authentication Infrastructure:</span> I developed the Login and Account Creation pages from scratch, implementing the logic to validate user data and redirect successfully authenticated users to the Pokédex.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Manual Entry System:</span> I built the feature that allows users to add caught Pokémon, including a "persistence" logic that saves draft data if a user cancels, ensuring a seamless user experience.
                                </li>
                        </ul>
                    </div>
                    <div className="technical-challenges">
                        <h1 className="project-subheading">Technical Challenges</h1>
                        <ul className="bulleted-list">
                                <li className="bullet-points">
                                    <span className="bullet-heading">Real-Time Social Search:</span> Implementing the User Search page required balancing alphanumeric uIDs and string usernames to provide instantaneous, filtered results as the user typed.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">State Management in Forms:</span> Managing the state for the manual entry feature was difficult; I had to ensure that custom fields like "nicknames" and "levels" were correctly associated with the correct Pokémon ID in the database.
                                </li>
                                <li className="bullet-points">
                                    <span className="bullet-heading">Cross-Stack Troubleshooting: </span> Connecting a React frontend to a MySQL database introduced several "handshake" issues (CORS, async/await timing) that I had to resolve to ensure the app felt responsive.
                                </li>
                        </ul>
                    </div>
                    <p className="left-column-text">Despite these challenges, the final product is fully functional and successfully integrates all 10 features.</p>
                </div>
                <motion.video 
                src="src/assets/videos/PokedexDemo.mov" 
                alt="Demo Video" 
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7, ease: "easeInOut"}}
                viewport={{ once: true, amount: 0.3 }}
                playsInline
                muted
                autoPlay
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
            <p className="conclusion-intro">The Pokédex project successfully fulfilled all 10 feature requirements while providing a high-performance user experience. By choosing a web application over a command-line interface, we were able to demonstrate how complex SQL queries directly translate into real-world UI features. The project was highly rated for its database complexity and the seamless integration between the frontend and the relational backend.</p>
            <div className="growth-container">
                <h1 className="project-subheading">Key Takeaways & Growth</h1>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">SQL Mastery:</span> I gained a deep understanding of advanced SQL concepts, specifically how to use Joins and Subqueries to extract specific insights from large datasets.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Relational Thinking:</span> The project taught me how to break down a complex subject into a normalized database schema that is both scalable and logical.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Full-Stack Coordination:</span> I learned the importance of "API Contracts"—ensuring the backend returns data in a format that the frontend can easily consume.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Team Collaboration:</span> Working in a group allowed us to leverage different strengths, such as Pokémon domain knowledge versus technical SQL optimization.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="next-steps-container">
                <h1 className="project-subheading">Next Steps</h1>
                <p className="next-steps-intro">If I were to continue developing this project beyond the academic scope, I would focus on:</p>
                <div className="two-column-grid">
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">Complete CRUD Functionality:</span> While the app currently allows for creating and reading entries, I would implement the "Update" and "Delete" functions for the "My Pokémon" page, allowing users to edit nicknames or remove Pokémon from their collection.
                        </li>
                        <li className="bullet-points" style={{marginBottom: "0px"}}>
                            <span className="bullet-heading">Enhanced Search Filtering:</span> I would expand the SQL logic for the main Pokédex to include more granular filters, such as searching by specific abilities, height/weight ranges, or base-stat thresholds.
                        </li>
                    </ul>
                    <ul className="bulleted-list">
                        <li className="bullet-points">
                            <span className="bullet-heading">UI Fluidity & Micro-interactions:</span> I would add subtle motions and micro-interactions such as smooth transitions for hover states and tags to make the interface feel more responsive and high-end.
                        </li>
                        <li className="bullet-points">
                            <span className="bullet-heading">Deployment & Performance:</span>My final step would be to deploy the application using a service like Railway or Heroku to make the live database accessible online, while refactoring the Node.js queries to improve loading speeds.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="bottom-line"><span className="bullet-heading">The Bottom Line:</span> This project transformed a complex dataset into a functional tool, proving that strategic database architecture and normalized schema design are the foundations of any high-performance web application.</p>
        </motion.section>
    )
}