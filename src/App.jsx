import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";
import "./theme";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Certificates from "./components/Certificates";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Skills />
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
       
    </>
  );
}

export default App;
