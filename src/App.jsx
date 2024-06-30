import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Navbar from './components/Navbar';
import Features from './components/Features'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <h1 className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </h1>
  )
}

export default App;