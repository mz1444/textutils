import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Component/About';
import TextBox from './Component/TextBox';
import DismissibleAlert from './Component/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    // Update the background color of the entire document body and html
    const rootStyle = document.documentElement.style;
    const bodyStyle = document.body.style;

    switch (colorMode) {
      case 'dark':
        rootStyle.backgroundColor = 'black';
        bodyStyle.backgroundColor = 'black';
        rootStyle.color = 'white';
        bodyStyle.color = 'white';
        break;
      case 'blue':
        rootStyle.backgroundColor = '#cce5ff';
        bodyStyle.backgroundColor = '#cce5ff';
        rootStyle.color = '#004085';
        bodyStyle.color = '#004085';
        break;
      case 'green':
        rootStyle.backgroundColor = '#d4edda';
        bodyStyle.backgroundColor = '#d4edda';
        rootStyle.color = '#155724';
        bodyStyle.color = '#155724';
        break;
      default:
        rootStyle.backgroundColor = 'white';
        bodyStyle.backgroundColor = 'white';
        rootStyle.color = 'black';
        bodyStyle.color = 'black';
        break;
    }
  }, [colorMode]);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2000); // Auto-dismiss alert after 2 seconds
  };

  return (
    <Router>
      <div>
        <Navbar
          title="TextUtils"
          about="About us"
          isDarkMode={colorMode === 'dark'}
          colorMode={colorMode}
          handleDarkModeToggle={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
          handleColorMode={(mode) => setColorMode(colorMode === mode ? 'light' : mode)}
        />

        <div>
          {alert && (
            <DismissibleAlert 
              type={alert.type} 
              message={alert.message} 
              onDismiss={() => setAlert(null)} 
            />
          )}
        </div>

        <div className="container my-3">
          <Routes>
            <Route 
              exact path="/" 
              element={
                <TextBox 
                  heading="Enter the text to analyze" 
                  isDarkMode={colorMode === 'dark'} 
                  colorMode={colorMode}
                  onAction={(message) => showAlert(message, 'success')}
                  showWarning={(message) => showAlert(message, 'warning')}
                />
              } 
            />
            <Route 
              exact path="/about" 
              element={
                <About isDarkMode={colorMode === 'dark'} colorMode={colorMode} />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
