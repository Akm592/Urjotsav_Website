import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";

import { Home } from "./pages/home";
import { BrowserRouter, Routes , Route} from "react-router-dom";

import backgroundImg from "./assets/img/banner-bg.png";
import { Sponsors } from "./pages/sponsors";
import { ContactUs } from "./pages/ContactUs"; 
import { AboutTeams } from "./pages/AboutTeams";

import {Events} from "./pages/events"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element = {<Events />} />
          <Route path="/Sponsors" element = {<Sponsors />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutTeams" element={<AboutTeams />} />

          
          {/* <AnimatedCursor
        innerSize={15}
        outerSize={16}
        color='69,234,249'
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={10}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      /> */}

        

     
     
   
   
     
        </Routes>
        
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
