import React from 'react';
import './Navigation.css';

const Navigation = ({ children }) => {
  return (
    <div className="navigation">
      <div className="navigation--desktop">
        { children }
      </div>
      <div className="navigation--mobile">
        <div className="navigation--mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Navigation;