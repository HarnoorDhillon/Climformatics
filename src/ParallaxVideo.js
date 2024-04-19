import React, { useEffect, useState } from 'react';
import './ParallaxVideo.css';
import hurricaneVideo from './images/world.mp4';

const ParallaxVideo = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset / 2); // Adjust division for effect speed

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="video-parallax-container" style={{position: 'relative', overflow: 'hidden', height: '800px'}}>
      {/* Both the video and the text overlay move together with the same translateY value */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="parallax-video"
        style={{ transform: `translateY(${offsetY}px)` }} // Apply effect
      >
        <source src={hurricaneVideo} type="video/mp4" />
      </video>
      <div className="parallax-content" style={{ transform: `translateY(${offsetY}px)` }} >
        <div className= "parallax-text"> How can a world-class climate prediction platform enhance your business? </div>
        
      </div>
    </div>
  );
};

export default ParallaxVideo;
