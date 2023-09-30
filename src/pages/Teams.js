import React from "react";
import backgroundImg from "../css/teams.jpg";
import andaru from "../assets/img/123.jpeg";
import andre from "../assets/img/128.jpeg";
import ligat from "../assets/img/Events.png";
import sammy from "../assets/img/9. Egg Drop Challenge.jpg";
import "../css/teams.css";

export const Teams = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* <h1>About Us</h1> */}
      <div className="card-container">
        <div className="card">
          <div className="circle"></div>
          <img src={andaru} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Andaru Hymawan Primayudha</h2>
            <p>.....................</p>
          </div>
        </div>

        <div className="card">
          <div className="circle"></div>
          <img src={andre} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Andre Gamalion</h2>
            <p>
              Seorang keturunan China yang tidak terlihat seperti China. Banyak
              lagi mischief yang terjadi pada pemuda ini, seperti namanya yang
              typo di dalam akta lahir.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="circle"></div>
          <img src={ligat} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Maha Ligat Dewa Cindra</h2>
            <p>......................</p>
          </div>
        </div>

        <div className="card">
          <div className="circle"></div>
          <img src={sammy} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Sammy Ghoutan Sitompul</h2>
            <p>.......................</p>
          </div>
        </div>
      </div>
    </div>
  );
};


