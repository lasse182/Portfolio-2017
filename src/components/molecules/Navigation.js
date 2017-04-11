import React from 'react';
import './Navigation.css';

const Navigation = ({ children }) => {
  return (
    <div className="navigation">
     { children }
    </div>
  )
}

export default Navigation;