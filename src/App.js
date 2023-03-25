import About from "./components/About";
import Achevements from "./components/Achievements";
import Contact from "./components/Contact";
import Experiencs from "./components/Experiencs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <view>
      <NavBar />
    
    
      <Home />
     
      
      <About />
      
      
      <Portfolio />
    
      <Experiencs />
      <Achevements />
      <Contact />
      <BrowserRouter>
    
   
  
      
      
     
       </BrowserRouter>

      <SocialLinks />
     
      </view>
    </div>
  );
}

export default App;