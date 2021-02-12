import React from 'react';
import './Projects.scss';
import ProjectCard from '../projectCard/ProjectCard';
import socialMedia from '../../images/FriendBookLogin.png';
import cameraStore from '../../images/camera-store.png';
import portfolio from '../../images/portfolio.png';

export default function Projects() {
  return (
    <div className="projects-root">
      <div className="projects-container">
        <ProjectCard
          title="Social Media Website"
          image={socialMedia}
          liveLink="https://social-media-d03f3.web.app/"
          codeLink="https://github.com/cwil423/social-media"
          description="A single feed social media website built with React, Redux and Firebase."
        />
        <ProjectCard
          title="Camera Store"
          image={cameraStore}
          liveLink="https://inspiring-cray-1b1890.netlify.app/Cameras"
          codeLink="https://github.com/cwil423/ecommerce-site"
          description="A camera store built with React, Gatsby, Redux, Node, Express and MongoDb"
        />
        <ProjectCard
          title="This website"
          image={portfolio}
          codeLink="https://github.com/cwil423/portfolio"
          description="Portfolio project built with react. Includes custom animations made with photo editing software."
        />
      </div>
    </div>
  );
}
