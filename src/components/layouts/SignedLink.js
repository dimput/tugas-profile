import React from 'react';
import {NavLink} from 'react-router-dom';
import firebase from './../../config/config.js';

class SignedLink extends React.Component {
    constructor(props){
        super(props);
        this.db  = firebase.database();
        this.refdb = this.db.ref('CountDown');
        this.test.bind(this);
        this.refdb.on('value',this.test);
        this.state = {
            Hari : "",
            Jam : "",
            Menit : "",
            Detik : "",
            date: new Date(),
            Bulan :3   
        }
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
        this.setState({
            date: new Date(),
            Bulan : this.state.Bulan - this.state.date.getMonth(),
            Hari : this.state.date.getDate(),
            Jam : this.state.date.getHours(),
            Menit : this.state.date.getMinutes(),
            Detik : this.state.date.getSeconds(),
        });
        if(this.state.Bulan === 0){
            this.setState({
                Hari : 30 - this.state.Hari
            })
        }
        else{
            this.setState({
                Hari : 30 + (31-this.state.Hari)
            })
        }
      }
    
    test(test){
        var x = test.val().Hari.value;
        console.log("Hari : " + test.val().Hari.value);
    }
    render(){
        return(
            <div>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/" className="hide-on-med-and-down red-text accent-2">{this.state.Hari}</NavLink>
                </li>
                <li>
                    <NavLink className="btn btn-floating red accent-2" to="/">NN</NavLink>
                </li>
            </ul>
            </div>
        )
    }
}

export default SignedLink