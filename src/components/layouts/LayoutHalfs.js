import React from 'react';
import './LayoutHalfs.css';

const LayoutHalfs = ({ children }) => {
  return (
    <div className="layout-halfs">
      { children }
    </div>
  );
};

export default LayoutHalfs;