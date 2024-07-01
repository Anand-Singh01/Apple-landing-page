import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import HowItWorks from './components/HowItWorks';
import Model from './components/Model';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <h1 className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks/>
      <Footer/>
    </h1>
  )
}

export default App;