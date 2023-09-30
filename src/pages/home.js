import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { Banner } from '../components/Banner';
import { TextBlock } from '../components/TextBlock';
import {Skills} from "../components/Skills"
import '../css/home.css';
import "../App.css"
import "../css/video.css"
import { Video } from '../components/video';



export const Home = () => {
  return (
    <div className="home">
      <Parallax pages={3} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback">
            <div className="banner_layer" id="home"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland">
            <Banner />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={4} speed={0.5}>
          <div className="animation_laye parallax" id="logola">
            <div className="banner_layer" id="home">
              <Video />
            </div>
          </div>
        </ParallaxLayer> */}
       
        <ParallaxLayer offset={1.75} speed={0.5}>
         
            <Skills />
        
        </ParallaxLayer>
        
      </Parallax>

      {/* <Skills /> */}
    </div>
  );
};