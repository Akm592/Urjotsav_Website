import React from "react";
import "../css/video.css";

export const Video = () => {
  return (
    <section className="video" id="video">
      <iframe
        src="https://www.youtube.com/embed/Vo8huF43CB4"
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </section>
  );
};
