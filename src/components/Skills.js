import ReactPlayer from 'react-player';
import React from 'react';
import video from '../assets/img/Untitled.mp4';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Teaser </h2>
              
              <div className="local-video">
                <ReactPlayer
                  url={video}
                  width="100%"
                  height="100%"

                  controls
                  playing
                  autoplay = {true}
                  muted
                  loop
                  playsinline
                  
                  origin="http://localhost:3000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;