import React, { useState } from 'react';

export default function TextBox({ heading, isDarkMode, colorMode, onAction, showWarning }) {
  const [text, setText] = useState('');

  let textBoxStyle;

  switch (colorMode) {
    case 'dark':
      textBoxStyle = { backgroundColor: '#333', color: 'white', border: '1px solid white' };
      break;
    case 'blue':
      textBoxStyle = { backgroundColor: '#e3f2fd', color: 'black', border: '1px solid #004085' }; // Light blue with black text
      break;
    case 'green':
      textBoxStyle = { backgroundColor: '#d4edda', color: 'black', border: '1px solid #155724' }; // Light green with black text
      break;
    default:
      textBoxStyle = { backgroundColor: 'white', color: 'black', border: '1px solid black' };
      break;
  }

  const handleUpClick = () => {
    if (text === text.toUpperCase()) {
      showWarning("Text is already in uppercase.");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      onAction("Text converted to uppercase."); // Trigger success alert with context-specific message
    }
  };

  const handleLoClick = () => {
    if (text === text.toLowerCase()) {
      showWarning("Text is already in lowercase.");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      onAction("Text converted to lowercase."); // Trigger success alert with context-specific message
    }
  };

  const handleClearClick = () => {
    setText('');
    onAction("Text cleared."); // Trigger success alert with context-specific message
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    onAction("Text copied to clipboard."); // Trigger success alert with context-specific message
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/).join(" ");
    if (text === newText) {
      showWarning("No extra spaces to remove.");
    } else {
      setText(newText);
      onAction("Extra spaces removed."); // Trigger success alert with context-specific message
    }
  };

  const handleCapitalizeClick = () => {
    const newText = text.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    if (text === newText) {
      showWarning("Each word is already capitalized.");
    } else {
      setText(newText);
      onAction("Words capitalized."); // Trigger success alert with context-specific message
    }
  };

  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    onAction("Text reversed."); // Trigger success alert with context-specific message
  };

  const countWords = () => {
    return text.split(/\s+/).filter((element) => element.length !== 0).length;
  };

  return (
    <>
      <div className="container">
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="TextBox"
            rows="10"
            style={textBoxStyle}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalize Words</button>
        <button className="btn btn-primary my-5" onClick={handleReverseClick}>Reverse Text</button>
      </div>
      
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{countWords()} words and {text.length} characters</p>
        <p>{0.008 * countWords()} minutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here."}</p>
      </div>
    </>
  );
}
