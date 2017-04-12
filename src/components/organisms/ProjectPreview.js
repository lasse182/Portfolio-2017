import React from 'react';
import './ProjectPreview.css';
import { convertHexToRgba } from '../../utilities/colors';

import { API_ROOT } from '../../constants/api';

const ProjectPreview = ({ project }) => {

  const transparentBackground = convertHexToRgba(project.color, 0.9);

  return (
    <div className="project-preview" style={{ backgroundColor: `${project.color}`, backgroundImage: `url(${API_ROOT}${project.featuredImage})` }}>
      <div className="project-preview--wrapper" style={{ backgroundColor: `${transparentBackground}` }}>
        <div className="project-preview--info">
          <h2>{project.title}</h2>
          <p>{project.subheading}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;

