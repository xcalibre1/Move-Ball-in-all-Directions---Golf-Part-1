import React, { Component, useState ,useEffect} from "react";
import '../styles/App.css';
function App() {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setposi] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: "0px" });
  const myStateRef = React.useRef(posi);
  const setMyState = (data) => {
    myStateRef.current = data;
    setposi(data);
  };

  const buttonClickHandler = () => {
    setRenderBall(true);
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
      if (event.keyCode == 39) {
        setMyState(myStateRef.current + 5);
        setBallPosition({ left: myStateRef.current + "px" });
      }
    });
  }, []);
  return <div className="playground">{renderBallOrButton()}</div>;
}

export default App;

