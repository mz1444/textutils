import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ title, about, isDarkMode, colorMode, handleDarkModeToggle, handleColorMode }) {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    let pageTitle = 'TextUtils';

    if (currentPath === '/about') {
      pageTitle += ' - About Us';
    } else {
      pageTitle += ' - Home';
    }

    document.title = pageTitle;
  }, [location]);

  const switchLabelStyle = (color) => ({
    color: color,
    fontWeight: 'bold',
  });

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{about}</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="form-check form-switch mx-2">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="darkModeSwitch" 
                checked={isDarkMode} 
                onChange={handleDarkModeToggle} 
              />
              <label 
                className="form-check-label" 
                htmlFor="darkModeSwitch" 
                style={switchLabelStyle(isDarkMode ? 'white' : 'black')}
              >
                Dark Mode
              </label>
            </div>
            <div className="form-check form-switch mx-2">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="blueModeSwitch" 
                checked={colorMode === 'blue'}
                onChange={() => handleColorMode('blue')} 
              />
              <label 
                className="form-check-label" 
                htmlFor="blueModeSwitch" 
                style={switchLabelStyle('#004085')}  // Dark blue text
              >
                Blue Mode
              </label>
            </div>
            <div className="form-check form-switch mx-2">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="greenModeSwitch" 
                checked={colorMode === 'green'}
                onChange={() => handleColorMode('green')} 
              />
              <label 
                className="form-check-label" 
                htmlFor="greenModeSwitch" 
                style={switchLabelStyle('#155724')}  // Dark green text
              >
                Green Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  isDarkMode: PropTypes.bool.isRequired,
  colorMode: PropTypes.string.isRequired,
  handleDarkModeToggle: PropTypes.func.isRequired,
  handleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
