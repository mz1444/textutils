import React from 'react';

export default function About({ isDarkMode, colorMode }) {
  let containerStyle, accordionStyle, accordionButtonStyle, accordionBodyStyle;

  switch (colorMode) {
    case 'dark':
      containerStyle = { backgroundColor: 'black', color: 'white', minHeight: '100vh' };
      accordionStyle = { backgroundColor: 'black', color: 'white', borderColor: 'white' };
      accordionButtonStyle = { backgroundColor: 'black', color: 'white' };
      accordionBodyStyle = { backgroundColor: 'black', color: 'white' };
      break;
    case 'blue':
      containerStyle = { backgroundColor: '#cce5ff', color: '#004085', minHeight: '100vh' };
      accordionStyle = { backgroundColor: '#cce5ff', color: '#004085', borderColor: '#004085' };
      accordionButtonStyle = { backgroundColor: '#cce5ff', color: '#004085' };
      accordionBodyStyle = { backgroundColor: '#cce5ff', color: '#004085' };
      break;
    case 'green':
      containerStyle = { backgroundColor: '#d4edda', color: '#155724', minHeight: '100vh' };
      accordionStyle = { backgroundColor: '#d4edda', color: '#155724', borderColor: '#155724' };
      accordionButtonStyle = { backgroundColor: '#d4edda', color: '#155724' };
      accordionBodyStyle = { backgroundColor: '#d4edda', color: '#155724' };
      break;
    default:
      containerStyle = { backgroundColor: 'white', color: 'black', minHeight: '100vh' };
      accordionStyle = { backgroundColor: 'white', color: 'black', borderColor: 'black' };
      accordionButtonStyle = { backgroundColor: 'white', color: 'black' };
      accordionBodyStyle = { backgroundColor: 'white', color: 'black' };
      break;
  }

  return (
    <div className="Container" style={containerStyle}>
      <div className="accordion" id="accordionExample" style={accordionStyle}>
        <h2 className="my-2">About us</h2>
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={accordionButtonStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionBodyStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={accordionButtonStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionBodyStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={accordionButtonStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionBodyStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
