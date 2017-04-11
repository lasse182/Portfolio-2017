import React from 'react';
import './LayoutContainer.css'

const LayoutContainer = ({ children }) => {
  return (
    <div className="layout-container">
      { children }
    </div>
  );
};

export default LayoutContainer