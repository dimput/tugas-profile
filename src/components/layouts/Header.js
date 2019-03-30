import React from 'react'
import './header.css';
import firebase from './../../config/config.js';

class Header extends React.Component {
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
            Detik : 60,
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
            Jam : 24 - this.state.date.getHours(),
            Menit : 60 - this.state.date.getMinutes(),
            Detik : 60 - this.state.date.getSeconds(),
        });

        if(this.state.Bulan === 0){
            this.setState({
                Hari : 30 - this.state.Hari,
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
  return (
    <div className="Header pink accent-1">
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card ku z-depth-0">
                        <div>
                            <div className="card-title white-text">
                                <h1 style={{fontFamily:"YayFriday"}}>Gift Box Indonesia</h1>
                            </div>
                            <div className="white-text">
                                <p className="header-text">
                                Enjoy a Gift box containing 8-9 items of suprising!
                                </p>
                            </div>
                            <div className="row center-align white-text">
                                <div className="col s3 m3">
                                <div className="col s12 m12">Hari</div>
                                <div className="col s12 m12" style={{fontSize:"35px"}}>    
                                        <b>{this.state.Hari}</b>
                                </div>
                                </div>
                                <div className="col s3 m3">
                                <div className="col s12 m12">Jam</div>
                                <div className="col s12 m12" style={{fontSize:"35px"}}>    
                                        <b>{this.state.Jam}</b>
                                </div>
                                </div>
                                <div className="col s3 m3">
                                <div className="col s12 m12">Menit</div>
                                <div className="col s12 m12" style={{fontSize:"35px"}}>    
                                        <b>{this.state.Menit}</b>
                                </div>
                                </div>
                                <div className="col s3 m3">
                                <div className="col s12 m12">Detik</div>
                                <div className="col s12 m12" style={{fontSize:"35px"}}>    
                                        <b>{this.state.Detik}</b>
                                </div>
                                </div>
                            </div>
                            <div className="header-btn btn red accent-2" style={{fontWeight:"bold"}}>OPENING SOON</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
}

export default Header
