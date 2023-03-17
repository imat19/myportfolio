import './App.css';
import NavBar from './Components/NavBar';
import Home from './Contents/Home';
import About from './Contents/About';
import Projects from './Contents/Projects';
import Contact from './Contents/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="portFolio">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
