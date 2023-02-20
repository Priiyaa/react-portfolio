import About from "./components/About";
import Achevements from "./components/Achievements";
import Contact from "./components/Contact";
import Experiencs from "./components/Experiencs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

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
    
   
   {/* <Routes>
     <Route path="/awards" element={<Achevements />}  /> 
    
</Routes> */}

       {/* <NavBar /> */}
      
      
     
       </BrowserRouter>

      <SocialLinks />
      {/* <Achevements /> */}
     
          
      {/* 1) routing for ACHIEVEMENTS 2)FOOTER for social links 3) DARK-LIGHT mode 4)RESMUE in nav-bar */}
      </view>
    </div>
  );
}

export default App;