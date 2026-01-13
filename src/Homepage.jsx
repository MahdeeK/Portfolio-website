import { Link } from 'react-router-dom'
import './Homepage.css'
import Footer from './components/Footer.jsx'
import HeroNav from './components/HeroNav.jsx'
import WorksItem from './components/Works.jsx'
import PageTransition from './components/PageTransition.jsx'

function Homepage() {
  return (
    <PageTransition>
      <Hero />
      <Works />
      <Footer />
    </PageTransition>
  )
}

export default Homepage

function Hero () {
  return (
    <header className="viewport-content" id="home">
      <HeroNav />
      <div className="hero-text-container">
        <div className="hero-text">
          <h1 className="full-name">MAHDEE KHANDOKAR</h1>
          <p className="title">Hybrid Designer & Developer. I bridge the gap between creative vision and technical execution to deliver end-to-end digital products. Currently seeking 2026 Internship opportunities.</p>
        </div>
      </div>
    </header>
  )
}

function Works () {
  const Projects = [
    {
        id: 1,
        title: "BMW Homepage Redesign Concept",
        tags: "UI/UX Design, Front-End Development",
        image: `${import.meta.env.BASE_URL}pictures/bmwhomepagedesign.png`,
        alt: "BMW Project", 
    },
    {
        id: 2,
        title: "Portfolio",
        tags: "UI/UX Design, Front-End Development",
        image: `${import.meta.env.BASE_URL}pictures/aboutpagehero.png`,
        alt: "Portfolio Project",
    },
    {
        id: 3,
        title: "Rocksteady Website Redesign Concept",
        tags: "UI/UX Design",
        image: `${import.meta.env.BASE_URL}pictures/rocksteady.png`,
        alt: "Rocksteady Project",
    },
    {
        id: 4,
        title: "Receiptly",
        tags: "UI/UX Design",
        image: `${import.meta.env.BASE_URL}pictures/receiptlyimage(1).png`,
        alt: "Receiptly Project", 
    },
    {
        id: 5,
        title: "Pokedex",
        tags: "Full-Stack Development",
        image: `${import.meta.env.BASE_URL}pictures/pokedexHomepage.png`,
        alt: "Pokedex Project",
    }

  ];
  return (
      <div className="works-section content-wrapper" id="works">
          {Projects.map((project) => {
            return (
              <Link to={`/project${project.id}`} key={project.id} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <WorksItem project={project}/>
              </Link>
            );
          })}
      </div>
  )
}