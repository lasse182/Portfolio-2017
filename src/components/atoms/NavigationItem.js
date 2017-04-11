import React from 'react';
import './NavigationItem.css';

const navigationItem = ({ title, link }) => {
  return (
    <a className="navigation-item" href={ link }>
      {title}
    </a>
  );
};

export default navigationItem;