import React from 'react';
import './ProjectBox.css';

export default function ProjectBox({ title, description, image, titleColor = "#ffd700" }) {
  return (
    <div className="project-box">
      <img src={image} alt={title} className="project-img" />
      <div className="project-overlay"></div>
      <div className="project-content">
        {/* Uses the same font variable as the home page styling */}
        <h3 className="project-title" style={{ color: titleColor }}>{title}</h3>
        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}