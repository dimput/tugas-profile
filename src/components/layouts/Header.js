import React from 'react'
import './header.css';
import firebase from './../../config/config.js';
import satu from './satu.png';
import dua from './dua.png';

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
    <div className="Header">
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="card ku z-depth-0">
                        <div className="center-align">
                            <div>
                                <div className="kotaksurat"></div>
                                <img src={dua} width="200" className="satu" style={{bottom:"220px"}}/>
                                <img src={satu} width="200" className="satu" style={{zIndex:"3"}}/>
                            </div>
                            <div className="card-title white-text center-align">
                                <h1 style={{fontFamily:"YayFriday"}}>Dimas Putra Yudhatama</h1>
                            </div>
                            <div className="white-text">
                                <p className="header-text center-align">
                                    Mahasiswa biasa jurusan Ilmu komputer dan Sistem Informasi UGM
                                </p>
                            </div>
                            <div className="header-btn btn red accent-2 love" style={{fontWeight:"bold",marginRight:"20px"}}><i className="material-icons">favorite</i> <div style={{float:"left", paddingRight:"5px"}}>love</div></div>
                            <div className="header-btn btn red accent-2 unsubscribe" style={{fontWeight:"bold"}}><i className="material-icons">sentiment_very_dissatisfied</i> <div style={{float:"left", paddingRight:"5px"}}>hate</div></div>
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
