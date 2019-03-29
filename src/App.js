import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/layouts/Header';
import Howtouse from './components/layouts/Howtouse';
import IsiBox from './components/layouts/IsiBox';
import Products from './components/layouts/Products';
import Footer from './components/layouts/Footer';

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
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <Howtouse/>
        <IsiBox/>
        <Products/>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
