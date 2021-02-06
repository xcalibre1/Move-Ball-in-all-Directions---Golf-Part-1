import React, { Component, useState } from "react";
import '../styles/App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: {position:absolute,left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
      this.setState({
		    renderBall:true
	    })
      
      
	    document.addEventListener("keydown",(event)=>{
        if(event.keyCode===39){
			    this.setState({
            posi:this.state.posi+5,
            
			    })
        }
        let obj={}
        obj.left=this.state.posi + 'px';
        this.setState({
          ballPosition:obj,
        })
        
      })
      
	    
   
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} className='start'>Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
	    
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton() }
            </div>
        )
    }
}


export default App;
