import { ReactLenis } from 'lenis/dist/lenis-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx';
import Homepage from './Homepage.jsx';
import Aboutpage from './Aboutpage.jsx';
import ProjectOne from './ProjectOne.jsx';
import ProjectTwo from './ProjectTwo.jsx';
import ProjectThree from './ProjectThree.jsx';
import ProjectFour from './ProjectFour.jsx';
import ProjectFive from './ProjectFive.jsx';

if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function App() {
  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ReactLenis root>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='/project1' element={<ProjectOne />} />
            <Route path='/project2' element={<ProjectTwo />} />
            <Route path='/project3' element={<ProjectThree />} />
            <Route path='/project4' element={<ProjectFour />} />
            <Route path='/project5' element={<ProjectFive />} />
          </Routes>
        </ReactLenis>
      </BrowserRouter>
  )
}

export default App
