import React from 'react';
  
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          percent : 0,
          text : "Curio Box is now loading "
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
      if(this.state.percent < 100){
        this.setState({
            percent : this.state.percent + 1
          });
      }
      if(this.state.percent === 100){
        this.setState({
            text : "Opening Soon"
          });
      }
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <div>{this.state.percent} %</div>
        </div>
      );
    }
  }
  
  export default Clock;