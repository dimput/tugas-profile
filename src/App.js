import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Dashboard from './components/layouts/Dashboard';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'component={Dashboard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    );
  }
}

export default App;
