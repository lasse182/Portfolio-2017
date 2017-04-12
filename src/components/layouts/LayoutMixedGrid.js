import React from 'react';
import './LayoutMixedGrid.css';

const LayoutMixedGrid = ({ children }) => {
  return (
    <div className="layout-mixed-grid">
      { children }
    </div>
  );
};

export default LayoutMixedGrid;