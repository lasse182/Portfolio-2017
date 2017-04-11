import React from 'react';
import './LayoutSection.css';

const LayoutSection = ({ children }) => {
  return (
    <div className="layout-section">
      { children }
    </div>
  );
};

export default LayoutSection;