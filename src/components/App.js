import React, { Component, useState } from "react";
import '../styles/App.css';

function App() {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setposi] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: "0px" });

  const buttonClickHandler = () => {
    setRenderBall({ renderBall: true });
  };
  const renderBallOrButton = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return <button onClick={buttonClickHandler}>Click For One Ball</button>;
    }
  };

  // bind ArrowRight keydown event
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        setposi(posi + 5);

        setBallPosition({ left: posi });
        console.log(posi, "  ", ballPosition.left);
      }
    });
  },[]);
  return <div className="playground">{renderBallOrButton()}</div>;
}


export default App;
