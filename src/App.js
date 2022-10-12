import './App.css';
import AboutUs from './Components/AboutUs';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <Categories/>
     <AboutUs/>
     <Footer/>
    </div>
  );
}

export default App;
