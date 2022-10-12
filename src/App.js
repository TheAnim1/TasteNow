import './App.css';
import AboutUs from './Components/AboutUs';
import Categories from './Components/Categories';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <Categories/>
     <AboutUs/>
    </div>
  );
}

export default App;
