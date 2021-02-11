import React from 'react';
import './ProjectCard.scss';
import { FaGithubSquare } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

export default function ProjectCard(props) {
  return (
    <div className="project-card-root">
      <img className="image" src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.discription}</p>

      <div className="project-buttons">
        <a href={props.liveLink}>
          <CgWebsite size={40} color="#437c90" href="google.com" />
        </a>
        <a href={props.codeLink}>
          <FaGithubSquare size={40} color="#437c90" />
        </a>
      </div>
    </div>
  );
}
