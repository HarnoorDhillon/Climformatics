import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Solutions from './Solutions';
import ParallaxVideo from './ParallaxVideo';
import About from './About';
import AnimateOnScroll from './AnimateOnScroll';
import Resources from './Resources';
import graph1 from './images/climate-graph.png';
import graph2 from './images/global-warming.webp';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<> <ParallaxVideo /> <AppContent /></>} exact />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        
      </div>
    </Router>
  );
}


function AppContent() {
  const videoSrc = "https://dl.dropboxusercontent.com/scl/fi/w5kofrvy06iw6ztn7v8q2/climformatics.mp4?rlkey=ydcvwhioghmuvq2mck4a1z0w3&st=bvn1az2w";


  return (
    <div className="App">
      <div className="white-section">
        <AnimateOnScroll reappear threshold={0.1} direction="right">
        <div className="content-container">
            <div className="graph-box">
              <img src={graph1} alt="graph" className="graph-box-image" />
            </div>
            <div className="green-box">
              <p className="green-box-text">
                According to Earth's changing climate, our team of experts identify future risks and help you mitigate upcoming threats while discovering new opportunities for your unique enterprise.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <div className="white-section-2">
        <AnimateOnScroll reappear threshold={0.1} direction="left">
          <div className="content-container">
            <div className="purple-box">
              <p className="purple-box-text">
              Climformatics commits to the application of best practices for the protection of the environment, the health and safety of the public and those at work on our projects, and the safety, monitoring, and governance of Center for Climate Restoration supported restoration activities.
              </p>
            </div>
            <div className="graph-box-2">
                <img src={graph2} alt="graph" className="graph-box-image-2" />
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll reappear threshold={0.1} direction="right">
          <div className="video-box">
            <video controls className="responsive-video">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default App;
