import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// Create an App.css file for styling

function Transition() {
  const [textToShow, setTextToShow] = useState(0);
  const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4']; // Add your text content here

  const showNextText = () => {
    setTextToShow((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < texts.length ? nextIndex : 0;
    });
  };

  return (
    <div>
      <button onClick={showNextText}>Show Next Text</button>
      {texts.map((text, index) => (
        <CSSTransition
          key={index}
          in={index === textToShow}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="fade">{text}</div>
        </CSSTransition>
      ))}
    </div>
  );
}

export default Transition;
