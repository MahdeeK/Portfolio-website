import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer () {
  return (
    <div className='content-wrapper'>
      <footer>
            <h1 class="large-text underline-animation"><a href="mailto:mahdee.khandokar@gmail.com">TURN VISION INTO REALITY</a></h1>
                <div class="footer-content">
                    <ul class="footer-links">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : 'link-standard'}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'link-active' : 'link-standard'}>About</NavLink></li>
                        <li><a href={`${import.meta.env.BASE_URL}Mahdee_Khandokar_Resume.pdf`} target="_blank" rel="noreferrer">Resume</a></li>
                        <li><a href="https://www.linkedin.com/in/mahdee-khandokar/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/MahdeeK" target="_blank">GitHub</a></li>
                        <li><a href="mailto:mahdee.khandokar@gmail.com">Contact</a></li>
                    </ul>
                </div>
            <p class="footer-bottom-text">© 2025 Mahdee Khandokar. All rights reserved.</p>
        </footer>
      </div>
  )
}

export default Footer