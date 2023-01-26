import About from "./components/About";
import Contact from "./components/Contact";
import Experiencs from "./components/Experiencs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <view>
      <NavBar />
    
      <Home />
      
      <About />
     
      
      <Portfolio />
      
      <Experiencs />
     
      <Contact />
     

      <SocialLinks />
      </view>
    </div>
  );
}

export default App;