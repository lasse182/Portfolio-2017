import React from 'react';
import './LayoutHalfs.css';

const LayoutHalfs = ({ children, modifiers }) => {

  modifiers = modifiers || '';

  return (
    <div className={`layout-halfs ${ modifiers }`}>
      { children }
    </div>
  );
};

export default LayoutHalfs;