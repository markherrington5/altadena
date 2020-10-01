import React from 'react';
import aecLogo from '../aeclogo.png';

const Logo = props => (
    <div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="homelogo" src={aecLogo} alt="aec logo" />
        </a>
      </div>
)

export default Logo;
