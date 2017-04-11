import React from 'react';
import './LayoutOneThird.css';

const LayoutOneThird = ({ children, modifiers }) => {
  return (
    <div className={`layout-one-third ${ modifiers }`}>
        { children }
    </div>
  );
};

export default LayoutOneThird;