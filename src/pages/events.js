import React from "react";  
import { Projects } from "../components/Projects";  
import "../App.css"
import { Contact } from "../components/Contact";
import ReactPlayer from "react-player";
import video from "../assets/img/Untitled.mp4";
import "../css/Events.css";
// import "../css/home.css";   
import { Parallax, ParallaxLayer } from "@react-spring/parallax";



   export const Events = () => {
  return (
    <section className="events">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <section className="events1">
            <div className="animation_layer parallax" id="artbac">
           
                <div className="box">
                  <div className="group">
                    <div className="text-wrapper">EVENTS</div>
                    <div className="div">WELCOME TO URJOTSAV</div>
                  </div>
                </div>
             
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <section className="events2">
            <Projects />
          </section>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};