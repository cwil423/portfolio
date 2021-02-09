import React from 'react';
import './ProjectCard.scss';

export default function ProjectCard(props) {
  return (
    <div className="project-card-root">
      <img className="image" src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.discription}</p>

      <div className="project-buttons">
        <button>live</button>
        <button>code</button>
      </div>
    </div>
  );
}
