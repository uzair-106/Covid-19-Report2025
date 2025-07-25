import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2>About This COVID-19 Dashboard</h2>
        <p>
          This COVID-19 Data Visualization Dashboard tracks real-time statistics globally and locally,
          including cases, deaths, and recoveries.
        </p>

        <h3>COVID-19 Related Images</h3>
       <div className="image-grid">

  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image hover:scale=1.5" />
  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image" />
  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image" />
  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image" />
  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image" />
  
  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image" />
  
  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image" />
  
  <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80" alt="Microscopic virus image" />
</div>

        <h3>COVID-19 Awareness Video</h3>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/BtN-goy9VOY"
            title="COVID-19 Awareness"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h3>Credits</h3>
        <p>
          Data Source: <a href="https://disease.sh" target="_blank" rel="noreferrer">disease.sh</a><br />
          Image Credits: Pixabay (open license)
        </p>
      </div>
    </div>
  );
};

export default About;
