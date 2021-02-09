import React from 'react';
import './Projects.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import socialMedia from '../../images/FriendBook.png';

export default function Projects() {
  return (
    <div className="projects-root">
      <div className="projects-container">
        <ProjectCard
          title="Social Media Website"
          image={socialMedia}
          liveLink="https://social-media-d03f3.web.app/"
          codeLink="http:/code"
          discription="A single feed social media website built with React, Redux and Firebase."
        />
        <ProjectCard
          title="Camera Store"
          image="https://www.morrishospital.org/wp-content/uploads/2018/12/penguin2_2.jpg"
          liveLink="https://inspiring-cray-1b1890.netlify.app/Cameras"
          codeLink="http:/code"
          discription="A project that I worked really hard on and am reall proud of."
        />
        <ProjectCard
          title="Project"
          image="https://www.morrishospital.org/wp-content/uploads/2018/12/penguin2_2.jpg"
          liveLink="http:/live"
          codeLink="http:/code"
          discription="A project that I worked really hard on and am reall proud of."
        />
        <ProjectCard
          title="Project"
          image="https://www.morrishospital.org/wp-content/uploads/2018/12/penguin2_2.jpg"
          liveLink="http:/live"
          codeLink="http:/code"
          discription="A project that I worked really hard on and am reall proud of."
        />
      </div>
    </div>
  );
}
