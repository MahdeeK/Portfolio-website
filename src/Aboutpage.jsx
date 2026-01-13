import './About.css'
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from './components/Footer.jsx';
import HeroNav from './components/HeroNav.jsx';
import PageTransition from './components/PageTransition.jsx';

function Aboutpage() {
  return (
    <PageTransition>
      <Hero />
      <AboutMe />
      <Strategy />
      <Hobbies />
      <Footer />
    </PageTransition>
  )
}

export default Aboutpage

function Hero () {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / window.innerHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="viewport-content" 
    style={{
      backgroundImage: "url(src/assets/pictures/aboutpagehero.png)", 
      backgroundRepeat: "no-repeat", 
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      opacity: opacity
    }}>
      <HeroNav />
    </header>
  )
}

function AboutMe () {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className="viewport-content" ref={ref} id="value-prop">
      <motion.div className="content-wrapper centred-container" style={{ position: 'sticky', opacity, top: '0', paddingTop: '15vh'}}>
        <p className="about-large-text" style={{ textAlign:"center" }}>
          Hi, I’m Mahdee. I’m a fourth-year CS student at Waterloo and a full-stack builder based in Canada.
        </p>
        <p className="about-large-text" style={{ textAlign:"center" }}>
          I’ve found that the best digital products are built when the design and the code aren't treated as separate things. I bridge that gap by owning the entire process.
        </p>
        <p className="about-large-text" style={{ textAlign:"center" }}>
          I don't just solve business problems; I also conceptualize, design, and deliver a complete, functional product ready for launch.
        </p>
      </motion.div>
    </div>
  )
}

function Strategy () {
  return (
    <section className="content-wrapper">
      <div className="centred-container">
        <p className="body-text about-text">
          My dual skillset allows me to ensure total continuity from conception to deployment, minimizing points of friction and 
          maximizing efficiency across the product lifecycle. My approach to design is centered on crafting a compelling story for the user, 
          utilizing hierarchy, spacing, and creative layouts to build interfaces that are both intuitive and aesthetically pleasing.
        </p>
        <p className="body-text about-text">
          I back every design with clean and robust code. With experience in React, Node.js, and MySQL, I prioritize technical stability and 
          clean architecture in every feature I build. This technical rigor is complemented by a strategic mindset I apply to every project, 
          similar to the implementation strategy I developed for Wealthsimple during a live case project, which projected $4–4.5 million in savings.
        </p>
        <motion.p 
          className="about-large-text result-text"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.7, ease: "easeInOut"}}
          viewport={{ once: true, amount: 0.8 }}
        >
          The final result: a unified digital experience which is cohesive, functional, and built to create impact.
        </motion.p>
      </div>
    </section>
  )
}

function Hobbies () {
  return (
    <section className="content-wrapper page-end">
      <div className="centred-container">
        <p className="body-text about-text">
          Outside of work and school, I spend my time exploring history, engaging in intellectual discourse, and cooking. 
          However, my biggest passion is gaming, specifically story-driven RPGs and immersive action-adventure series. 
          I’m drawn to games that offer deep narrative structures and expansive worlds that evoke a genuine sense of curiosity.
        </p>
        <p className="body-text about-text">
          When I step away from work, I’m usually diving into the series featured in my hero section. While Ghost of Tsushima is my personal 
          favorite for its stunning world and compelling characters, I have a deep appreciation for the diverse strengths of each of these franchises. Whether 
          it’s the imaginative world-building of Horizon and Zelda, the challenging combat of Sekiro, or the rich historical settings of the Red Dead 
          Redemption and Assassin’s Creed series, I love exploring and seeing how these worlds are crafted.
        </p>
        <p className="body-text about-text">
          I am also particularly drawn to the "hero fantasy" perfected by the Batman Arkham and Spider-Man series, which excel at creating 
          an immersive, character-driven experience. This appreciation and excitement extends to the future of as well, which is why 
          I’ve included glimpses of titles I am highly anticipating, like 007: First Light and Phantom Blade 0, in the visuals of this site.
        </p>
        <p className="body-text about-text">
          I am currently seeking internships where I can apply my holistic skill set to build innovative, impactful digital products that 
          drive growth and solve user problems. I thrive in environments that value innovation, strategic design, and technical expertise.
        </p>
        <p className="body-text about-text">Let's work together on building your next idea.</p>
      </div>
    </section>
  )
}