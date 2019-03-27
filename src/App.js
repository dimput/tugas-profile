import React, { Component } from 'react';
import logo from './blkng.png';
import logo2 from './depan.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        percent : 0,
        percentText: "%",
        text : "Curio Box is now loading ",
        isBenar : true
      };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if(this.state.percent < 100 && this.state.isBenar){
      this.setState({
          percent : this.state.percent + 1
        });
    }
    if(this.state.percent === 100){
      this.setState({
          text : "Opening Soon",
          percent : "",
          percentText : "",
          isBenar : false
        });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"style={{position:"absolute"}} />
          <img src={logo2} className="App-logo-1" alt="logo" style={{position:"absolute"}}/>
          <p style={{position:"absolute",bottom:"10px"}}>
            {this.state.text} {this.state.percent} {this.state.percentText}
          </p>
          <a
            className="App-link"
            href="https://www.instagram.com/curiobox.id"
            target="_blank"
            rel="noopener noreferrer"
            style={{position:"absolute",bottom:"70px"}}
          >
            Follow US !
          </a>
        </header>
      </div>
    );
  }
}

export default App;
