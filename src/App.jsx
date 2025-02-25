import './App.css'
import About from './components/About'
import About2 from './components/About2'
import Cards from './components/Cards'
import Eyes from './components/Eyes'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Marques from './components/Marques'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LocomotiveScroll from 'locomotive-scroll';
import Ready from './components/Ready'

function App() {


const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
      <div className='w-full h-screen text-white'>
        <Navbar/>
        <Hero/>
        <Marques/>
        <About/>
        <About2/>
        <Eyes/>
        <Projects/>
        <Cards/>
        <Ready/>
        <Footer/>
      </div>
    </>
  )
}

export default App